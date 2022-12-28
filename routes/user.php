<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\PasswordController;

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
     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile');
     Route::post('/profile/{user}/edit', [ProfileController::class, 'update'])->name('profile.save');
     Route::get('/password', [PasswordController::class, 'edit'])->name('password.edit');
     Route::put('/password/{user}/password', [PasswordController::class, 'update'])->name('password.update');
});
