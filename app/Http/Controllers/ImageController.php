<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
     public function show($path)
     {
          return Storage::get($path);
     }
}
