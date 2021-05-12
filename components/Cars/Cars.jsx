import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import SingleCar from '../SingleCar/SingleCar';
import styles from './styles';
import cars from '../../assets/database';

const Cars = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <SingleCar car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default Cars;