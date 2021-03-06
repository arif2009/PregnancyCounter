import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import MyDatePicker from '../components/MyDatePicker';
import useDates from '../hooks/useDates';
import WeeklyImages from '../hooks/constants';

const Home = () => {
    const [minDate, currentDate, deliveryAndBorn, dateDiffDay, dateDiffWeek, dateDiffMonth] = useDates();
    const [date, setDate] = useState(currentDate); // date=FirstDayOfLastMenstrualPeriod
    const {deliveryDate, bornLeftDay, bornLeftWeek} = deliveryAndBorn(date, currentDate);
    const [weeks, days] = dateDiffWeek(date, currentDate);
    const ImgUrls = WeeklyImages();

    return(
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.fieldSet, styles.ca, styles.ph, styles.pb, styles.mt]}>
                    <Text style={[styles.legend, styles.ts]}>Selection</Text>
                    <Text style={[styles.ts, styles.mv]}>Select your first day of last menstrual period</Text>
                    <MyDatePicker minDate={minDate} date={date} currentDate={currentDate} onDateChange={newDate => setDate(newDate)} />
                </View>

                <View style={[styles.fieldSet, styles.p]}>
                    <Text style={[styles.legend, styles.ts]}>Prediction</Text>
                    <View style={styles.mvSm}>{
                        dateDiffDay(date, currentDate) > 0 ? 
                        <Text style={styles.ts}>Age in day: <Text style={{color:'#008000'}}>{dateDiffDay(date, currentDate)} days</Text></Text> 
                        : <Text style={styles.ts}>Age in day: 0</Text>
                    }</View>

                    <View style={styles.mvSm}>{
                        dateDiffDay(date, currentDate) > 0 ? 
                        <Text style={styles.ts}>Age in week: <Text style={{color:'#0000FF'}}>{weeks} weeks {days} days</Text></Text>
                        : <Text style={styles.ts}>Age in week: 0</Text>
                    }</View>

                    <View style={styles.mvSm}>{
                        dateDiffDay(date, currentDate) > 0 ? 
                        <Text style={styles.ts}>Age in month: <Text style={{color:'#A52A2A'}}>{dateDiffMonth(date, currentDate)}</Text></Text> 
                        : <Text style={styles.ts}>Age in month: 0</Text>
                    }</View>

                    <View style={styles.mvSm}>
                        <Text style={styles.ts}>Approximate delivery date: <Text style={{color:'#A52A2A'}}>{deliveryDate}</Text></Text>
                    </View>

                    <View style={[styles.mvSm]}>
                        <Text style={[styles.ts, styles.textBold, {textAlign: 'center'}]}>Approximately <Text style={{color:'#ff0000'}}>{bornLeftDay} days or {bornLeftWeek} weeks</Text> left until your baby is born!</Text>
                    </View>
                </View>

                <View>
                    <Text style={[styles.ts,{position: 'absolute', zIndex: 1, top:-1, left: 20,fontWeight: 'bold',backgroundColor: '#FFFFFF'}]}>Your baby looks like</Text>
                    <View style={[styles.fieldSet, {overflow:'hidden'}]}>
                        <View style={styles.mtSm}>
                            <Image source={{ uri: ImgUrls[weeks] }} style={{resizeMode: 'stretch',width: null, height: 200}} />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    ts:{
        fontSize: 16
    },
    mv:{
        marginVertical: 10
    },
    mvSm:{
        marginVertical: 5
    },
    mt:{
        marginTop: 20
    },
    mtSm:{
        marginTop: 10
    },
    ca:{
        alignItems: 'center'
    },
    ph:{
        paddingHorizontal: 10
    },
    pb:{
        paddingBottom: 10
    },
    p:{
        padding: 10
    },
    textBold:{
        fontWeight: 'bold'
    },
    fieldSet:{
        margin: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000'
    },
    legend:{
        position: 'absolute',
        top: -12,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    }
});

export default Home;