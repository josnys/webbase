<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class Person extends Model
{
     use HasFactory;
     use SoftDeletes;

     protected $fillable = ['firstname', 'lastname', 'code', 'dob', 'sex', 'identification', 'identification_type', 'address', 'phone', 'profile_url'];

     public function getNameAttribute()
     {
          return "{$this->firstname} {$this->lastname}";
     }

     public static function generateCode()
     {
          $code = DB::table('people')->select([
               DB::raw('COUNT(id) as `code`'),
          ])->get()->count();
          
          return Str::padLeft($code, 4, 0);
     }
}
