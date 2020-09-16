<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
     /*
     |--------------------------------------------------------------------------
     | Login Controller
     |--------------------------------------------------------------------------
     |
     | This controller handles authenticating users for the application and
     | redirecting them to your home screen. The controller uses a trait
     | to conveniently provide its functionality to your applications.
     |
     */

     use AuthenticatesUsers;

     /**
     * Where to redirect users after login.
     *
     * @var string
     */
     protected $redirectTo = RouteServiceProvider::HOME;

     /**
     * Create a new controller instance.
     *
     * @return void
     */
     public function __construct()
     {
          $this->middleware('guest')->except('logout');
     }

     public function showLoginForm()
     {
          return Inertia::render('Auth/Login');
     }

     public function login(Request $request)
     {
          $this->validate($request, [
               'email'    => 'required',
               'password' => 'required',
          ]);

          //Store Email field Value
          $loginValue = $request->input('email');

          //Get Login Type
          $login_type = $this->getLoginType( $loginValue);

          //Change request type based on user input
          $request->merge([
               $login_type => $loginValue
          ]);

          //Check Credentials and redirect
          if (\Auth::attempt($request->only($login_type, 'password'))){
               return redirect()->route('home');
          }

          // return redirect()->back()->withErrors([ 'email' => "These credentials do not match our records." ]);
          return Inertia::render('Auth/Login', [
               'errors' => [
                    'email' => ['Verify e-mail is correct.'],
                    'password' => ['Verify password is correct']
               ]
          ]);
     }

     protected function loggedOut(Request $request) {
          $request->session()->flush();
          $request->session()->regenerate();
          return redirect('/');
     }

     public function getLoginType($loginValue) {
          return filter_var($loginValue, FILTER_VALIDATE_EMAIL ) ? 'email' : 'username';
     }
}
