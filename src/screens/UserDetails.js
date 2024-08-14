import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {UserContext} from '../context/UserContext';

export default function UserDetails() {
  const navigation = useNavigation();

  // useRoute ile userId'yi route'dan alıyoruz
  const route = useRoute();
  const {userId} = route.params;

  // UserContext'ten kullanıcı verisini alıyoruz
  const {users} = useContext(UserContext);

  // users dizisinde userId ile eşleşen kullanıcıyı buluyoruz
  const user = users.find(user => user.id === userId);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={[styles.title, styles.text]}>{user.name}</Text>
        <Text style={[styles.text, styles.info]}>{user.email}</Text>
        <Text style={[styles.text, styles.info]}>{user.phone}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tasks', {userId})}
            style={styles.taskBtn}>
            <Text style={styles.titleBtn}>View Tasks</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
  },
  card: {
    backgroundColor: '#86AB89',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
  },
  text: {
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  taskBtn: {
    backgroundColor: '#CBE2B5',
    padding: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  titleBtn: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
