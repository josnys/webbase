<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
     public function index(Request $request)
     {
          Inertia::setRootView('admin');
          return Inertia::render('Admin/Home');
     }
}
