<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\PermissionRequest;
use App\Models\Permission;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Inertia\Response;

class PermissionController extends Controller
{
     public function create(Request $request) : Response
     {
          try {
               $permissions = Permission::paginate(50)->transform(function($permission){
                    return [
                         'id' => $permission->id,
                         'name' => $permission->name,
                         'display' => $permission->display_name,
                         'description' => $permission->description
                    ];
               });
               return Inertia::render('Admin/Security/CreatePermission', ['info' => [
                    'permissions' => $permissions,
                    'header' => ['Display Name', 'Name', 'Description', ''],
                    'access' => [
                         'edit' => $request->user()->isAbleTo('update-permission'),
                    ],
               ]]);
          } catch (\Exception $e) {
               Log::error('Permission create', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function store(PermissionRequest $request) : RedirectResponse
     {
          try {
               $permission = new Permission;
               $permission->name = $request->get('name');
               $permission->display_name = $request->get('display');
               $permission->description = $request->get('description');
               $permission->save();

               return redirect()->back()->with('success', 'Permission created successfully.');
          } catch (\Exception $e) {
               Log::error('Permission store', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function edit(Permission $permission) : Response
     {
          try {
               return Inertia::render('Admin/Security/EditPermission', ['info' => [
                    'id' => $permission->id,
                    'name' => $permission->name,
                    'display' => $permission->display_name,
                    'description' => $permission->description
               ]]);
          } catch (\Exception $e) {
               Log::error('Permission edit', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }

     public function update(PermissionRequest $request, Permission $permission) : RedirectResponse
     {
          try {
               $permission->display_name = $request->get('display');
               $permission->description = $request->get('description');
               $permission->update();

               return redirect()->route('admin.permission.create')->with('success', 'Permission Updated.');
          } catch (\Exception $e) {
               Log::error('Permission update', ['data' => $e]);
               return redirect()->back()->with('error', $this->error500FullText());
          }
     }
}
