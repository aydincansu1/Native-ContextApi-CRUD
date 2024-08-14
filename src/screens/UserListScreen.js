import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';
import Loader from '../components/Loader';
import {useNavigation} from '@react-navigation/native';

export default function UserListScreen() {
  const {users, loading, error} = useContext(UserContext);
  const navigation = useNavigation();
  return (
    <View style={styles.loading}>
      {loading ? (
        <View>
          <Loader />
        </View>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={users}
          key={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UserDetail', {userId: item.id})
              }>
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  email: {
    fontSize: 14,
    opacity: 0.5,
    marginTop: 4,
  },
});
