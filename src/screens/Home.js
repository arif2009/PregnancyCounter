import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyDatePicker from '../components/MyDatePicker';

const Home = () => {
    return(
        <View>
            <MyDatePicker />
            <Text>Home Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Home;