<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class Person extends Model
{
     use HasFactory;
     use SoftDeletes;

     protected $fillable = ['firstname', 'lastname', 'code', 'dob', 'sex', 'identification', 'identification_type', 'address', 'phone', 'profile_url'];

     public function getNameAttribute() : string
     {
          return "{$this->firstname} {$this->lastname}";
     }

     public function getAvatarAttribute() : string | null
     {
          return ($this->profile_url && Storage::disk('local')->exists('users/' . $this->profile_url)) ? route('show.image', 'users/' . $this->profile_url) : null;
     }

     public static function generateCode() : string
     {
          $code = DB::table('people')->select([
               DB::raw('COUNT(id) as `code`'),
          ])->get()->count();
          
          return Str::padLeft($code, 4, 0);
     }
}
