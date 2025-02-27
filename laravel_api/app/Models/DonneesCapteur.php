<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DonneesCapteur extends Model
{
    use HasFactory;

    protected $table = 'donnees_capteur';
    protected $fillable = ['temperature', 'humidite'];
}

