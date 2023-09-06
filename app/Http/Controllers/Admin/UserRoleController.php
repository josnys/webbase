<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRoleRequest;
use App\Services\Admin\UserService;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Inertia\Response;

class UserRoleController extends Controller
{
    protected $user_service;

    public function __construct()
    {
        $this->user_service = new UserService;
    }

    public function edit(User $user) : Response
    {
        try {
            $user = $this->user_service->findId($user->id);
            $_roles = Role::all();
            $user_roles = $user->roles->pluck('id')->toArray();

            $roles = array();
            foreach ($_roles as $rl) {
                array_push($roles, [
                    'id' => $rl->id,
                    'display' => $rl->display_name,
                    'description' => $rl->description,
                    'isCheck' => in_array($rl->id, $user_roles)
                ]);
            }
            
            return Inertia::render('Admin/User/Role', [
                'info' => [
                    'roles' => $roles,
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->person->name,
                        'username' => $user->username,
                        'email' => $user->email,
                        'avatar' => $user->person->avatar,
                    ],
                    'user_roles' => $user_roles
                ]
            ]);
        } catch (\Exception $e) {
            Log::error('User get role', ['data' => $e]);
            return redirect()->back()->with('error', $this->error500FullText());
        }
    }

    public function update(UserRoleRequest $request, User $user) : RedirectResponse
    {
        try {
            $input = $request->validated();
            
            $user->syncRoles($input['user_roles']);

            return redirect()->route('admin.user.index')->with('success', 'Role successfully assigned to ' . $user->name);
        } catch (\Exception $e) {
            Log::error('User post role', ['data' => $e]);
            return redirect()->back()->with('error', $this->error500FullText());
        }
    }
}
