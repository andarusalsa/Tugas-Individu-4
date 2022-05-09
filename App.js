import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Notification from "expo-notifications";
import moment from 'moment'

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});


export default function App() {

  const [Time, setTime] = useState('');
  const [scedhule, setschedhule] = useState('');

  let testing = true

  useEffect(() => {

    const repeat = setInterval(() => {
      var date = moment().utcOffset('+07:00').format(' hh:mm:ss a');
      setTime(date);
    }, 0)

    if (Time.toLocaleLowerCase() === '04:38:00 AM') {
      setschedhule('Subuh')
      console.log(Time)
      handleNotification();
    }
    if (Time.toLocaleLowerCase() === '11:55:00 AM') {
      setschedhule('Zuhur')
      console.log(Time)
      handleNotification();

    }
    if (Time.toLocaleLowerCase() === '03:18:00 PM') {
      setschedhule('Ashar')
      console.log(Time)
      handleNotification();

    }
    if (Time.toLocaleLowerCase() === '05:52:00 PM') {
      setschedhule('Maghrib')
      console.log(Time)
      handleNotification();

    }
    if (Time.toLocaleLowerCase() === '19:04:00 PM') {
      setschedhule('Isya')
      console.log(Time)
      handleNotification();

    }

  })


  const handleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Waktu Sholat Wilayah Bandar Lampung",
        body: scedhule,
      },
      trigger: {
        seconds: 10,
      },
    });
  };
  return (
    <View style={styles.background}>
      <Text style = {styles.judul}>Waktu Sholat Wilayah Bandar Lampung</Text>
      <Text style = {styles.jam}>{Time.toLocaleLowerCase()}</Text>
      <View style={styles.row}>

        <View >
          <Text style={styles.isi}>Subuh</Text>
          <Text style={styles.isi}>Zuhur</Text>
          <Text style={styles.isi}>Ashar</Text>
          <Text style={styles.isi}>Maghrib</Text>
          <Text style={styles.isi}>Isya</Text>
        </View>
        <View >
          <Text>04:38:00 am</Text>
          <Text>11:55:00 am</Text>
          <Text>03:18:00 pm</Text>
          <Text>05:52:00 pm</Text>
          <Text>07:04:00 pm</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ad7fc1",
    alignItems: "right",
    justifyContent: "right",
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch'
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '50%' 
  },
  judul:{
    fontSize :15,
    fontWeight :'bold',
    textAlign : 'center',
    color: 'white',
    backgroundColor:'#340f45'
  },
  isi:{
    color:'white',
    backgroundColor:'#a82be1'
  }

});