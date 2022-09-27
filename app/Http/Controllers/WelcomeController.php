<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
     public function index()
     {
          Inertia::setRootView('app');
          return Inertia::render('Welcome');
     }
}
