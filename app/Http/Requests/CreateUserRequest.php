<?php

declare(strict_types = 1);

namespace App\Http\Requests;

use App\DTO\UserData;
use Illuminate\Foundation\Http\FormRequest;

final class CreateUserRequest extends FormRequest
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
               'address' => ['sometimes', 'string'],
               'username' => ['required', 'string', 'alpha_dash', 'max:30', 'unique:users'],
               'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
               'photo' => ['sometimes', 'exclude_if:selectedAvatar,null', 'image', 'max:2048', 'mimes:jpeg,jpg,png'],
               'password' => ['required', 'string', 'min:8', 'confirmed'],
               'pin' => ['nullable', 'digits:4']
          ];
     }

     public function payload() : UserData
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
                    'photo' => $this->file('photo') ?? null,
                    'password' => $this->string('password')->toString(),
                    'pin' => $this->string('pin')->toString()
               ]
          );
     }
}
