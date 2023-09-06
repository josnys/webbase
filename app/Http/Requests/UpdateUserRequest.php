<?php

namespace App\Http\Requests;

use App\DTO\UserData;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
               ]
          );
     }
}
