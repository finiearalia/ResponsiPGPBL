import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Homepage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.ibb.co.com/vhXy2NK/POSTER.png' }} 
          style={styles.banner}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Tentang Aplikasi</Text>
        <Text style={styles.text}>
          SIMBA App adalah aplikasi yang dirancang untuk membantu Anda menemukan informasi tentang museum di Kabupaten Bantul, baik berupa lokasi, rute perjalanan, dan ulasan dari pengunjung lainnya. Dengan fitur peta interaktif dan sistem ulasan, Anda dapat menjelajahi sejarah dan budaya dengan mudah.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Fitur Utama</Text>
        <Text style={styles.text}>
          - Daftar lengkap museum di Kabupaten Bantul dilengkapi dengan informasi dan rute navigasi.{"\n"}
          - Peta interaktif disertai dengan gambar museum.{"\n"}
          - Sistem ulasan untuk berbagi pengalaman Anda.{"\n"}
        </Text>
        </View>
        <View style={styles.card}>
        <Text style={styles.subtitle}>Manfaat</Text>
        <Text style={styles.text}>
          Dengan SIMBA App, Anda dapat:{"\n"}
          - Menemukan museum terdekat.{"\n"}
          - Membaca ulasan untuk memutuskan kunjungan.{"\n"}
          - Menjelajahi sejarah dan budaya dengan lebih mudah.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Museum Jadi Seru, Jelajah Bareng Kamu! {"\n"}
          Finie Aralia Shearani-22/496917/SV/21047 {"\n"}
          SIMBA EXPLORER © 2024
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#debd92',
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  content: {
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#523818',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#523818',
    lineHeight: 22,
    marginBottom: 15,
    textAlign: 'justify',
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  card: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 5,
        marginVertical: 7
      },
});

export default Homepage;
