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
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
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
          try {
               return Inertia::render('Dashboard/User/Profile', [
                    'data' => [
                         'id' => Auth::user()->id,
                         'name' => Auth::user()->name,
                         'username' => Auth::user()->username,
                         'email' => Auth::user()->email,
                         'avatar' => Auth::user()->avatar
                    ]
               ]);
          } catch (\Exception $e) {
               Log::error('Home profile', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function postProfile(ProfileRequest $request, User $user)
     {
          try {
               $mediaName = null;
               if($request->hasFile('photo')){
                    $mediaPath = $request->file('photo')->store('users/');
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
          } catch (\Exception $e) {
               Log::error('Home post profile', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }

     public function postProfilePassword(PasswordRequest $request, User $user)
     {
          try {
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
          } catch (\Exception $e) {
               Log::error('Home post profile password', ['data' => $e]);
               return redirect()->back()->with('error', User::serverError());
          }
     }
}
