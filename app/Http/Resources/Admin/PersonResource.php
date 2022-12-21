<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class PersonResource extends JsonResource
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
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'fullname' => $this->name,
            'code' => $this->code,
            'dob' => $this->dob,
            'sex' => $this->sex,
            'gov_id' => [
                'type' => $this->identification_type,
                'number' => $this->identification,
            ],
            'address' => $this->address,
            'phone' => $this->phone,
            'avatar' => $this->avatar,
        ];
    }
}
