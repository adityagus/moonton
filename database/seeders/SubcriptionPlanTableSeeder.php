<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubcriptionPlan;

class SubcriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $subcriptionPlan = [
          [
            'name' => 'Basic',
            'price' => 200000,
            'active_period_in_month' => 3,
            'features' => json_encode(['feature1', 'feature2']),
          ],
          [
            'name' => 'Premium',
            'price' => 800000,
            'active_period_in_month' => 12,
            'features' => json_encode(['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6']),
          ],
        ];

        SubcriptionPlan::insert($subcriptionPlan);
      }
}
