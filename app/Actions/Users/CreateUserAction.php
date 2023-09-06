<?php

namespace App\Actions\Users;

use App\DTO\UserData;
use App\Models\User;
use App\Models\Person;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class CreateUserAction
{
     public function handle(UserData $data): User | null
     {
          try {
               $user = null;
               DB::transaction(function() use ($data, &$user) {
                    $data_array = $data->toArray();
                    $code = Person::generateCode();
                    $person = new Person;
                    $person->firstname = $data_array['fname'];
                    $person->lastname = $data_array['lname'];
                    $person->code = $code;
                    $person->dob = $data_array['dob'];
                    $person->sex = $data_array['sex'];
                    $person->identification = $data_array['identification'];
                    $person->identification_type = $data_array['identificationType'];
                    $person->address = $data_array['address'];
                    $person->phone = $data_array['phone'];
                    $person->save();
                    $pid = $person->id;

                    $user = new User;
                    $user->person_id = $pid;
                    $user->username = $data_array['username'];
                    $user->email = $data_array['email'];
                    $user->password = Hash::make($data_array['password']);
                    if ($data_array['pin'] != null) {
                         $user->pin = $data_array['pin'];
                    }
                    
                    $user->save();
               });

               return $user;
          } catch (\Exception $e) {
               info($e);
          }
     }
}
