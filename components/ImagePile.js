import React from 'react';
import { StyleSheet, Image, View } from "react-native";

export default function ImagePile() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.ground} />

            <Image source={require("../assets/palmtree.png")} style={[styles.image, styles.palmLeft]} />
            <Image source={require("../assets/palmtree.png")} style={[styles.image, styles.palmRight]} />

            <Image source={require("../assets/grass.png")} style={[styles.image, styles.grass]} />

            <Image source={require("../assets/elephant.png")} style={[styles.image, styles.elephant]} />

            <Image source={require("../assets/palmtree.png")} style={[styles.image, styles.palmFront]} />
        </View>
    );
}

const IMAGE_SIZE = 200;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 450,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        marginBottom: 12,
    },
    ground: {
        position: 'absolute',
        bottom: 30,
        width: 380,
        height: 120,
        backgroundColor: '#8f8a86',
        borderRadius: 240,
        opacity: 1.95,
        alignSelf: 'center',
    },
    image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        position: 'absolute',
        resizeMode: 'contain',
    },
    palmLeft: {
        left: 10,
        bottom: 80,
        width: 110,
        height: 180,
        transform: [{ scale: 0.95 }],
    },
    palmRight: {
        right: -20,
        bottom: 70,
        width: 140,
        height: 200,
        transform: [{ scale: 0.95 }],
    },
    grass: {
        right: 40,
        bottom: 88,
        width: 220,
        height: 180,
    },
    elephant: {
        right: 70,
        bottom: 36,
        width: 180,
        height: 160,
    },
    palmFront: {
        bottom: 80,
        right: 210,
        width: 180,
        height: 200,
    },
});
