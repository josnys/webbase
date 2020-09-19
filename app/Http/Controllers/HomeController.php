<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\ProfileRequest;
use App\Http\Requests\PasswordRequest;
use App\Models\User;
use Inertia\Inertia;

class HomeController extends Controller
{
     /**
     * Create a new controller instance.
     *
     * @return void
     */
     public function __construct()
     {
          $this->middleware('auth');
     }

     /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
     public function index()
     {
          return Inertia::render('Dashboard/Home');
     }

     public function Profile()
     {
          return Inertia::render('Dashboard/User/Profile', [
               'data' => [
                    'id' => Auth::user()->id,
                    'name' => Auth::user()->name,
                    'username' => Auth::user()->username,
                    'email' => Auth::user()->email
               ]
          ]);
     }

     public function postProfile(ProfileRequest $request, User $user)
     {
          $mediaName = null;
          if($request->hasFile('photo')){
               $mediaPath = $request->file('photo')->store('users');
               $index = count(explode('/', $mediaPath)) - 1;
               $mediaName = explode('/', $mediaPath)[$index];
          }
          $user->name = $request->get('name');
          $user->username = $request->get('username');
          $user->email = $request->get('email');
          $user->profile_url = $mediaName;
          $user->update();
          return response()->json([
               'name' => $user->name,
               'username' => $user->username,
               'email' => $user->email
          ], 200);
     }

     public function postProfilePassword(PasswordRequest $request, User $user)
     {
          if(Hash::check($request->get('password'), $user->password)){
               return response()->json([
                    'errors' => [
                         'current_password' => [
                              'Current Password is not valid.'
                         ]
                    ]
               ], 422);
          }
          $user->password = Hash::make($request->get('password'));
          $user->update();
          Auth::logout();
          return response()->json([
               'success' => [
                    'Password changed successfully.'
               ]
          ], 200);
     }
}
