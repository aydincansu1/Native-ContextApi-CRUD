import {View, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';

export default function Loader() {
  const {loading, error} = useContext(UserContext);
  return (
    <View style={{flex: 1}}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  );
}
