<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\WelcomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WelcomeController::class, 'index']);

Route::get('/img/{path}', [ImageController::class, 'show'])->where('path', '.*')->name('show.image');

Route::group(['middleware' => ['auth', 'verified']], function(){
     // To the admin page
     Route::get('admin/dashboard', [HomeController::class, 'index'])->name('dashboard');
     // Profile
     Route::get('/home', [HomeController::class, 'index'])->name('home');
     Route::get('/profile', [HomeController::class, 'profile'])->name('profile');
     Route::post('/profile/{user}/edit', [HomeController::class, 'postProfile'])->name('profile.save');
     Route::post('/profile/{user}/password', [HomeController::class, 'postProfilePassword'])->name('profile.password');
});
