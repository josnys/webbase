<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Person;
use App\Models\User;
use App\Models\Customer;

class UserSeeder extends Seeder
{
     /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
     {
          $person = new Person;
          $person->firstname = 'Super';
          $person->lastname = 'Admin';
          $person->code = '0000';
          $person->dob = '1900-01-01';
          $person->sex = 'Man';
          $person->identification = '000-000-0000-000';
          $person->identification_type = 'SSN';
          $person->address = '127.0.0.1';
          $person->phone = '+1 000-000-0000';
          $person->profile_url = null;
          $person->save();

          $user = new User;
          $user->person_id = $person->id;
          $user->username = 'admin';
          $user->email = 'admin@app.com';
          $user->pin = '1234';
          $user->multi_connect = true;
          $user->password = Hash::make('password');
          $user->save();
          $user->syncRoles([1]);
     }
}
