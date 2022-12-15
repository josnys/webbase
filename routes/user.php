<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\User\ProfileController;

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

Route::get('/img/{path}', [ImageController::class, 'show'])->where('path', '.*')->name('show.image');

Route::group(['prefix' => 'user', 'as' => 'user.', 'middleware' => ['auth', 'verified']], function(){
     // To the admin page
     Route::get('/admin', [HomeController::class, 'adminIndex'])->name('admin');
     // Profile
     Route::get('/home', [HomeController::class, 'index'])->name('home');
     Route::get('/profile', [ProfileController::class, 'editProfile'])->name('profile');
     Route::post('/profile/{user}/edit', [ProfileController::class, 'updateProfile'])->name('profile.save');
     Route::get('/password', [ProfileController::class, 'editPassword'])->name('password');
     Route::post('/password/{user}/password', [ProfileController::class, 'updatePassword'])->name('password.save');
});
