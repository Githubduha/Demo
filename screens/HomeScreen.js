import {Text,View, Button} from "react-native"

const HomeScreen=({navigation})=>{ 
    return(
        <View style={{alignSelf:"center"}}>
    <Text>Home</Text>
    <Button title="profile " color={'#6698FF'} onPress={()=>navigation.navigate('Profile')}></Button>

    </View>
    );}
export default HomeScreen;