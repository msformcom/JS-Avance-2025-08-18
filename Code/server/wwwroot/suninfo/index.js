document.addEventListener("DOMContentLoaded", () => {
    // Document chargé
    const button_get_position = document.querySelector("#button_get_position");
    const input_lat = document.querySelector("#input_lat");
    const input_lon = document.querySelector("#input_lon");
    const placeholder_error = document.querySelector("#placeholder_error");

    let viewModel = {

    }

    function majUI() {
        input_lat.value = viewModel.cuurentLat;
        input_lon.value = viewModel.currentLon;
        placeholder_error.innerHTML = viewModel.errorMessage ?? "";
    }

    // click sur le bouton
    button_get_position.addEventListener("click", async () => {


        try {
            let coords = await getMyPositionAsync();
            viewModel.cuurentLat = coords.latitude;
            viewModel.currentLon = coords.longitude;
            majUI();
        } catch (error) {
            viewModel.errorMessage = error.message;
            majUI();
        }




        // opération asynchrone => prend du temps
        // design pattern callback => fonctions exécutées lorsque l'opération est terminée
        // navigator.geolocation.getCurrentPosition(
        //     // callback success
        //     (infos) => {
        //         viewModel.cuurentLat = infos.coords.latitude;
        //         viewModel.currentLon = infos.coords.longitude;
        //         majUI();
        //     },
        //     // callback error
        //     (error) => {
        //         viewModel.errorMessage = error.message;
        //         majUI();
        //     }
        // )
    });
});