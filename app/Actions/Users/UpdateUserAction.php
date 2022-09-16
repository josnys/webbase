<?php

namespace App\Actions\Users;

use App\Http\Requests\CreateUserRequest;
use App\Models\User;
use App\Models\Person;
use Illuminate\Support\Facades\Hash;

class UpdateUserAction
{
     public function handle(array $data, User $user): bool
     {
          try {
               $person = Person::find($user->person_id);
               $person->firstname = $data['fname'];
               $person->lastname = $data['lname'];
               $person->dob = $data['dob'];
               $person->sex = $data['sex'];
               $person->identification = $data['identification'];
               $person->identification_type = $data['identificationType'];
               $person->address = $data['address'];
               $person->phone = $data['phone'];
               $person->update();

               return $user->update();
          } catch (\Exception $e) {
               info($e);
          }
     }
}
