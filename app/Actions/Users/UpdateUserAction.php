<?php

namespace App\Actions\Users;

use App\Models\User;
use App\Models\Person;
use Illuminate\Support\Facades\DB;

class UpdateUserAction
{
     public function handle(array $data, User $user): User | bool
     {
          try {
               DB::transaction(function() use ($data, $user) {
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

                    if (isset($data['username'])) {
                         $user->username = $data['username'];
                    }

                    if (isset($data['email'])) {
                         $user->email = $data['email'];
                    }

                    $user->update();
               });

               return $user;
          } catch (\Exception $e) {
               info($e);
          }
     }
}
