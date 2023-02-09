<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Models\Person;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
     use PasswordValidationRules;

     /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
     public function create(array $input)
     {
          Validator::make($input, [
               'first_name' => ['required', 'string', 'max:255'],
               'last_name' => ['required', 'string', 'max:255'],
               'email' => ['required', 'string', 'email:rfc,dns,spoof', 'max:255', 'unique:users'],
               'username' => ['required', 'string', 'alpha_dash', 'max:255', 'unique:users'],
               'password' => $this->passwordRules(),
          ])->validate();

          $code = Person::generateCode();
          $person = new Person;
          $person->firstname = $input['first_name'];
          $person->lastname = $input['last_name'];
          $person->code = $code;
          $person->save();

          $user = User::create([
               'person_id' => $person->id,
               'username' => $input['username'],
               'email' => $input['email'],
               'password' => Hash::make($input['password']),
          ]);

          $user->syncRoles([2]);
          return $user;
     }
}
