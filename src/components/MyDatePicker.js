import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

const MyDatePicker = ({ minDate, date, currentDate, onDateChange }) => {

    return(
        <View>
            <DatePicker
            style={{ width: 200 }}
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
                top: 4,
                marginLeft: 0,
                },
                dateInput: {
                marginLeft: 36,
                },
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