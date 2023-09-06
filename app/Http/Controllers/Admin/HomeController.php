<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Inertia\Response;

class HomeController extends Controller
{
     public function index(Request $request) : Response
     {
          Inertia::setRootView('admin');
          return Inertia::render('Admin/Home');
     }

     public function toUser(Request $request) : RedirectResponse
     {
          return redirect()->route('user.home');
     }
}
