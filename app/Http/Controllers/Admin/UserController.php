<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Models\Role;
use Inertia\Inertia;

class UserController extends Controller
{
     public function __construct()
     {
          $this->middleware('auth');
     }

     public function index()
     {
          $users = User::with('roles')->paginate(20)->transform(function($user){
               $roles = array();
               foreach($user->roles as $rl){
                    array_push($roles, $rl->display_name);
               }
               return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'username' => $user->username,
                    'email' => $user->email,
                    'avatar' => null,
                    'roles' => $roles
               ];
          });

          return Inertia::render('Admin/User/Index', ['data' => $users]);
     }

     public function edit(User $user)
     {
          return Inertia::render('Admin/User/Edit', ['data' => [
               'id' => $user->id,
               'name' => $user->name,
               'username' => $user->username,
               'email' => $user->email,
               'avatar' => null
          ]]);
     }

     public function update(UserRequest $request, User $user)
     {
          $user->name = $request->get('name');
          $user->update();
          return redirect()->route('user.index')->with('success', 'User updated successfully.');
     }

     public function getRoles(User $user)
     {
          $_roles = Role::all();
          $user_roles = array();
          $rol_es = $user->with('roles')->first();
          foreach($rol_es->roles as $ur){
               array_push($user_roles, $ur->id);
          }

          $roles = array();
          foreach($_roles as $rl){
               array_push($roles, [
                    'id' => $rl->id,
                    'display' => $rl->display_name,
                    'description' => $rl->description,
                    'isCheck' => in_array($rl->id, $user_roles)
               ]);
          }

          return Inertia::render('Admin/User/Role', [
               'data' => [
                    'roles' => $roles,
                    'user' => [
                         'id' => $user->id,
                         'name' => $user->name,
                         'username' => $user->username,
                         'email' => $user->email,
                         'avatar' => null
                    ],
                    'user_roles' => $user_roles
               ]
          ]);
     }

     public function postRole(Request $request, User $user)
     {
          $request->validate([
               'user_roles' => ['required', 'array'],
               'user_roles.*' => ['integer'],
          ]);
          $user->syncRoles($request->get('user_roles'));
          return redirect()->route('user.index')->with('success', 'Role successfully assigned to '.$user->name);
     }
}
