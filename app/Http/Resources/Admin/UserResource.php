<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Admin\PersonResource;
use App\Http\Resources\Admin\RoleCollection;

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
            'person' => PersonResource::make($this->whenLoaded('person')),
            'username' => $this->username,
            'email' => $this->email,
            'roles' => RoleCollection::make($this->whenLoaded('roles')),
        ];
    }
}
