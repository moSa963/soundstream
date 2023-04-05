<?php

use App\Http\Controllers\Api\LikedTrackController;
use App\Http\Controllers\Api\PlaylistController;
use App\Http\Controllers\Api\PlaylistPhotoController;
use App\Http\Controllers\Api\PlaylistTrackController;
use App\Http\Controllers\Api\StreamTrackController;
use App\Http\Controllers\Api\TrackController;
use App\Http\Controllers\Api\TrackPhotoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(TrackController::class)
    ->middleware("auth:sanctum")
    ->group(function(){
        Route::get("tracks", "index");
        Route::get("tracks/{track}", "show");
        Route::post("tracks", "store");
        Route::delete("tracks/{track}", "destroy");
    });

Route::controller(PlaylistController::class)
    ->middleware("auth:sanctum")
    ->group(function(){
        Route::get("playlists", "index");
        Route::post("playlists", "store");
        Route::delete("playlists/{playlist}", "destroy");
    });

Route::controller(PlaylistTrackController::class)
    ->middleware("auth:sanctum")
    ->group(function(){
        Route::post("playlists/{playlist}/tracks/{track}", "store");
        Route::delete("playlists/{playlist}/tracks/{track}", "destroy");
    });

Route::controller(LikedTrackController::class)
    ->middleware("auth:sanctum")
    ->group(function(){
        Route::get("likes", "index");
        Route::post("likes/tracks/{track}", "store");
        Route::delete("likes/tracks/{track}", "destroy");
    });

Route::controller(StreamTrackController::class)
    ->group(function(){
        Route::get("tracks/{track}/stream", "show");
    });

Route::controller(TrackPhotoController::class)
    ->group(function(){
        Route::get("tracks/{track}/photo", "index");
        Route::post("tracks/{track}/photo", "update");
        Route::delete("tracks/{track}/photo", "destroy");
    });

Route::controller(PlaylistPhotoController::class)
    ->group(function(){
        Route::get("playlists/{playlist}/photo", "index");
        Route::post("playlists/{playlist}/photo", "update");
        Route::delete("playlists/{playlist}/photo", "destroy");
    });