import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import MyButton from "../MyButton/MyButton";
import styles from './styles';

const SingleCar = (props) => {

    const { name, tagline, taglineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <MyButton
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom Order was pressed");
                    }}
                />

                <MyButton
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.warn("Existing Inventory was pressed");
                    }}
                />
            </View>

        </View>
    );
};

export default SingleCar;