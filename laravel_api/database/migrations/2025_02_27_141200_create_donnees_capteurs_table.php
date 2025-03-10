<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('donnees_capteur', function (Blueprint $table) {
            $table->id();
            $table->float('temperature');
            $table->float('humidite');
            $table->timestamps();
        });
    }
};
