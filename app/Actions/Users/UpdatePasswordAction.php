<?php

namespace App\Actions\Users;

use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UpdatePasswordAction {
     
     public function handle(array $input, User $user) : bool
     {
          try {
               $user->password = Hash::make($input['password']);

               if (isset($input['pin']) && !is_null($input['pin'])) {
                    $user->pin = $input['pin'];
               }

               return $user->update();
          } catch (\Exception $e) {
               info($e);
          }
     }
}