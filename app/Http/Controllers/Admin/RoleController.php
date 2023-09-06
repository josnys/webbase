<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RolePermissionRequest;
use Illuminate\Http\Request;
use App\Http\Requests\RoleRequest;
use App\Models\Role;
use App\Models\Permission;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Inertia\Response;

class RoleController extends Controller
{
     public function create() : Response
     {
          try {
               $roles = Role::paginate(50)->transform(function($role){
                    return [
                         'id' => $role->id,
                         'name' => $role->name,
                         'display' => $role->display_name,
                         'description' => $role->description
                    ];
               });
               return Inertia::render('Admin/Security/CreateRole', ['info' => [
                    'roles' => $roles,
                    'header' => ['Display Name', 'Name', 'Description', ''],
               ]]);
          } catch (\Exception $e) {
               Log::error('Role create', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function store(RoleRequest $request) : RedirectResponse
     {
          try {
               $role = new Role;
               $role->name = $request->get('name');
               $role->display_name = $request->get('display');
               $role->description = $request->get('description');
               $role->save();

               return redirect()->route('admin.security.index')->with('success', 'Role created successfully.');
          } catch (\Exception $e) {
               Log::error('Role store', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function edit(Role $role) : Response
     {
          try {
               return Inertia::render('Admin/Security/EditRole', ['info' => [
                    'id' => $role->id,
                    'name' => $role->name,
                    'display' => $role->display_name,
                    'description' => $role->description
               ]]);
          } catch (\Exception $e) {
               Log::error('Role edit', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function update(RoleRequest $request, Role $role) : RedirectResponse
     {
          try {
               $role->display_name = $request->get('display');
               $role->description = $request->get('description');
               $role->update();

               return redirect()->route('admin.security.index')->with('success', 'Role Updated.');
          } catch (\Exception $e) {
               Log::error('Role update', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function getAssign(Role $role) : Response
     {
          try {
               $role = $role->with('permissions')->find($role->id);
               $_permissions = Permission::all();
               $role_permission = $role->permissions->map(function($perm){
                    return ['id' => $perm->id];
               })->toArray();

               $permissions = array();
               foreach($_permissions as $permission){
                    array_push($permissions, [
                         'id' => $permission->id,
                         'display' => $permission->display_name,
                         'description' => $permission->description,
                         'isCheck' => (array_search($permission->id, array_column($role_permission, 'id')) === false) ? false : true
                    ]);
               }

               return Inertia::render('Admin/Security/AssignPermission', ['info' => [
                    'role' => [
                         'id' => $role->id,
                         'display' => $role->display_name,
                         'name' => $role->name,
                         'description' => $role->description
                    ],
                    'permissions' => $permissions,
                    'role_permissions' => $role_permission
               ]]);
          } catch (\Exception $e) {
               Log::error('Role get assign', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function postAssign(RolePermissionRequest $request, Role $role) : RedirectResponse
     {
          try {
               $input = $request->validated();
               
               $role->syncPermissions($input['role_permissions']);

               return redirect()->route('admin.security.index')->with('success', 'Permissions successfully assigned to '.$role->display_name);
          } catch (\Exception $e) {
               Log::error('Role post assign', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }
}
