<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
     public function index(Request $request) : Response
     {
          Inertia::setRootView('user');
          return Inertia::render('User/Home');
     }

     public function adminIndex() : RedirectResponse
     {
          return redirect()->route('admin.dashboard');
     }
}
