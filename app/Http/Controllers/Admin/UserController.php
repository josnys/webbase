<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Actions\Users\CreateUserAction;
use App\Actions\Users\UpdateUserAction;
use App\Services\Admin\UserService;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Inertia\Response;

class UserController extends Controller
{
     protected $userSex;
     protected $identityType;
     protected $user_service;

     public function __construct()
     {
          $this->userSex = [
               ['code' => 'Man', 'name' => 'Man'],
               ['code' => 'Woman', 'name' => 'Woman']
          ];
          $this->identityType = [
               ['code' => 'CIN', 'name' => 'CIN'],
               ['code' => 'Passport', 'name' => 'Passport'],
               ['code' => 'Driver License', 'name' => 'Driver License']
          ];

          $this->user_service = new UserService();
     }

     public function index(Request $request) : Response
     {
          try {
               return Inertia::render('Admin/User/Index', ['info' => [
                    'users' => $this->user_service->getAll(),
                    'header' => ['', 'Code', 'Name', 'Username', 'E-mail', 'Roles', ''],
                    'access' => [
                         'create' => $request->user()->isAbleTo('create-user'),
                         'edit' => $request->user()->isAbleTo('update-user'),
                         'change_pass' => $request->user()->isAbleTo('change-user-password'),
                         'assign_role' => $request->user()->isAbleTo('assign-role'),
                         // 'filter' => $request->user()->isAbleTo('filter-user'),
                         'role_group' => $request->user()->isAbleTo('create-role'),
                    ],
               ]]);
          } catch (\Exception $e) {
               Log::error('User index', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function create() : Response
     {
          try {
               return Inertia::render('Admin/User/Create', ['info' => [
                    'sexes' => $this->userSex,
                    'identityType' => $this->identityType
               ]]);
          } catch (\Exception $e) {
               Log::error('User create', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function store(CreateUserRequest $request, CreateUserAction $action) : RedirectResponse
     {
          try {
               $user = $action->handle($request->payload());
               if(!$user){
                    return redirect()->back()->with('error', 'Something went wrong, try again later.');
               }
               return redirect()->route('admin.user.index')->with('success', 'User saved successfully.');
          } catch (\Exception $e) {
               Log::error('User store', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function edit(User $user) : Response
     {
          try {
               return Inertia::render('Admin/User/Edit', ['info' => [
                    'user' => $this->user_service->findId($user->id),
                    'sexes' => $this->userSex,
                    'identityType' => $this->identityType
               ]]);
          } catch (\Exception $e) {
               Log::error('User edit', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function update(UpdateUserRequest $request, User $user, UpdateUserAction $action) : RedirectResponse
     {
          try {
               $user = $action->handle($request->payload(), $user);
               if(!$user){
                    return redirect()->back()->with('error', 'Something went wrong, try again later.');
               }
               return redirect()->route('admin.user.index')->with('success', 'User updated successfully.');
          } catch (\Exception $e) {
               Log::error('User update', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }
}
