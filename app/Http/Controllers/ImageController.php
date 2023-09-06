<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
     public function show($path) : Response
     {
          return response(Storage::get($path))->header('Content-Type', $this->getMimeTypes($path));
     }

     public function getMimeTypes($data) : string
     {
          try {
               return 'image/'. explode('.', $data)[1];
          } catch (\Exception $e){
               info('ImageController', ['error' => $e]);
          }
     }
}
