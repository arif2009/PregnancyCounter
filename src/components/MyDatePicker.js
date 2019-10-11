import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

const MyDatePicker = () => {
    const { minDate, currentDate, maxDate } = dates();
    const [date, setDate] = useState(currentDate);

    return(
        <View>
            <DatePicker
            style={{ width: 200 }}
            date={date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate={minDate}
            maxDate={maxDate}
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
                setDate(date);
                console.log(date);
            }}
            />
        </View>
    );
};

const dates = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return {
        minDate: `${dd}-${mm}-${yyyy - 1}`,
        currentDate: `${dd}-${mm}-${yyyy}`,
        maxDate: `${dd}-${mm}-${yyyy + 1}`
    };
};

const styles = StyleSheet.create({});

export default MyDatePicker;