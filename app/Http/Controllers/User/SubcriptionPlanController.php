<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\SubcriptionPlan;
use App\Http\Controllers\Controller;
use App\Models\UserSubcription;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class SubcriptionPlanController extends Controller
{
    public function index(){
      $subcriptionPlans = SubcriptionPlan::all();
      return Inertia::render('User/Dashboard/SubcriptionPlan/index', [
        'subcriptionPlans' => $subcriptionPlans
      ]);
    }

    public function userSubcribe(Request $request, SubcriptionPlan $subcriptionPlan){
      // 'user_id',
      // 'subcription_plan_id',
      // 'price',
      // 'expired_date',
      // 'payment_status',
      // 'snapToken',
      $data = [
        'user_id' => Auth::id() ,
        'subcription_plan_id' => $subcriptionPlan->id,
        'price' => $subcriptionPlan->price,
        'expired_date' => Carbon::now()->addMonths($subcriptionPlan->active_period_in_month),
        'payment_status' => 'Paid',
        'snapToken' => $subcriptionPlan->snapToken,
      ];
      
      $userSubcription = UserSubcription::create($data);
      return redirect(route('user.dashboard.index'));
    }
    
    
}
