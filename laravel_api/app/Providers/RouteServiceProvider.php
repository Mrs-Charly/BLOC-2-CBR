<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Définir le chemin par défaut après connexion.
     */
    public const HOME = '/home';

    /**
     * Bootstrap des services.
     */
    public function boot(): void
    {
        $this->configureRoutes();
    }

    protected function configureRoutes(): void
    {
        Route::middleware('api')
            ->prefix('api')
            ->group(base_path('routes/api.php'));

        Route::middleware('web')
            ->group(base_path('routes/web.php'));
    }
}
