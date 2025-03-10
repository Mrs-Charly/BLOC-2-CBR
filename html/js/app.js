function updateData() {
    fetch("http://127.0.0.1:8000/api/donnees-capteur")
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                let dernierCapteur = data[data.length - 1]; // Dernière valeur reçue
                let temperature = dernierCapteur.temperature;
                let humidite = dernierCapteur.humidite;

                // Mise à jour des valeurs dans la page HTML
                document.getElementById("temperature").innerText = `${temperature}°C`;
                document.getElementById("humidite").innerText = `${humidite}%`;

                // Sélection de l'image météo
                let weatherIcon = document.getElementById("weather-icon");

                if (humidite > 50) {
                    weatherIcon.src = "../img/pluie.jpg";
                } else if (temperature >= 23) {
                    weatherIcon.src = "./img/soleil.jpg";
                } else {
                    weatherIcon.src = "./img/nuage.jpg";
                }
            }
        })
        .catch(error => console.error("Erreur API:", error));
}

// Charger les données au démarrage
document.addEventListener("DOMContentLoaded", updateData);

// Rafraîchir les données toutes les 5 minutes
setInterval(updateData, 3000);
