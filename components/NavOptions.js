import { FlatList, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin,selectDestination } from '../slices/navSlice';

const data = [ 
    {
        id:"123",
        u:<Image source={require('../Images/car.png')} style={{height:100,width:115,resizeMode:"contain"}}></Image>,  
        title:"Get a ride",
        screen: "MapScreen",
    },
    {
        id:"456",
        u:<Image source={require('../Images/eat.png')} style={{height:100,width:100,resizeMode:"contain"}}></Image>,
        title:"Gyanu Eats",
        screen:"EatScreen",
    }
    
    ];
    




const NavOptions = () => {
  const navigation=useNavigation();
  const origin=useSelector(selectOrigin);
  return (
    <FlatList

           

       data={data}
       keyExtractor={(item)=> item.id}
       horizontal
       renderItem={({item})=>
       (

         <TouchableOpacity  onPress={()=>{navigation.navigate(item.screen)}} disabled={!origin}  style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-1 `}>
                     <View style={tw`${!origin && "opacity-20"}`}>

                        {item.u}
                        <Text style={tw`mt-2 text-lg font-semibold `} >{item.title}</Text>
                          <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name='caretdown' type='antdesign' color='white'></Icon>
                     </View>
         </TouchableOpacity>

    )

       }
    
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})