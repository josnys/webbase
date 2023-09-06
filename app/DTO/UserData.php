<?php 

declare(strict_types=1);

namespace App\DTO;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;

final class UserData {
     public function __construct(
          private readonly string $fname,
          private readonly string $lname,
          private readonly string $dob,
          private readonly string $sex,
          private readonly string $identification,
          private readonly string $identificationType,
          private readonly string $phone,
          private readonly string $address,
          private readonly string | null $username,
          private readonly string | null $email,
          private readonly UploadedFile | null $photo,
          private readonly string | null $password,
          private readonly string | null $pin,
     ){}

     public function toArray() : array
     {
          return [
               'fname' => $this->fname,
               'lname' => $this->lname,
               'dob' => $this->dob,
               'sex' => $this->sex,
               'identification' => $this->identification,
               'identificationType' => $this->identificationType,
               'phone' => $this->phone,
               'address' => $this->address,
               'username' => $this->username,
               'email' => $this->email,
               'photo' => $this->photo,
               'password' => $this->password,
               'pin' => $this->pin,
          ];
     }

     public static function fromRequest(array $data) : UserData
     {
          return new UserData(
               fname: $data['fname'],
               lname: $data['lname'],
               dob: $data['dob'],
               sex: $data['sex'],
               identification: $data['identification'],
               identificationType: $data['identificationType'],
               phone: $data['phone'],
               address: $data['address'],
               username: $data['username'] ?? null,
               email: $data['email'] ?? null,
               photo: $data['photo'] ?? null,
               password: $data['password'] ?? null,
               pin: $data['pin'] ?? null,
          );
     }
}