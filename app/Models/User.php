<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laratrust\Traits\LaratrustUserTrait;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable implements MustVerifyEmail
{
     use LaratrustUserTrait;
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

     public function person()
     {
          return $this->belongsTo(Person::class);
     }

     public function getNameAttribute()
     {
          return "{$this->person->firstname} {$this->person->lastname}";
     }

     public function scopeAccess($query)
     {
          return (auth()->user()->id !== 1) ? $query->where('id', '!==', 1) : $query;
     }
}
