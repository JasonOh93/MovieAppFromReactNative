// 이 문서는 오로지 Navigator만 하면 되므로..
// 함수형(stateless) 컴포넌트로 제작

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// StackNavigator가 사용할 스크린 컴포넌트 import
import Login from '../screens_login/Login';
import SignUp from '../screens_login/SignUp';
import ResetPassword from '../screens_login/ResetPassword';

const LoginStack = createStackNavigator();

export default LoginStactNav=()=>{
    return(
        <LoginStack.Navigator screenOptions={{headerShown:false}}>
            <LoginStack.Screen name="Login" component={Login}/>
            <LoginStack.Screen name="SignUp" component={SignUp}/>
            <LoginStack.Screen name="ResetPassword" component={ResetPassword}/>
        </LoginStack.Navigator>
    );
}
