import * as React from 'react';
import {Image,StyleSheet,View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../src/screens/login/LoginScreen';
import ChangePassword from '../src/screens/login/ChangePassword';
import AddCatalogueScreen from '../src/screens/login/AddCatalogue';
import ForgotPassword from '../src/screens/login/ForgotPassword';
import SignupScreen from '../src/screens/login/SignupScreen';
import Catelogue from '../src/screens/login/Catelogue';
// import SignupScreen from '../src/screens/login/SignupScreen';
import SplashScreen from '../src/screens/splash/SplashScreen';
import SupplierProfile from '../src/screens/login/SupplierProfile';
import AppSettingsScreen from '../src/screens/settings/AppSettingsScreen';
import Editcatelogue from '../src/screens/login/Editcatelogue';
// import ForgotPasswordScreen from '../src/screens/login/ForgotPasswordScreen';
import DrawerNavigationRoutes from './DrawerNavigatorRoutes';
import { COLORS } from '../src/constant/Colors';
import { FONTS } from '../src/constant/Font';
const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" >
         <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerShown: false}}
        // options={{
        //   title: 'Sign Up', 
        //   headerBackTitleVisible:false,
        // }}
      />
       <Stack.Screen
        name="AddCatalogueScreen"
        component={AddCatalogueScreen}
        options={{
          headerShown:false
          // title: 'Add Catalogue', 
          // headerBackTitleVisible:false,
        }}
      />
      {/* <Stack.Screen
        name="AddCatalogueScreen"
        component={AddCatalogueScreen}
        options={{
          title: 'Catalogue', 
          headerBackTitleVisible:false,
        }}
      /> */}
      <Stack.Screen
        name="Editcatelogue"
        component={Editcatelogue}
        options={{
          headerShown:false
        }}
      />
       <Stack.Screen
        name="SupplierProfile"
        component={SupplierProfile}
        options={{
          headerShown:false
          // title: '', 
          // headerBackTitleVisible:false,
        }}
      />
       <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: false
          // title: 'Sign Up', 
          // headerBackTitleVisible:false,
        }}
      />
       <Stack.Screen
        name="Catelogue"
        component={Catelogue}
        options={{
          title: 'Sign Up', 
          headerBackTitleVisible:false,
        }}
      />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="AppSettingsScreen"
          component={AppSettingsScreen}
          options={{headerBackTitleVisible:false, headerStyle:{backgroundColor: '#1F9CEF'},headerTintColor:'white',
          headerShadowVisible:false,
          headerTitleStyle: {color:'white'},
          //title:'Unibic Dubai International',
          headerTitle: () => (
            <View style={{width:300,flexDirection:'row'}}>
                <Image style={{ width: 35, height: 35,  marginRight:15}} source={require("../assets/images/logo/watermelon_logo.png")} />
                <Text style={{color:COLORS.white,fontSize:16,fontFamily:FONTS.SemiBold,paddingTop:7}}>Unibic Dubai International</Text>
            </View>
          ),
        }}
          
          />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default Routes;
