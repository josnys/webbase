<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use App\Services\Admin\UserService;

class HandleInertiaRequests extends Middleware
{
     /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
     public function version(Request $request)
     {
          return parent::version($request);
     }

     /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
     public function share(Request $request)
     {
          $user_service = new UserService;

          return array_merge(parent::share($request), [
               'app' => function(){
                    return [
                         'name' => config('app.name'),
                         'system' => [
                              'name' => 'Starter Template',
                              'version' => 'v1.0'
                         ]
                    ];
               },
               'auth' => function () use ($user_service, $request) {
                    $user = Auth::user() ? $user_service->findId(auth()->id()) : null;
                    $permissions = [
                         'users' => $user ? $request->user()->isAbleTo('read-user') : null,
                         'admin' => $user ? $request->user()->isAbleTo('admin-access') : null,
                    ];

                    return [
                         'user' => $user ? [
                              'id' => $user->id,
                              'name' => $user->person->name,
                              'username' => $user->username,
                              'email' => $user->email,
                              'avatar' => $user->person->avatar,
                              'roles' => $user->roles->pluck('displa_name')->toArray(),
                              'can' => $permissions ?? []
                         ] : null,
                    ];
               },
               'flash' => function () {
                    return [
                         'success' => Session::get('success'),
                         'warning' => Session::get('warning'),
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
}
