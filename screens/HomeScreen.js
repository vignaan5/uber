import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux';
import { setOrigin,setDestination } from '../slices/navSlice';
   


const HomeScreen = ({}) => {

 const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
         <Image source={require('../Images/vignaan.png')}  style={{height:100,width:100,resizeMode:"contain"}}  ></Image>
           
              <GooglePlacesAutocomplete
                   placeholder='Where are you from ?'

                   styles={{container:{flex:0,},textInput:{fontSize:18,},}}

                   query={{key: GOOGLE_MAPS_APIKEY,
                            language:'en'      }}

                            fetchDetails={true}
                            nearbyPlacesAPI='GooglePlacesSearch'

                            debounce={400}
                      
                    returnKeyType={"seach"}

                  onPress={(data,details=null)=>
                  {
                   
                     dispatch(setOrigin(
                      {
                            location: details.geometry.location,
                            description:data.description,

                      })
                      
                      );
                       
                      dispatch(setDestination(null));
                  }}



                enablePoweredByContainer={false}

                    
              >


              </GooglePlacesAutocomplete>


         <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})