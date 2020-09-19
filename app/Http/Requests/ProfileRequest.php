<?php

namespace App\Http\Requests;

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
               'name' => ['required', 'string', 'max:255'],
               'current_username' => ['required'],
               'username' => ['required', 'exclude_if:current_username,'.auth()->user()->username, 'string', 'max:30', 'unique:users'],
               'current_email' => ['required'],
               'email' => ['required', 'exclude_if:current_email,'.auth()->user()->email, 'string', 'email', 'max:255', 'unique:users'],
               'photo' => ['sometimes', 'image', 'max:2048', 'mimes:jpeg,jpg,png']
          ];
     }

     public function messages()
     {
          return [
               'name.required' => 'Name is required.',
               'name.string' => 'Name should be string.',
               'name.string' => 'Name should be less than 255 characters.',
               'username.required' => 'Username is required.',
               'username.string' => 'Username should be string.',
               'username.max' => 'Username should be less than 30 characters.',
               'username.unique' => 'Username is already taken.',
               'email.required' => 'Email is required.',
               'email.string' => 'Email should be string.',
               'email.email' => 'Email should be a valid email address.',
               'email.max' => 'Email should be less than 255 characters.',
               'email.unique' => 'Email is already in use.',
               'photo.image' => 'The photo should be an image.',
               'photo.max' => 'The photo size should be less than or equal to 2MB.',
               'photo.mimes' => 'The image type is invalid.',
          ];
     }
}
