import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    friendInfo: {
        padding: 10, 
        marginLeft: 20, 
        backgroundColor: "#C7FCDB", 
        flex: 1, 
        height: 80,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#072548",
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingBottom: 500,
    //   marginTop: 80,
        backgroundColor: "white",
    },
    button: {
      backgroundColor: '#C7FCDB',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginBottom: 50
    },
    box: {
      width: 300,
      height: 100,
      backgroundColor: 'white',
      padding: 30,
      margin: 10,
      borderRadius: 700,
      borderWidth: 2,
      borderColor: "green",
      alignItems: "center"
    },
    alarmTimeBox: {
        // width: 300,
        // height: 100,
        padding: 40,
        // margin: 10,
        borderRadius: 80,
        borderWidth: 8,
        borderColor: "#072548",
        alignItems: "center",
        backgroundColor: "#C7FCDB",
        marginBottom: 0
      },
      horizontalContainer: {
        marginTop: 20,
        flexDirection: 'row', // Horizontal layout
        // justifyContent: 'space-around', // Adjust as needed (space-between, space-around, center, etc.)
        alignItems: 'center', // Vertical alignment (optional)
        padding: 10,

      },
    time:
    {
      // padding: 80,
      fontWeight: "bold",
      fontSize: 30,
      color: "green"
  
  
    },

    image: {
        // flex: 1,
        borderRadius: 100,
        width: 80, // Adjust as needed
        height: 80, // Adjust as needed
        resizeMode: 'cover', // or 'cover' or 'stretch' as per your requirement
        // borderRadius: 10, // Optional: Add borderRadius for rounded corners
      },

      logo: {
        // flex: 1,
        // borderRadius: 100,
        width: 300, // Adjust as needed
        height: 200, // Adjust as needed
        resizeMode: 'cover', // or 'cover' or 'stretch' as per your requirement
        // borderRadius: 10, // Optional: Add borderRadius for rounded corners
        marginTop: 30
      },

      
  
  });

const textStyles = StyleSheet.create({

  name: {
   fontSize: 20,
   fontWeight: 'bold'
  },
    
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 30,  // Include a graph comparison? Or a race-type display? Could be rlly cute!
    fontWeight: 'bold',
    margin: 10
  },

  mainTimeText: {
    // fontFamily: 'Courier',
    fontSize: 50,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  timeText: {
    alignSelf: 'flex-start', 
    fontSize: 30,  
    fontWeight: 'bold',}
});

export { styles, textStyles };
