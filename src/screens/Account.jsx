import React from 'react';
import { View, Text } from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context";

// Components
import { FormLogin, UserData } from '../components/Auth';

// Hooks
import useAuth from '../hooks/useAuth';

const Account = () => {
  const { auth } = useAuth();

  return (
    <View>
      {auth ? <UserData /> : <FormLogin />}
    </View>
  )
}

export default Account;