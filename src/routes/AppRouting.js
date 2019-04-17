import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';

// import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import Landing from '../pages/LandingPage';
import Profile from '../pages/ProfilePage';

const Route = createStackNavigator(
    {
    //    Login:Login,
       Register:Register,
       Profile:Profile,
    // Landing:Landing,
    },
    {
        initialRouteName:'Register'
    },
    
);

const RouterConfig = createAppContainer(Route);

export default RouterConfig;