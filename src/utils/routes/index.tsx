import React from 'react';
import { useSelector } from 'react-redux';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@scenes/Home';
import SignInScreen from '@scenes/SignIn';

const HomeStack = createNativeStackNavigator();
const SignStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    {/* <HomeStack.Screen name="SaleDetail" component={SaleDetailScreen} /> */}
  </HomeStack.Navigator>
);

const AuthStackScreen = () => (
  <SignStack.Navigator screenOptions={{ headerShown: false }}>
    <SignStack.Screen name="SignIn" component={SignInScreen} />
  </SignStack.Navigator>
);

const Routes = (): JSX.Element => {
  const { user } = useSelector((store: { user: UserState }) => store.user);

  return user ? <HomeStackScreen /> : <AuthStackScreen />;
};

export default Routes;
