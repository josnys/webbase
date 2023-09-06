<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\MessageBag;
use App\Http\Requests\PasswordRequest;
use App\Actions\Users\UpdatePasswordAction;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Inertia\Response;

class PasswordController extends Controller
{
    public function edit(Request $request, User $user) : Response
    {
        try {
            $user = $user->with('person')->find($user->id);
            return Inertia::render('Admin/User/ChangePassword', ['info' => [
                'id' => $user->id,
                'name' => $user->person->name,
                'code' => $user->code,
            ]]);
        } catch (\Exception $e) {
            Log::error('User reset password', ['data' => $e]);
            return redirect()->back()->with('error', $this->error500FullText());
        }
    }

    public function update(PasswordRequest $request, User $user, UpdatePasswordAction $action) : RedirectResponse
    {
        try {
            $input = $request->validated();
            $message = new MessageBag;
            if (!Hash::check($input['current_password'], $user->password)) {
                $message->add('current_password', 'Current Password is not valid.');
                return redirect()->back()->withErrors($message);
            }

            if (Hash::check($input['password'], $user->password)) {
                $message->add('password', 'New password has been recently used. Kindly choose another one.');
                return redirect()->back()->withErrors($message);
            }

            $data = $action->handle($input, $user);

            if(!$data){
                return redirect()->back()->with('error', 'Unable to update your password. Please try again');
            }

            return redirect()->route('admin.user.index')->with('success', 'User Password changed successfully.');
        } catch (\Exception $e) {
            Log::error('User post reset password', ['data' => $e]);
            return redirect()->back()->with('error', $this->error500FullText());
        }
    }
}
