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
    }

    public function getChartData()
    {
        $data = DonneesCapteur::orderBy('created_at', 'desc')->take(120)->get();

        return response()->json([
            'labels' => $data->pluck('created_at')->map(fn($date) => $date->format('Y-m-d H:i')),
            'temperature' => $data->pluck('temperature'),
            'humidite' => $data->pluck('humidite')
        ]);
    }}

