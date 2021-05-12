import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import {
    Aclonica_400Regular, useFonts
} from '@expo-google-fonts/aclonica'


const Navbar = () => {

    let [fontsLoaded] = useFonts({
        Aclonica_400Regular
    })

    return (fontsLoaded &&
        <View style={styles.container}>
            <Text style={[styles.title, { fontFamily: 'Aclonica_400Regular' }]}>CarShop</Text>
            <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
        </View>
    );
};

export default Navbar;
