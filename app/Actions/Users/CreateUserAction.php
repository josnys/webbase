<?php

namespace App\Actions\Users;

use App\Http\Requests\CreateUserRequest;
use App\Models\User;
use App\Models\Person;
use Illuminate\Support\Facades\Hash;

class CreateUserAction
{
     public function handle(array $data): User
     {
          try {
               $code = Person::generateCode();
               $person = new Person;
               $person->firstname = $data['fname'];
               $person->lastname = $data['lname'];
               $person->code = $code;
               $person->dob = $data['dob'];
               $person->sex = $data['sex'];
               $person->identification = $data['identification'];
               $person->identification_type = $data['identificationType'];
               $person->address = $data['address'];
               $person->phone = $data['phone'];
               $person->save();
               $pid = $person->id;

               $user = new User;
               $user->person_id = $pid;
               $user->username = $data['username'];
               $user->email = $data['email'];
               $user->password = Hash::make($data['password']);
               if($data['pin'] != null){
                    $user->pin = $data['pin'];
               }
               $user->save();

               return $user;
          } catch (\Exception $e) {
               info($e);
          }
     }
}
