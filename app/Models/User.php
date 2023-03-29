<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laratrust\Contracts\LaratrustUser;
use Laratrust\Traits\HasRolesAndPermissions;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class User extends Authenticatable implements MustVerifyEmail
{
     use HasRolesAndPermissions;
     use HasFactory, Notifiable;
     use SoftDeletes;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $fillable = [
          'person_id', 'username', 'email', 'password', 'pin', 'multi_connect'
     ];

     /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
     protected $hidden = [
          'password', 'remember_token',
     ];

     /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
     protected $casts = [
          'email_verified_at' => 'datetime',
     ];

     public function person() : BelongsTo
     {
          return $this->belongsTo(Person::class);
     }

     public function getNameAttribute() : string
     {
          return "{$this->person->firstname} {$this->person->lastname}";
     }

     public function scopeAccess($query)
     {
          return (auth()->user()->id !== 1) ? $query->where('id', '!==', 1) : $query;
     }
}
