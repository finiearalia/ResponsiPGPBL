import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, View, TextInput, Button, StyleSheet, FlatList, ScrollView, TouchableOpacity} from 'react-native';

const Createdata = () => {
  const jsonUrl = 'http://192.168.164.147:3000/rate';
  const [name, setName] = useState('');
  const [museum_name, setMuseumName] = useState('');
  const [rating, setRating] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };

  const submit = () => {
    const newData = {
      name: name,
      museum_name: museum_name,
      rating: rating,
    };
    fetch(jsonUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert('Terima kasih atas ulasannya!');
        setName('');
        setMuseumName('');
        setRating('');
        fetchData();
      })
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Rate Your Destination</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nama Pengunjung"
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nama Museum"
            value={museum_name}
            onChangeText={(value) => setMuseumName(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Rating/Ulasan"
            value={rating}
            onChangeText={(value) => setRating(value)}
          />
          <TouchableOpacity style={styles.customButton} onPress={submit}>
    <Text style={styles.customButtonText}>Simpan</Text>
  </TouchableOpacity>
          {/* <Button title="Simpan" onPress={submit} /> */}
        </View>
      </View>
      <FlatList
        style={styles.card}
        contentContainerStyle={{ paddingBottom: 20}}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Text style={styles.cardText}>Nama: {item.name}</Text>
            <Text style={styles.cardText}>Museum: {item.museum_name}</Text>
            <Text style={styles.cardText}>Rating: {item.rating}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Createdata;

const styles = StyleSheet.create({
  title: {
    paddingVertical: 12,
    backgroundColor: '#523818',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    padding: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#f2e0c9',
    backgroundColor: '#debd92',
    borderRadius: 8,
    padding: 8,
    width: '100%',
    marginVertical: 5,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#523818',
  },
  cardContainer: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#debd92',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
    fontColor: 'white',
  },
  list: {
    marginTop: 10, 
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  customButton: {
    backgroundColor: '#523818',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  customButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
