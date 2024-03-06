<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\SubcriptionPlan;
use Session;

use function PHPUnit\Framework\throwException;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *  
     * @param  \Illuminate\Http\Request  $request
     * @return mixed[]
     */

    private function activePlan() {
      $activePlan = Auth::user() ? Auth::user()->LastActiveUserSubcription : null;

      if(!$activePlan){
        return null;
      }else{
      }

      // dd($activePlan);
      $lastDay = Carbon::parse($activePlan->update_at)->addMonths($activePlan->subcriptionPlan->active_period_in_month);
      $activeDays = Carbon::parse($activePlan->update_at)->diffInDays($lastDay);
      $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());

      return [
        'name' => $activePlan->subcriptionPlan->name,
        'remainingActiveDays' => $remainingActiveDays, 
        'activeDays' => $activeDays,
      ];
      
    }
    
    
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],
            'flashMessage' => [
                'message' => session::get('message'),
                'type' => session::get('type')
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }

    
}
