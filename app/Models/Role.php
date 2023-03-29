<?php

namespace App\Models;

use Laratrust\Models\Role as RoleModel;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends RoleModel
{
     public $guarded = [];

     public function permissions() : BelongsToMany
     {
          return $this->belongsToMany(Permission::class, 'permission_role');
     }
}
