<?php

use Illuminate\Support\Facades\Route;
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

Auth::routes();
// Profile
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/profile', [App\Http\Controllers\HomeController::class, 'profile'])->name('profile');
Route::put('/profile/{user}', [App\Http\Controllers\HomeController::class, 'postProfile'])->name('profile.save');
Route::post('/profile/{user}/password', [App\Http\Controllers\HomeController::class, 'postProfilePassword'])->name('profile.password');

// Security -- Roles & Permissions
Route::get('/security', [App\Http\Controllers\Admin\SecurityController::class, 'index'])->name('security.index');
// Permissions
Route::get('/permission', [App\Http\Controllers\Admin\PermissionController::class, 'create'])->name('permission.create');
Route::post('/permission', [App\Http\Controllers\Admin\PermissionController::class, 'store'])->name('permission.store');
Route::get('/permission/{permission}/edit', [App\Http\Controllers\Admin\PermissionController::class, 'edit'])->name('permission.edit');
Route::post('/permission/{permission}/edit', [App\Http\Controllers\Admin\PermissionController::class, 'update'])->name('permission.update');
// Roles
Route::get('/role', [App\Http\Controllers\Admin\RoleController::class, 'create'])->name('role.create');
Route::post('/role', [App\Http\Controllers\Admin\RoleController::class, 'store'])->name('role.store');
Route::get('/role/{role}/edit', [App\Http\Controllers\Admin\RoleController::class, 'edit'])->name('role.edit');
Route::post('/role/{role}/edit', [App\Http\Controllers\Admin\RoleController::class, 'update'])->name('role.update');
Route::get('/role/{role}/assign', [App\Http\Controllers\Admin\RoleController::class, 'getAssign'])->name('role.get.assign');
Route::post('/role/{role}/assign', [App\Http\Controllers\Admin\RoleController::class, 'postAssign'])->name('role.post.assign');

// Users
Route::get('/user', [App\Http\Controllers\Admin\UserController::class, 'index'])->name('user.index');
Route::get('/user/{user}/edit', [App\Http\Controllers\Admin\UserController::class, 'edit'])->name('user.edit');
Route::post('/user/{user}/edit', [App\Http\Controllers\Admin\UserController::class, 'update'])->name('user.update');
Route::get('/user/{user}/role', [App\Http\Controllers\Admin\UserController::class, 'getRoles'])->name('user.get.role');
Route::post('/user/{user}/role', [App\Http\Controllers\Admin\UserController::class, 'postRole'])->name('user.post.role');
