<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DonneesCapteur;

class DonneesCapteurController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'temperature' => 'required|numeric',
            'humidite' => 'required|numeric',
        ]);

        $data = DonneesCapteur::create([
            'temperature' => $request->temperature,
            'humidite' => $request->humidite,
        ]);

        return response()->json(['message' => 'Données enregistrées avec succès !', 'data' => $data], 201);
    }

    public function index()
    {
        return response()->json(DonneesCapteur::all(), 200);
    }
}
