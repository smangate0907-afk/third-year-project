function getLocation() {

    if (!navigator.geolocation) {
        document.getElementById("result").innerHTML =
            "Geolocation is not supported by your browser.";
        return;
    }

    navigator.geolocation.getCurrentPosition(

        async function(position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            document.getElementById("result").innerHTML =
                "Finding your location...";

            try {

                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&accept-language=en&lat=${latitude}&lon=${longitude}`
                );

                const data = await response.json();

                const address = data.address;

                const city =
                    address.city ||
                    address.town ||
                    address.village ||
                    address.county ||
                    "Unknown";

                const state = address.state || "Unknown";
                const country = address.country || "Unknown";

                document.getElementById("result").innerHTML =
                    `<b> ${city}</b><br>${state}, ${country}`;

            } catch (error) {

                document.getElementById("result").innerHTML =
                    "Could not find your location.";

                console.log(error);
            }
        },

        function(error) {

            document.getElementById("result").innerHTML =
                "❌ Please allow location permission.";

            console.log(error);
        }
    );
}