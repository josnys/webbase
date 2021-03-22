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

     protected $fillable = ['firstname', 'lastname', 'code', 'dob', 'sex', 'identification', 'identification_type', 'address', 'phone'];

     public function getNameAttribute()
     {
          return "{$this->firstname} {$this->lastname}";
     }

     public static function generateCode()
     {
          $rand = mt_rand(1, 9999);
          $rand = Str::padLeft($rand, 5, 0);
          while(self::codeExists($rand)){
               $rand = mt_rand(1, 9999);
               $rand = Str::padLeft($rand, 5, 0);
          }
          return $rand;
     }

     public static function codeExists($code)
     {
          $person = DB::select('select * from people where code = ?', [$code]);
          if(count($person) > 0){
               return true;
          }
          return false;
     }

     public static function serverError()
     {
          return "An error has occured. Please contact developper.";
     }
}
