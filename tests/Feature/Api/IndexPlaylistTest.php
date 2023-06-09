<?php

namespace Tests\Feature\Api;

use App\Models\LikedPlaylist;
use App\Models\Playlist;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class IndexPlaylistTest extends TestCase
{
    use RefreshDatabase;


    public function test_user_can_get_a_list_of_his_playlists(): void
    {
        $user = User::factory()->create();
        
        Playlist::factory(5)->create([ "user_id" => $user->id ]);
        Playlist::factory(5)->create();

        Sanctum::actingAs($user);

        $response = $this->get('api/playlists');

        $response->assertSuccessful();

        $response->assertJsonCount(5, "data");
    }

    public function test_user_can_get_a_list_of_his_playlists_with_liked_playlists(): void
    {
        $user = User::factory()->create();
        
        Playlist::factory(5)->create([ "user_id" => $user->id ]);
        Playlist::factory()->create();
        LikedPlaylist::factory(5)->create([ "user_id" => $user->id ]);
        
        Sanctum::actingAs($user);

        $response = $this->get('api/playlists');

        $response->assertSuccessful();

        $response->assertJsonCount(10, "data");
    }
}
