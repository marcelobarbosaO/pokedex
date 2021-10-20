import React from 'react';
import { useSelector } from 'react-redux';

import FilterSideMenu from '@components/FilterSideMenu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@scenes/Home';
import PokemonDetailScreen from '@scenes/PokemonDetail';
import SignInScreen from '@scenes/SignIn';
import { ROUTE_NAMES } from '@utils/constants';

const Drawer = createDrawerNavigator();
const SignStack = createNativeStackNavigator();

const HomeStackScreen = (): JSX.Element => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerPosition: 'right',
      drawerType: 'front',
      drawerStyle: {
        width: '85%',
      },
    }}
    drawerContent={() => <FilterSideMenu />}
  >
    <Drawer.Screen name={ROUTE_NAMES.HOME} component={HomeScreen} />
    <Drawer.Screen name={ROUTE_NAMES.POKEMON_DETAIL} component={PokemonDetailScreen} />
  </Drawer.Navigator>
);

const AuthStackScreen = (): JSX.Element => (
  <SignStack.Navigator screenOptions={{ headerShown: false }}>
    <SignStack.Screen name={ROUTE_NAMES.SIGN_IN} component={SignInScreen} />
  </SignStack.Navigator>
);

const Routes = (): JSX.Element => {
  const { user } = useSelector((store: { user: UserState }) => store.user);

  return user ? <HomeStackScreen /> : <AuthStackScreen />;
};

export default Routes;
