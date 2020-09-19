<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\PermissionRequest;
use App\Models\Permission;
use Inertia\Inertia;

class PermissionController extends Controller
{
     public function __construct()
     {
          $this->middleware('auth');
     }

     public function create()
     {
          $permissions = Permission::paginate(100)->transform(function($permission){
               return [
                    'id' => $permission->id,
                    'name' => $permission->name,
                    'display' => $permission->display_name,
                    'description' => $permission->description
               ];
          });
          return Inertia::render('Admin/Security/CreatePermission', ['data' => $permissions]);
     }

     public function store(PermissionRequest $request)
     {
          $permission = new Permission;
          $permission->name = $request->get('name');
          $permission->display_name = $request->get('display');
          $permission->description = $request->get('description');
          $permission->save();
          return response()->json([
               'message' => 'Permission created successfully.',
               'data' => [
                    'id' => $permission->id,
                    'name' => $permission->name,
                    'display' => $permission->display_name,
                    'description' => $permission->description
               ]
          ], 201);
     }

     public function edit(Permission $permission)
     {
          return Inertia::render('Admin/Security/EditPermission', ['data' => [
               'id' => $permission->id,
               'name' => $permission->name,
               'display' => $permission->display_name,
               'description' => $permission->description
          ]]);
     }

     public function update(PermissionRequest $request, Permission $permission)
     {
          $permission->display_name = $request->get('display');
          $permission->description = $request->get('description');
          $permission->update();

          return redirect()->route('security.index')->with('success', 'Permission Updated.');
     }
}
