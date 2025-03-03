function updateData() {
    fetch("http://172.20.10.4:8000/api/donnees-capteur")
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                let dernierCapteur = data[data.length - 1]; // Dernière valeur reçue

                // Mise à jour de la température
                document.getElementById("temperature").innerText = `${dernierCapteur.temperature}°C`;

                // Mise à jour de l'humidité
                document.getElementById("humidite").innerText = `${dernierCapteur.humidite}%`;
            }
        })
        .catch(error => console.error("Erreur API:", error));
}

// Charger les données au démarrage
updateData();

// Rafraîchir toutes les 5 minutes
setInterval(updateData, 300000);
