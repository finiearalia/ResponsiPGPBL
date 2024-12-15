import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const Peta = () => {
  const webViewRef = useRef(null);

  const leafletHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Leaflet Map</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
       <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin="">
     </script>
        <style>
          #map {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          html, body {
            height: 100%;
            margin: 0;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          // Inisialisasi peta
          const map = L.map("map").setView([-7.918922, 110.3195882], 10);

          // Tambahkan TileLayer (background peta)
         L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

          // Tambahkan marker secara manual
          const manualMarkers = [
            { latitude: -8.009022080855766, longitude: 110.30224215330017, name: "Museum Gumuk Pasir", imageurl : "https://framerusercontent.com/images/oCnPfY8UU4CQ4GfSV3ntRHnrU.jpg"},
            { latitude: -7.9244744, longitude: 110.3714677, name: "Museum Tani Jawa", imageurl : "https://framerusercontent.com/images/pK66qKJKBO6nqVxVWOSkEclKKQ.jpg?scale-down-to=1024" },
            { latitude: -7.918922, longitude: 110.3195882, name: "Museum Bantul Masa Belanda", imageurl : "https://museum.co.id/wp-content/uploads/2020/09/download-2021-08-28T011737.918.jpeg" },
            { latitude: -7.8059437, longitude: 110.3410734, name: "Museum Sejarah UPY", imageurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Museum_UPY_01.jpg/300px-Museum_UPY_01.jpg" },
            { latitude: -7.8145939, longitude: 110.4130604, name: "Museum Wayang Kekayon", imageurl : "https://gudeg.net/cni-content/uploads/modules/direktori/logo/20170124033107.jpeg" },
            { latitude: -7.8701836, longitude: 110.3548131, name: "Museum Tembi", imageurl : "https://budaya.jogjaprov.go.id/view_image/view/4028/WhatsApp%20Image%202022-02-03%20at%2008.07.02.jpeg" },
            { latitude: -7.9090635, longitude: 110.341792, name: "Museum Rumah Garuda", imageurl : "https://jogjakartanews.com/wp-content/uploads/2022/06/20180210182213_museum-rumah-garuda-tempat-menemukan-mutiara-sejarah-yang-tenggelam.jpg" },
            { latitude: -7.8439029, longitude: 110.362261, name: "History of Java Museum", imageurl : "https://visitingjogja.jogjaprov.go.id/wp-content/uploads/2021/02/139648182_742681563018009_2756360799476941998_n.jpg"},
            { latitude: -7.8685176, longitude: 110.4052077, name: "Museum Sejarah Purbakala Pleret", imageurl : "https://budaya.jogjaprov.go.id/view_image/view/3804/f7cbdfe7-a2aa-4af4-9222-fb62e7ded982.jpg"},
            { latitude: -7.9247418, longitude: 110.3082318, name: "Museum Wayang Beber Sekartaji", imageurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCz09dfZJtF_GwA77x7mr4P8byATlNnw1vXA&s" },
          ];

          manualMarkers.forEach(marker => {
          const customIcon = L.icon({
            iconUrl: marker.iconUrl || 'https://i.ibb.co.com/LSXvKL6/markersimbafix.png', // Default icon URL jika iconUrl tidak ada
            iconSize: [60, 60], 
            iconAnchor: [16, 32], 
            popupAnchor: [0, -32], 
          });

     const popupContent = 
    '<div style="text-align:center;">' +
      '<h3>' + (marker.name || "No name provided") + '</h3>' +
      '<img ' +
        'src="' + (marker.imageurl) + '" ' +
        'alt="' + (marker.name || 'No Image') + '" ' +
        'style="width:100px; height:80px; margin-top:5px;" ' +
      '/>' +
    '</div>';

  // Tambahkan marker ke peta
  L.marker([marker.latitude, marker.longitude], { icon: customIcon })
    .addTo(map)
    .bindPopup(popupContent); // Tampilkan nama dan gambar di popup
});

        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: leafletHTML }} 
        ref={webViewRef}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Peta;
