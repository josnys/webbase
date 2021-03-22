<?php

namespace App\Models;

use Laratrust\Models\LaratrustPermission;

class Permission extends LaratrustPermission
{
     public $guarded = [];

     public static function serverError()
     {
          return "An error has occured. Please contact developper.";
     }
}
