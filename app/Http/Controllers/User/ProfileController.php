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
use Inertia\Response;

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

    public function edit(Request $request) : Response
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
            $data = $request->payload();
            $user = User::with('person')->find($user->id);
            
            $result = $action->handle($data, $user);

            if(!$result){
                return redirect()->back()->with('error', $this->error500FullText());
            }

            $data_array = $data->toArray();

            if (!is_null($data_array['photo'])) {
                $image = $avatar->handle($data_array['photo'], 'users/');
                $person = Person::find($user->person_id);
                $previous_avatar = $person->profile_url;
                $person->profile_url = $image['name'];
                $person->update();
                
                if(!is_null($previous_avatar)){
                    Person::deleteAvatar($previous_avatar);
                }
            }

            return redirect()->route('user.profile')->with('success', 'Profile updated successfully.');
        } catch (\Exception $e) {
            Log::error('ProfileController updateProfile', ['data' => $e]);
            return redirect()->back()->with('error', $this->error500FullText());
        }
    }
}
