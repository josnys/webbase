<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Users\UpdateUserAction;
use App\Actions\Image\ImageManipulationAction;
use App\Http\Requests\ProfileRequest;
use App\Models\User;
use App\Models\Person;
use App\Services\Admin\UserService;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ProfileController extends Controller
{
    protected $userSex;
    protected $identityType;
    protected $user_service;

    public function __construct()
    {
        $this->userSex = [['code' => 'Man', 'name' => 'Man'], ['code' => 'Woman', 'name' => 'Woman']];
        $this->identityType = [['code' => 'SSN', 'name' => 'SSN'], ['code' => 'CIN', 'name' => 'CIN'], ['code' => 'Passport', 'name' => 'Passport'], ['code' => 'Driver License', 'name' => 'Driver License']];
        $this->user_service = new UserService;
    }

    public function edit(Request $request)
    {
        try {
            $user = $this->user_service->findId(auth()->id());
            return Inertia::render('User/Profile/Edit', [
                'user' => $this->user_service->findId(auth()->id()),
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

    public function update(ProfileRequest $request, User $user, UpdateUserAction $action, ImageManipulationAction $avatar)
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
}
