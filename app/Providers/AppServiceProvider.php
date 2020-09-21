<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use League\Glide\Server;
use Carbon\CarbonImmutable;
use Illuminate\Support\Collection;
use Illuminate\Pagination\UrlWindow;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Models\User;

class AppServiceProvider extends ServiceProvider
{
     /**
     * Register any application services.
     *
     * @return void
     */
     public function register()
     {
          $this->registerInertia();
          $this->registerGlide();
          $this->registerLengthAwarePaginator();
     }

     /**
     * Bootstrap any application services.
     *
     * @return void
     */
     public function boot()
     {
          Date::use(CarbonImmutable::class);
     }

     public function registerInertia(){
          Inertia::version(function () {
               return md5_file(public_path('mix-manifest.json'));
          });

          Inertia::share([
               'app' => function(){
                    return [
                         'name' => config('app.name')
                    ];
               },
               'auth' => function () {
                    $user = Auth::user() ? User::with(['roles' => function($roles){
                         return $roles->with('permissions');
                    }])->find(Auth::user()->id) : null;
                    $roles = array();
                    $permissions = array();
                    if($user){
                         foreach($user->roles as $r){
                              array_push($roles, [
                                   'name' => $r->name,
                                   'display' => $r->display_name
                              ]);
                              foreach($r->permissions as $p){
                                   array_push($permissions, $p->name);
                              }
                         }
                    }

                    return [
                         'user' => $user ? [
                              'id' => $user->id,
                              'name' => $user->name,
                              'username' => $user->username,
                              'email' => $user->email,
                              'avatar' => null, // (Auth::user()->profile_url) ? asset('storage/users/'.Auth::user()->profile_url) : null
                              'roles' => ($roles) ? $roles : null,
                              'can' => ($permissions) ? $permissions : null
                         ] : null,
                    ];
               },
               'flash' => function () {
                    return [
                         'success' => Session::get('success'),
                         'error' => Session::get('error'),
                    ];
               },
               'errors' => function () {
                    return Session::get('errors')
                         ? Session::get('errors')->getBag('default')->getMessages()
                         : (object) [];
                    },
          ]);
     }

     protected function registerGlide(){
          $this->app->bind(Server::class, function ($app){
               return Server::create([
                    'source' => Storage::getDriver(),
                    'cache' => Storage::getDriver(),
                    'cache_folder' => '.glide-cache',
                    'base_url' => 'img',
               ]);
          });
     }

     protected function registerLengthAwarePaginator(){
          $this->app->bind(LengthAwarePaginator::class, function ($app, $values){
               return new class (...array_values($values)) extends LengthAwarePaginator {
                    public function only(...$attributes){
                         return $this->transform(function ($item) use ($attributes) {
                              return $item->only($attributes);
                         });
                    }

                    public function transform($callback){
                         $this->items->transform($callback);
                         return $this;
                    }

                    public function toArray(){
                         return [
                              'data' => $this->items->toArray(),
                              'links' => $this->links(),
                         ];
                    }

                    public function links($view = null, $data = []){
                         $this->appends(Request::all());
                         $window = UrlWindow::make($this);

                         $elements = array_filter([
                              $window['first'],
                              is_array($window['slider']) ? '...' : null,
                              $window['slider'],
                              is_array($window['last']) ? '...' : null,
                              $window['last'],
                         ]);

                         return Collection::make($elements)->flatMap(function ($item) {
                              if (is_array($item)) {
                                   return Collection::make($item)->map(function ($url, $page) {
                                        return [
                                             'url' => $url,
                                             'label' => $page,
                                             'active' => $this->currentPage() === $page,
                                        ];
                                   });
                              }else{
                                   return [
                                        [
                                             'url' => null,
                                             'label' => '...',
                                             'active' => false,
                                        ],
                                   ];
                              }
                         })->prepend([
                              'url' => $this->previousPageUrl(),
                              'label' => 'Previous',
                              'active' => false,
                         ])->push([
                              'url' => $this->nextPageUrl(),
                              'label' => 'Next',
                              'active' => false,
                         ]);
                    }
               };
          });
     }
}
