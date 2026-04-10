import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  // Setup State
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff'); // Default background putih

  // --- LOGIC: MAIN QUEST ---
  
  // Fungsi Increment (Tambah)
  const increment = () => setCount(count + 1);
  
  // Fungsi Decrement (Kurang) + Validasi Tantangan (Tidak boleh < 0)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // --- LOGIC: SIDE QUEST ---

  // Fungsi Toggle Color (Ubah warna background secara acak)
  const changeColor = () => {
    // Generate warna hex acak
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setBgColor(randomColor);
  };

  // Fungsi Reset (Sesuai dengan template README)
  const resetAll = () => {
    setCount(0);
    setName('');
    setBgColor('#ffffff');
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      
      {/* 2. Greeting Form */}
      <View style={styles.section}>
        <Text style={styles.greetingText}>
          Halo, {name ? name : '[Nama]'}!
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ketik nama kamu di sini..."
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      {/* 1. Counter System */}
      <View style={styles.section}>
        <Text style={styles.counterText}>{count}</Text>
        <View style={styles.buttonRow}>
          <Button title="   -   " onPress={decrement} />
          <View style={styles.space} />
          <Button title="   +   " onPress={increment} />
        </View>
      </View>

      {/* Side Quest & Reset */}
      <View style={styles.section}>
        <Button title="Ganti Warna" onPress={changeColor} color="#ff8c00" />
        <View style={{ height: 10 }} />
        <Button title="Reset Semua" onPress={resetAll} color="#d9534f" />
      </View>

    </View>
  );
};

// Styling UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  section: {
    marginBottom: 40,
    alignItems: 'center',
    width: '100%',
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  counterText: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
    width: 20,
  }
});

export default App;