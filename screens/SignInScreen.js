import { useState } from "react";
import { Alert, Text, Pressable, TextInput, View, StyleSheet,Button } from "react-native";

const SignInScreen = ({ navigation, setIsSignedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernames = ["Ahmad", "Mohammad", "Ali"];
  const passwords = ["a111", "b111", "c111"];

  const CheckValidation = () => {
    if (usernames.includes(username) && passwords.includes(password)) {
      const userIndex = usernames.indexOf(username);
      const passIndex = passwords.indexOf(password);

      if (userIndex === passIndex) {
        Alert.alert("Login successfully");
        setIsSignedIn(true); // Update the state in the App component
        navigation.navigate('Home');
      } else {
        Alert.alert("Incorrect username or password!");
      }
    } else {
      Alert.alert("Incorrect username or password!");
    }
  };

  return (
    <View style={styles.cnotaner}>
      
        <TextInput onChangeText={setUsername}  style={styles.textinput} placeholder="User Name"/>
        <TextInput onChangeText={setPassword}  style={styles.textinput} placeholder="Password" secureTextEntry />
        <Pressable style={styles.button} onPress={CheckValidation} >
        <Text style={styles.login}>LOGIN</Text>
        </Pressable> 

        <View style={styles.register}>
        <Text>Don't have an account? </Text>
        <Text style={{fontWeight:'bold'}} onPress={()=>navigation.navigate('SignUp')}>Regester</Text>
        </View>
    </View>
    
  );
};

export default SignInScreen;
 const styles= StyleSheet.create({
cnotaner:{
backgroundColor:'#E5E4E2',
width:350,
height:250,
borderRadius:20,
alignSelf:'center',
marginTop:50,
},

  textinput:{
    borderColor:'#6698FF',
    alignSelf:'center',
    margin:20,
    width:300,
    height:50,
    borderEndColor:'red', 
    borderWidth:1,
    borderRadius:10,
  
  },

  button:{

    backgroundColor:'#6698FF',
    marginBottom:10,
    alignSelf:'center',
    borderRadius:10,
    

  },

  login:{
    fontSize:18,
    color:'white',
    padding:6
    
  },
  register:{
  flexDirection:'row',
  alignSelf:'center',
  },
 })