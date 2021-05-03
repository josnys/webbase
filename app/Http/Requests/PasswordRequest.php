<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PasswordRequest extends FormRequest
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
               'password' => ['required', 'string', 'min:8', 'confirmed'],
          ];
     }

     public function messages()
     {
          return [
               'password.required' => 'Password is required.',
               'password.string' => 'Password is should be string.',
               'password.min' => 'Password is should be at least 8 characters.',
               'password.confirmed' => 'Confirm Password does not match password.',
          ];
     }
}
