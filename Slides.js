import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { styles, textStyles } from './styles';  // Adjust the path as needed
import { useGlobalState } from './GlobalStateContext';
import { TimerPickerModal } from "react-native-timer-picker";
import TimePicker from './TimePicker.js';
import { LinearGradient } from "expo-linear-gradient";






function Slide0() {

  const { globalState, updateGlobalState } = useGlobalState();
  const incrementSlideCount = () => {
    const newSlide = globalState.slide + 1;
    updateGlobalState({ slide: newSlide });
  };

  return (
    <View style={{...styles.container , alignItems: "center"}}>
           <View style={{ height: 150 }} />

      <Text style={{...textStyles.titleText, fontSize: 70, fontFamily: "Arial", color: "black"}}>ourglass</Text>
     
      <Image
          source={require('./logo.png')} // Change the path accordingly
          style={styles.logo}
        />

<View style={{ height: 180 }} />

      <TouchableOpacity style={styles.button} onPress={() => {
        incrementSlideCount();
      }
      }>


        <Text style={textStyles.buttonText}>Next</Text>
      </TouchableOpacity>



    </View>
  )
};








function Slide1() {

  const [alarmString, setAlarmString] = useState(null);

  const [showPicker, setShowPicker] = useState(true);

  const { globalState, updateGlobalState } = useGlobalState();
  const [selectedDuration, setSelectedDuration] = useState("00:00:00");

  const handleChange = (newDuration) => {
    setSelectedDuration(newDuration);
  };


  const incrementSlideCount = () => {
    const newSlide = globalState.slide + 1;
    updateGlobalState({ slide: newSlide });
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 40 }} />
      <Text style={textStyles.titleText}>How much time do you spend per day on your phone?</Text>

      <View style={{ height: 150 }} />


      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setShowPicker(true)}>
        <View style={{ alignItems: "center" }}>
          {alarmString !== null ? (
            <Text style={{ color: "black", fontSize: 48 }}>
              {alarmString}
            </Text>
          ) : null}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPicker(true)}>
            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 18,
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 16,
                  overflow: "hidden",
                  borderColor: "#C2C2C2",
                  color: "black"
                }}>
                Input Hours
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TimerPickerModal
        visible={showPicker}
        setIsVisible={setShowPicker}
        onConfirm={(pickedDuration) => {
          setAlarmString(pickedDuration.hours + " h " + pickedDuration.minutes + " m");
          console.log(pickedDuration);
          setShowPicker(false);
          updateGlobalState({ oldHours: pickedDuration.hours });
          updateGlobalState({ oldMinutes: pickedDuration.minutes });

        }}
        modalTitle="(Hint: check your phone's screen time in settings)"
        onCancel={() => setShowPicker(false)}
        closeOnOverlayPress
        LinearGradient={LinearGradient}
        styles={{
          theme: "dark",
        }}
        modalProps={{
          overlayOpacity: 0.2,
        }}
        hideSeconds={true}
      />

      <View style={{ height: 200 }} />

      {alarmString != null ?
        (<TouchableOpacity style={styles.button} onPress={incrementSlideCount}>
          <Text style={textStyles.buttonText}>Next</Text>
        </TouchableOpacity>) : (<></>)
      }

    </View>
  )
};

function Slide2() {

  const { globalState, updateGlobalState } = useGlobalState();
  const incrementSlideCount = () => {
    const newSlide = globalState.slide + 1;
    updateGlobalState({ slide: newSlide });
  };

  return (
    <View style={styles.container}>
                 <View style={{ height: 100 }} />
      <Text style={textStyles.titleText}>Sheesh, that's a lot of hours! {'\n\n'}(And yes, we say that to everyone. But why else would you be here?) </Text> 
      <View style={{ height: 300 }} /> 
      <TouchableOpacity style={styles.button} onPress={() => {
        incrementSlideCount();
      }
      }>
        <Text style={textStyles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
};


function Slide3() {

  const { globalState, updateGlobalState } = useGlobalState();
  const incrementSlideCount = () => {
    const newSlide = globalState.slide + 1;
    updateGlobalState({ slide: newSlide });
  };

  return (
    <View style={styles.container}>
                 <View style={{ height: 100 }} />
      <Text style={textStyles.titleText}>You know that social media is probably bad for your attention, productivity, and mental health.</Text> 
      <Text style={textStyles.titleText}>So why haven't you quit?</Text> 
      <Text style={textStyles.titleText}>Well, the apps are addictive by design, and it's near impossible to hold yourself accountable for your screen time.</Text> 


      <View style={{ height: 50 }} /> 
      <TouchableOpacity style={styles.button} onPress={() => {
        incrementSlideCount();
      }
      }>
        <Text style={textStyles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
};


function Slide4() {

  const { globalState, updateGlobalState } = useGlobalState();
  const incrementSlideCount = () => {
    const newSlide = globalState.slide + 1;
    updateGlobalState({ slide: newSlide });
  };

  return (
    <View style={styles.container}>
                 <View style={{ height: 100 }} />
      <Text style={{...textStyles.titleText, fontSize: 50}}>But you don't have to anymore. </Text> 
      <Text style={textStyles.titleText}>With ourglass, you pair up with a friend and hold each other accountable for your screen time usage.</Text> 


      <View style={{ height: 150 }} /> 
      <TouchableOpacity style={styles.button} onPress={() => {
        incrementSlideCount();
      }
      }>
        <Text style={textStyles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
};


function Slide5() {

  const { globalState, updateGlobalState } = useGlobalState();
  const incrementSlideCount = () => {
    const newSlide = globalState.slide + 1;
    updateGlobalState({ slide: newSlide });
  };

  return (
    <View style={styles.container}>
                 <View style={{ height: 100 }} />
      <Text style={{...textStyles.titleText}}>Your friend gets notified when you go over your screen time goal and vice versa.</Text> 
      <Text style={{...textStyles.titleText}}>And if you want, you can put money on the line. (Say, whoever goes over owes the friend $5).</Text> 
      <Text style={{...textStyles.titleText, fontSize: 20}}>Note: we didn't have time to implement this app functionally. The next slide is an very rough sketch of what the homepage might look like. The main product here is the idea, the branding, and the app design.</Text> 




      <View style={{ height: 50 }} /> 
      <TouchableOpacity style={styles.button} onPress={() => {
        incrementSlideCount();
      }
      }>
        <Text style={textStyles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
};












export { Slide0, Slide1, Slide2, Slide3, Slide4, Slide5 };