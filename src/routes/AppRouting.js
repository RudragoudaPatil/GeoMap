import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from '../component/LoginComponent';
import Register from '../component/RegisterComponent';
import Profile from '../component/ProfileComponent';

const Route = createStackNavigator(
    {
      Login: {
        screen: Login
      },
      Register: {
        screen: Register
      },
      Profile:{
        screen:Profile
      },
      
    },
    {
      initialRouteName: "Login"
    },
  
  );
  const RouterConfig = createAppContainer(Route);
  
  export default RouterConfig;
  