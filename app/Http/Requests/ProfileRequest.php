<?php

namespace App\Http\Requests;

use App\DTO\UserData;
use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
     /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
     public function authorize()
     {
          return true;
     }

     /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
     public function rules()
     {
          return [
               'fname' => ['required', 'string', 'max:255'],
               'lname' => ['required', 'string', 'max:255'],
               'dob' => ['sometimes', 'date'],
               'sex' => ['sometimes', 'string'],
               'identification' => ['required', 'alpha_dash'],
               'identificationType' => ['required', 'string'],
               'phone' => ['required'],
               'current_username' => ['required'],
               'username' => ['required', 'exclude_if:current_username,'.$this->username, 'string', 'max:30', 'unique:users'],
               'current_email' => ['required'],
               'email' => ['required', 'exclude_if:current_email,'.$this->email, 'string', 'email', 'max:255', 'unique:users'],
               'avatar' => ['sometimes', 'exclude_if:selectedAvatar,null', 'image', 'max:2048', 'mimes:jpeg,jpg,png'],
               'address' => ['sometimes', 'string', 'max:120'],
          ];
     }

     public function payload(): UserData
     {
          return UserData::fromRequest(
               data: [
                    'fname' => $this->string('fname')->toString(),
                    'lname' => $this->string('lname')->toString(),
                    'dob' => $this->string('dob')->toString(),
                    'sex' => $this->string('sex')->toString(),
                    'identification' => $this->string('identification')->toString(),
                    'identificationType' => $this->string('identificationType')->toString(),
                    'phone' => $this->string('phone')->toString(),
                    'address' => $this->string('address')->toString(),
                    'username' => $this->string('username')->toString(),
                    'email' => $this->string('email')->toString(),
                    'photo' => $this->file('avatar') ?? null,
                    'password' => $this->string('password')->toString(),
                    'pin' => $this->string('pin')->toString()
               ]
          );
     }
}
