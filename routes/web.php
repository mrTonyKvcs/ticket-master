<?php

use App\Http\Controllers\FileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/events', function () {
    return Inertia::render('Event/Index');
})->middleware(['auth', 'verified'])->name('event.index');

Route::get('/tickets', function () {
    return Inertia::render('Ticket/Index');
})->middleware(['auth', 'verified'])->name('ticket.index');

Route::get('logout', function () {
    auth()->logout();
    return redirect('/');
});

Route::get('file-upload', [FileController::class, 'index'])->name('file.upload');
Route::post('file-upload', [FileController::class, 'store'])->name('file.upload.store');

require __DIR__.'/auth.php';
