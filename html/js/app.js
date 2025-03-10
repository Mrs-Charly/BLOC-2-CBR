function updateData() {
    fetch("http://127.0.0.1:8000/api/donnees-capteur")
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

//--------------------------------------graphique---------------------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
    // URL de l'API Laravel
    const apiUrl = "http://tonserveur/api/temperature";

    // Fonction pour récupérer les données
    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Extraction des valeurs
            const timestamps = data.timestamps;
            const temperature = data.temperature;
            const humidite = data.humidite;

            // Mise à jour du graphique
            updateChart(timestamps, temperature, humidite);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    }

    // Fonction pour mettre à jour le graphique
    function updateChart(labels, tempData, humData) {
        new Chart(document.getElementById("myChart"), {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Température (°C)",
                        data: tempData,
                        borderColor: "red",
                        fill: false
                    },
                    {
                        label: "Humidité (%)",
                        data: humData,
                        borderColor: "blue",
                        fill: false
                    }
                ]
            },
            options: {
                legend: { display: true }
            }
        });
    }

    // Charger les données dès le chargement de la page
    fetchData();

    // Mettre à jour toutes les 10 secondes
    setInterval(fetchData, 10000);
});
