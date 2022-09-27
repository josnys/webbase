<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Permission;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class SecurityController extends Controller
{
     public function index()
     {
          try {
               $roles = Role::paginate(20)->transform(function($role){
                    return [
                         'id' => $role->id,
                         'name' => $role->name,
                         'display' => $role->display_name,
                         'description' => $role->description
                    ];
               });
               return Inertia::render('Admin/Security/Index', ['info' => [
                    'roles' => $roles,
                    'header' => ['Display Name', 'Name', 'Description', ''],
                    'access' => [
                         'create_role' => auth()->user()->isAbleTo('create-role'),
                         'update_role' => auth()->user()->isAbleTo('update-role'),
                         'create_permission' => auth()->user()->isAbleTo('create-permission') && (auth()->id() === 1),
                         'assign_permission' => auth()->user()->isAbleTo('assign-permission'),
                    ],
               ]]);
          } catch (\Exception $e) {
               Log::error('Security index', ['data' => $e]);
               return redirect()->back()->with('error', Role::serverError());
          }
     }
}
