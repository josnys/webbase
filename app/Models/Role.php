<?php

namespace App\Models;

use Laratrust\Models\LaratrustRole;

class Role extends LaratrustRole
{
     public $guarded = [];

     public function permissions()
     {
          return $this->belongsToMany('App\Models\Permission', 'permission_role');
     }

     public static function serverError()
     {
          return "An error has occured. Please contact developper.";
     }
}
