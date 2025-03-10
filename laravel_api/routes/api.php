<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonneesCapteurController;

Route::post('/donnees-capteur', [DonneesCapteurController::class, 'store']);
Route::get('/donnees-capteur', [DonneesCapteurController::class, 'index']);
Route::get('/chart-data', [DonneesCapteurController::class, 'getChartData']);
