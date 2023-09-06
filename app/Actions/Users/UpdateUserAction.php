<?php

namespace App\Actions\Users;

use App\DTO\UserData;
use App\Models\User;
use App\Models\Person;
use Illuminate\Support\Facades\DB;

class UpdateUserAction
{
     public function handle(UserData $data, User $user): User | bool
     {
          try {
               DB::transaction(function() use ($data, $user) {
                    $data_array = $data->toArray();
                    
                    $person = Person::find($user->person_id);
                    $person->firstname = $data_array['fname'];
                    $person->lastname = $data_array['lname'];
                    $person->dob = $data_array['dob'];
                    $person->sex = $data_array['sex'];
                    $person->identification = $data_array['identification'];
                    $person->identification_type = $data_array['identificationType'];
                    $person->address = $data_array['address'];
                    $person->phone = $data_array['phone'];
                    $person->update();

                    $user->username = !is_null($data_array['username']) ? $data_array['username'] : $user->username;
                    $user->email = !is_null($data_array['email']) ? $data_array['email'] : $user->email;
                    $user->update();
               });

               return $user;
          } catch (\Exception $e) {
               info($e);
          }
     }
}
