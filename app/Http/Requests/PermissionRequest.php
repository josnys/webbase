<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PermissionRequest extends FormRequest
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
               'id' => ['sometimes'],
               'name' => ['exclude_unless:id,null', 'required', 'max:30', 'alpha_dash', 'unique:permissions'],
               'display' => ['required', 'max:30', 'string'],
               'description' => ['sometimes', 'max:255'],
          ];
     }

     public function messages()
     {
          return [
               'name.required' => 'Name is required.',
               'name.max' => 'Name should be less than 30 characters.',
               'name.alpha_dash' => 'Name should only contains Alphabetical charaters, dash and underscore.',
               'name.unique' => 'Name already exists',
               'display.required' => 'Display Name is required.',
               'display.max' => 'Display Name should be less than 30 characters.',
               'display.string' => 'Display Name should be a string of characters.',
               'description.max' => 'Description should be less than 255 characters.',
          ];
     }
}
