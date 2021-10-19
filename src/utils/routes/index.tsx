import React from 'react';
import { useSelector } from 'react-redux';

import FilterSideMenu from '@components/FilterSideMenu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@scenes/Home';
import PokemonDetailScreen from '@scenes/PokemonDetail';
import SignInScreen from '@scenes/SignIn';

const Drawer = createDrawerNavigator();
const SignStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerPosition: 'right',
      drawerType: 'front',
      drawerStyle: {
        width: '85%',
      },
    }}
    drawerContent={() => <FilterSideMenu />}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    {/* <HomeStack.Screen name="SaleDetail" component={SaleDetailScreen} /> */}
  </Drawer.Navigator>
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
