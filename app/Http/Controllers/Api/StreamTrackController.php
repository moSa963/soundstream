<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Track;
use App\Models\TrackHistory;
use App\Services\StreamService;
use Illuminate\Http\Request;

class StreamTrackController extends Controller
{
    public function show(Request $request, Track $track)
    {
        TrackHistory::add($request->user(), $track);
        
        return StreamService::download("tracks/{$track->location}", $request->header("Range", null), $track->title);
    }
}
