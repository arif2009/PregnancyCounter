import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker';

const MyDatePicker = ({ minDate, date, currentDate, onDateChange }) => {
    const { width, height } = Dimensions.get('window');
    const w70 = width*70/100;

    return(
        <View>
            <DatePicker
            style={{ width: w70 }}
            date={ date } //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate={ minDate }
            maxDate={ currentDate }
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    marginLeft: 0,
                    height: 40
                },
                dateInput: {
                    marginLeft: 36
                },
                dateText: {
                    fontWeight: 'bold',
                    fontSize: 16
                }
            }}
            onDateChange={date => {
                onDateChange(date);
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MyDatePicker;