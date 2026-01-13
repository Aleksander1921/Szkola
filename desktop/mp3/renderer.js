document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    console.log("EVNET ON FILE CHANE");
    if (file && file.type === 'audio/mpeg') {
        const audioPlayer = document.getElementById('audioPlayer');
        const audioSource = document.getElementById('audioSource');

        // Utwórz URL z pliku
        const objectURL = URL.createObjectURL(file);
        console.log("Odtwarzanie pliku:", objectURL); // Debugowanie

        // Ustaw URL jako źródło dla playera
        audioSource.src = objectURL;

        // Załaduj plik i odtwórz go
        audioPlayer.load();
        audioPlayer.play();

        // Sprawdzenie, czy odtwarzanie się rozpoczęło
        audioPlayer.onplay = () => {
            console.log("Odtwarzanie rozpoczęte");
        };

        // Obsługa błędów
        audioPlayer.onerror = () => {
            console.error("Błąd odtwarzania pliku");
        };
    } else {
        alert("Proszę wybrać plik MP3.");
    }
});
