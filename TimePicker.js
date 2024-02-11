import React, { useState } from 'react';
import { View, Text, Button, Picker, StyleSheet } from 'react-native';

const TimePicker = () => {
  const [selectedHour, setSelectedHour] = useState('1');
  const [selectedMinute, setSelectedMinute] = useState('0');

  const handleSave = () => {
    const hours = parseInt(selectedHour, 10);
    const minutes = parseInt(selectedMinute, 10);
    console.log('Selected Time:', hours, minutes);
    // You can use hours and minutes as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selected Time:</Text>
      <Text>{`${selectedHour} hours ${selectedMinute} minutes`}</Text>

      <Text style={styles.label}>Hours:</Text>
      <Picker
        selectedValue={selectedHour}
        onValueChange={(itemValue) => setSelectedHour(itemValue)}
        style={styles.picker}
      >
        {/* Add hour options from 1 to 15 */}
        {Array.from({ length: 15 }, (_, i) => i + 1).map((hour) => (
          <Picker.Item key={hour} label={`${hour}`} value={`${hour}`} />
        ))}
      </Picker>

      <Text style={styles.label}>Minutes:</Text>
      <Picker
        selectedValue={selectedMinute}
        onValueChange={(itemValue) => setSelectedMinute(itemValue)}
        style={styles.picker}
      >
        {/* Add minute options from 0 to 59 */}
        {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
          <Picker.Item key={minute} label={`${minute}`} value={`${minute}`} />
        ))}
      </Picker>

      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  picker: {
    width: 100,
    height: 50,
    marginBottom: 16,
  },
});

export default TimePicker;
