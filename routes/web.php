<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\SubcriptionPlanController;

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

Route::redirect('/', '/login');


Route::middleware('auth', 'role:user')->prefix('dashboard')->name('user.dashboard.')->group(function(){
  Route::get('/', [DashboardController::class, 'index'])->name('index');
  Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('CheckUserSubcription:true');
  Route::get('/subcription-plan', [SubcriptionPlanController::class, 'index'])->name('subcriptionPlan.index')->middleware('CheckUserSubcription:false');
  Route::post('subcription-plan/{subcriptionPlan}/user-subcribe', [SubcriptionPlanController::class, 'userSubcribe'])->name('subcriptionPlan.userSubcribe')->middleware('CheckUserSubcription:false');
});

Route::prefix('prototype')->name("prototype.")->group(function () {
    Route::get('/login', function (){
        return Inertia::render('Prototype/Login');
    })->name('login');
    Route::get('/register', function (){
        return Inertia::render('Prototype/Register');
    })->name('register');
    Route::get('/dashboard', function (){
        return Inertia::render('User/Dashboard/Index');
    })->name('dashboard');
    Route::get('/subcriptionPlan', function (){
        return Inertia::render('Prototype/SubcriptionPlan');
    })->name('subcriptionPlan');
  //   Route::get('/movie/{slug}', function (){
  //     return Inertia::render('Prototype/Movie/Show');
  // })->name('movie.show');
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
