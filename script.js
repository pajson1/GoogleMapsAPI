function initMap() {


    let options = {
        zoom: 12,
        center: { lat: 43.65126, lng: 17.96082 } // Konjic
    }

    let map = new google.maps.Map(document.getElementById('map'), options);


    // Listen for click on map

    google.maps.event.addListener(map, 'click', (event) => {
        addMarker({ coords: event.latLng })
    });

    // Add Marker Function
    let addMarker = (props) => {


        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon: props.iconImage

        });

        if (props.iconImage) marker.setIcon(props.iconImage);

        if (props.content) {

            let infoWindow = new google.maps.InfoWindow({

                content: props.content
            });

            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            })

        }

    }



    let markers = [

        {
            coords: { lat: 43.65126, lng: 17.96082 },
            iconImage: 'https://www.ebuy7.com/image/catalog/icon/about.png',
            content: '<h1>Konjic</h1>'
        },
        {
            coords: { lat: 43.8563, lng: 18.4131 },
            content: '<h1>Sarajevo</h1>'
        },
        {
            coords: { lat: 43.3438, lng: 17.8078 },
            content: '<h1>Mostar</h1>'
        }
    ];

    markers.forEach(marker => {
        addMarker(marker);
    });





}