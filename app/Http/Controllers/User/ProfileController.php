<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\MessageBag;
use App\Actions\Users\UpdateUserAction;
use App\Actions\Image\ImageManipulationAction;
use App\Http\Requests\ProfileRequest;
use App\Http\Requests\PasswordRequest;
use App\Models\User;
use App\Models\Person;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ProfileController extends Controller
{
    protected $userSex;
    protected $identityType;

    public function __construct()
    {
        $this->userSex = [['code' => 'Man', 'name' => 'Man'], ['code' => 'Woman', 'name' => 'Woman']];
        $this->identityType = [['code' => 'SSN', 'name' => 'SSN'], ['code' => 'CIN', 'name' => 'CIN'], ['code' => 'Passport', 'name' => 'Passport'], ['code' => 'Driver License', 'name' => 'Driver License']];
    }

    public function editProfile(Request $request)
    {
        try {
            $user = User::with('person')->find(Auth::id());
            return Inertia::render('User/User/Profile', [
                'user' => [
                    'id' => $user->id,
                    'fname' => $user->person->firstname,
                    'lname' => $user->person->lastname,
                    'dob' => $user->person->dob,
                    'sex' => $user->person->sex,
                    'identification' => $user->person->identification,
                    'identificationType' => $user->person->identification_type,
                    'phone' => $user->person->phone,
                    'address' => $user->person->address,
                    'username' => $user->username,
                    'email' => $user->email,
                    'currentAvatar' => $user->avatar
                ],
                'info' => [
                    'sexes' => $this->userSex,
                    'identityType' => $this->identityType
                ]
            ]);
        } catch (\Exception $e) {
            Log::error('ProfileController editProfile', ['data' => $e]);
            return redirect()->back()->with('error', $this->error500FullText());
        }
    }

    public function updateProfile(ProfileRequest $request, User $user, UpdateUserAction $action, ImageManipulationAction $avatar)
    {
        try {
            $user = User::with('person')->find($user->id);
            $input = $request->validated();
            
            $result = $action->handle($input, $user);

            if(!$result){
                return redirect()->back()->with('error', $this->error500FullText());
            }


            if ($request->hasFile('avatar')) {
                $image = $avatar->handle($request->file('avatar'), 'users/');
                $person = Person::find($user->person_id);
                $person->profile_url = $image['name'];
                $person->update();
            }

            return redirect()->route('user.profile')->with('success', 'Profile updated successfully.');
        } catch (\Exception $e) {
            Log::error('ProfileController updateProfile', ['data' => $e]);
            return redirect()->back()->with('error', $this->error500FullText());
        }
    }

    public function editPassword()
    {
        try {
            $user = User::find(Auth::id());
            return Inertia::render('User/User/Password', [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'currentAvatar' => $user->avatar
                ]
            ]);
        } catch (\Exception $e) {
            Log::error('ProfileController editPassword', ['data' => $e]);
            return redirect()->back()->with('error', $this->error500FullText());
        }
    }

    public function updatePassword(PasswordRequest $request, User $user)
    {
        try {
            $message = new MessageBag;
            if (!Hash::check($request->get('current_password'), $user->password)) {
                $message->add('current_password', 'Current Password is not valid.');
                return redirect()->back()->withErrors($message);
            }

            if (Hash::check($request->get('password'), $user->password)) {
                $message->add('password', 'New password has been recently used. Kindly choose another one.');
                return redirect()->back()->withErrors($message);
            }

            $user->password = Hash::make($request->get('password'));
            $user->update();

            Auth::logout();

            return redirect()->route('login')->with('success', 'Password updated successfully. Please, login with your new password.');
        } catch (\Exception $e) {
            Log::error('ProfileController updatePassword', ['data' => $e]);
            return redirect()->back()->with('error', $this->error500FullText());
        }
    }
}
