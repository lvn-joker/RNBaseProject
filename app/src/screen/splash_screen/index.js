import React, { useEffect, memo, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { resetPage } from 'app/src/navigation/action';
import { QUICKSAND_FONT } from 'app/res/fonts';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = (props) => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(resetPage('Home'));
        }, 2000);
    }, []);

    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>
                Splash Screen
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
        fontFamily: QUICKSAND_FONT.BOLD,
        fontSize: 20
    }
});

export default SplashScreen;
