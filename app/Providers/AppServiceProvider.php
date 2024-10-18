<?php

namespace App\Providers;

use Exception;
use App\Models\Setting;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    // public function boot(): void
    // {
    //     Paginator::useBootstrap();

    //     $setting = Setting::pluck('value', 'key')->toArray();

    //     View::composer('*', function($view) use ($setting){
    //         $view->with('settings', $setting);
    //     });
    // }

    public function boot(): void
    {
        // Set default values
        View::share('settings', null);

        try {
            // Check for table existence and set actual values
            if (Schema::hasTable('settings')) {
                View::share('settings', Setting::pluck('value', 'key')->toArray());
            }
        } catch (Exception $e) {
            // Log the exception if needed
        }

        Paginator::useBootstrap();
    }
}
