<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
     public function show($path)
     {
          return response(Storage::get($path))->header('Content-Type', $this->getMimeTypes($path));
     }

     public function getMimeTypes($data)
     {
          try {
               return 'image/'. explode('.', $data)[1];
          } catch (\Exception $e){
               info('ImageController', ['error' => $e]);
          }
     }
}
