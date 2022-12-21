<?php 

namespace app\Services\Admin;

use App\Http\Resources\Admin\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use PhpParser\Node\Stmt\TryCatch;

class UserService
{
     public function getAll()
     {
          try {
               $users = User::with('person')->with('roles')->access()->paginate(20);

               return UserResource::collection($users);
          } catch (\Exception $e) {
               Log::error('UserService getAll', ['data' => $e]);
          }
     }

     public function findId(int $id)
     {
          try {
               return new UserResource(User::with('person')->with('roles')->find($id));
          } catch (\Exception $e) {
               Log::error('UserService getAll', ['data' => $e]);
          }
     }
}