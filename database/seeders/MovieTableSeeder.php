<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Movie = [
          [
            'name' => 'The Shawshank Redemption',
            'slug' => 'the-shawshank-redemption',
            'category' => 'action',
            'video_url' => 'https://www.youtube.com/watch?v=pGglDBug08A',
            'thumbnail' => 'https://i.ytimg.com/vi/1ZfK2Fm2dlk/maxresdefault.jpg',
            'rating' => 8.9,
            'is_featured' => 1,
          ],
          [
            'name' => 'The Godfather',
            'slug' => 'the-godfather',
            'category' => 'action',
            'video_url' => 'https://www.youtube.com/watch?v=noojV5y4L5I',
            'thumbnail' => 'https://i.ytimg.com/vi/noojV5y4L5I/maxresdefault.jpg',
            'rating' => 8.9,
            'is_featured' => 1,
          ],
          [
            'name' => 'The Godfather: Part II',
            'slug' => 'the-godfather-part-ii',
            'category' => 'action',
            'video_url' => 'https://www.youtube.com/watch?v=noojV5y4L5I',
            'thumbnail' => 'https://i.ytimg.com/vi/noojV5y4L5I/maxresdefault.jpg',
            'rating' => 8.9,
            'is_featured' => 0,
          ],
        ];

      Movie::insert($Movie);
      
    }
}
