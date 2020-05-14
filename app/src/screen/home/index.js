import React, {} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRoute, useNavigation, useIsFocused } from '@react-navigation/native';

const HomeScreen = (props) => {
    const route = useIsFocused();

    console.log('useIsFocused', route);

    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>
                Home Screen
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   },
   text: {
       color: '#000',
       fontSize: 20
   }
});

export default HomeScreen;
