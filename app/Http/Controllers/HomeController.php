<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
     public function index(Request $request)
     {
          Inertia::setRootView('user');
          return Inertia::render('User/Home');
     }

     public function adminIndex()
     {
          return redirect()->route('admin.dashboard');
     }
}
