<?php

namespace App\Models;

use Laratrust\Models\LaratrustRole;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends LaratrustRole
{
     public $guarded = [];

     public function permissions() : BelongsToMany
     {
          return $this->belongsToMany('App\Models\Permission', 'permission_role');
     }
}
