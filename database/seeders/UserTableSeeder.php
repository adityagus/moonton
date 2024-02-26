<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
          'name' => 'Admin',
          'email' =>  'admin@moonton.test',
          'password' =>  bcrypt('Aditya123'),
        ]);

        $user = User::create([
          'name' => 'aditya',
          'email' =>  'aditya@gmail.com',
          'password' =>  bcrypt('aditya123'),
        ]);
        
        $admin->assignRole('admin');
        $user->assignRole('user');
    }
}
