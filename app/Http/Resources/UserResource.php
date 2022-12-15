<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'code' => $this->person ? $this->person->code : null,
            'fname' => $this->person ? $this->person->firstname : null,
            'lname' => $this->person ? $this->person->lastname : null,
            'name' => $this->person ? $this->name : null,
            'username' => $this->username,
            'email' => $this->email,
            'avatar' => $this->person ? $this->avatar : null,
        ];
    }
}
