<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
     /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
     {
          $user = new User;
          $user->name = 'Josny J. Severe';
          $user->username = 'josnys';
          $user->email = 'dirjos2014@gmail.com';
          $user->password = Hash::make('password');
          $user->save();
          $user->syncRoles([1]);
     }
}
