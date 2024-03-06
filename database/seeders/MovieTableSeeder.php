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
            'thumbnail' => 'https://kepahiang.progres.id/wp-content/uploads/2023/09/oppenheimer.jpg',
            'rating' => 4.5,
            'is_featured' => 1,
          ],
          [
            'name' => 'The Godfather',
            'slug' => 'the-godfather',
            'category' => 'action',
            'video_url' => 'https://www.youtube.com/watch?v=noojV5y4L5I',
            'thumbnail' => 'https://kepahiang.progres.id/wp-content/uploads/2023/09/oppenheimer.jpg',
            'rating' => 5.0,
            'is_featured' => 1,
          ],
          [
            'name' => 'The Godfather: Part II',
            'slug' => 'the-godfather-part-ii',
            'category' => 'action',
            'video_url' => 'https://www.youtube.com/watch?v=noojV5y4L5I',
            'thumbnail' => 'https://kepahiang.progres.id/wp-content/uploads/2023/09/oppenheimer.jpg',
            'rating' => 4.9,
            'is_featured' => 0,
          ],
          [
            'name' => 'naruto: Part III',
            'slug' => 'naruto-part-III',
            'category' => 'action',
            'video_url' => 'https://www.youtube.com/watch?v=noojV5y4L5I',
            'thumbnail' => 'https://kepahiang.progres.id/wp-content/uploads/2023/09/oppenheimer.jpg',
            'rating' => 4.9,
            'is_featured' => 0,
          ],
          [
            'name' => 'naruto: Part IV',
            'slug' => 'naruto-part-iv',
            'category' => 'action',
            'video_url' => 'https://www.youtube.com/watch?v=noojV5y4L5I',
            'thumbnail' => 'https://kepahiang.progres.id/wp-content/uploads/2023/09/oppenheimer.jpg',
            'rating' => 4.9,
            'is_featured' => 0,
          ],
          [
            'name' => 'naruto: Part V',
            'slug' => 'naruto-part-v',
            'category' => 'action',
            'video_url' => 'https://www.youtube.com/watch?v=noojV5y4L5I',
            'thumbnail' => 'https://kepahiang.progres.id/wp-content/uploads/2023/09/oppenheimer.jpg',
            'rating' => 4.9,
            'is_featured' => 0,
          ]
        ];

      Movie::insert($Movie);
      
    }
}
