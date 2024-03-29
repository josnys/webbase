<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\Admin\SecurityController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\PasswordController;
use App\Http\Controllers\Admin\UserRoleController;

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

Route::group(['prefix' =>'user', 'as' => 'user.', 'middleware' => ['auth', 'verified']], function () {
     // Profile
     Route::post('/profile/{user}/edit', [ProfileController::class, 'update'])->name('profile.save');
     Route::put('/profile/{user}/password', [ProfileController::class, 'update'])->name('password.update');
});

Route::group(['prefix' => 'admin/', 'as' => 'admin.', 'middleware' => ['auth', 'verified', 'permission:admin-access']], function(){
     Route::get('dashboard', [HomeController::class, 'index'])->name('dashboard');
     Route::get('to_user', [HomeController::class, 'toUser'])->name('to.user');
     // Security -- Roles & Permissions
     Route::get('/security', [SecurityController::class, 'index'])->name('security.index');
     // Permissions
     Route::get('/permission', [PermissionController::class, 'create'])->middleware('permission:create-permission')->name('permission.create');
     Route::post('/permission', [PermissionController::class, 'store'])->middleware('permission:create-permission')->name('permission.store');
     Route::get('/permission/{permission}/edit', [PermissionController::class, 'edit'])->middleware('permission:update-permission')->name('permission.edit');
     Route::put('/permission/{permission}/edit', [App\Http\Controllers\Admin\PermissionController::class, 'update'])->middleware('permission:update-permission')->name('permission.update');
     // Roles
     Route::get('/role', [RoleController::class, 'create'])->middleware('permission:create-role')->name('role.create');
     Route::post('/role', [RoleController::class, 'store'])->middleware('permission:create-role')->name('role.store');
     Route::get('/role/{role}/edit', [RoleController::class, 'edit'])->middleware('permission:update-role')->name('role.edit');
     Route::put('/role/{role}/edit', [RoleController::class, 'update'])->middleware('permission:update-role')->name('role.update');
     Route::get('/role/{role}/assign', [RoleController::class, 'getAssign'])->middleware('permission:assign-permission')->name('role.get.assign');
     Route::post('/role/{role}/assign', [RoleController::class, 'postAssign'])->middleware('permission:assign-permission')->name('role.post.assign');

     // Users
     Route::get('/user', [UserController::class, 'index'])->middleware('permission:read-user')->name('user.index');
     Route::get('/user/create', [UserController::class, 'create'])->middleware('permission:create-user')->name('user.create');
     Route::post('/user/create', [UserController::class, 'store'])->middleware('permission:create-user')->name('user.store');
     Route::get('/user/{user}/edit', [UserController::class, 'edit'])->middleware('permission:update-user')->name('user.edit');
     Route::put('/user/{user}/edit', [UserController::class, 'update'])->middleware('permission:update-user')->name('user.update');
     Route::get('/user/{user}/role', [UserRoleController::class, 'edit'])->middleware('permission:assign-role')->name('user.get.role');
     Route::post('/user/{user}/role', [UserRoleController::class, 'update'])->middleware('permission:assign-role')->name('user.post.role');
     Route::get('/user/{user}/resetPassword', [PasswordController::class, 'edit'])->middleware('permission:change-user-password')->name('user.get.resetpassword');
     Route::put('/user/{user}/resetPassword', [PasswordController::class, 'update'])->middleware('permission:change-user-password')->name('user.post.resetpassword');
});
