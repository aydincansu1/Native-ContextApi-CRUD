import React from 'react';
import UserDetails from '../screens/UserDetails';
import {createStackNavigator} from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import TaskScreen from '../screens/TaskScreen';

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="UserDetail" component={UserDetails} />
      <Stack.Screen name="Tasks" component={TaskScreen} />
    </Stack.Navigator>
  );
}
