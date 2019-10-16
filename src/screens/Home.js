import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MyDatePicker from '../components/MyDatePicker';
import useDates from '../hooks/useDates';

const Home = () => {
    const [minDate, currentDate, dateDiffDay, dateDiffWeek, dateDiffMonth] = useDates();
    const [date, setDate] = useState(currentDate); // date=FirstDayOfLastMenstrualPeriod

    return(
        <>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>Selection</Text>
                <Text>Select your first day of last menstrual period</Text>
                <MyDatePicker minDate={minDate} date={date} currentDate={currentDate} onDateChange={newDate => setDate(newDate)} />
            </View>
            <Text> Select your first day of last menstrual period</Text>
            {dateDiffDay(date, currentDate) > 0 ? <Text>Age in day: {dateDiffDay(date, currentDate)} days</Text> : <Text>Age in day: 0</Text>}
            {dateDiffDay(date, currentDate) > 0 ? <Text>Age in week: {dateDiffWeek(date, currentDate)}</Text>: <Text>Age in week: 0</Text>}
            {dateDiffDay(date, currentDate) > 0 ? <Text>Age in month: {dateDiffMonth(date, currentDate)}</Text> : <Text>Age in month: 0</Text>}
            <Text> ────────  Register With  ────────</Text>
        </>
    );
};

const styles = StyleSheet.create({
    fieldSet:{
        margin: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#000'
    },
    legend:{
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    }
});

export default Home;