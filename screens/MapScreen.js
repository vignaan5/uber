import { StyleSheet, Text, View ,SafeAreaView,Image, Touchable, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import tw, { create } from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import Map from '../components/Map'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setDestination } from '../slices/navSlice'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationCard from '../components/NavigationCard';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import  MapViewDirections from 'react-native-maps-directions';
import { FlatList } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements'


const get_price=async()=>
{
     
}



const MapScreen = () => {



  const Stack2 = createStackNavigator();
  const origin = useSelector(selectOrigin);
  let destination=useSelector(selectDestination);
  let [lati,set_lati]=React.useState(null);
  let [longi,set_longi]=React.useState(null);
  let [dist,set_dist]=React.useState(null);
  const dispatch = useDispatch();
  

  return (
    <View>
     <View style={{height:250}}>
      
    <MapView

    style={tw`flex-1 `}
                mapType='mutedStandard'
                showsCompass={true}
                zoomEnabled={true}
                zoomControlEnabled={true}
                scrollEnabled={true}
                onLayout={this.onMapLayout}
                initialRegion={{
                  latitude: origin.location.lat,
                  longitude: origin.location.lng,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}>
               
                    <Marker coordinate={{latitude:origin.location.lat,longitude:origin.location.lng}} title='your location' description={origin.description}></Marker>
                     
                     {lati && longi && (<Marker id='1' coordinate={{latitude:lati,longitude:longi}} pinColor='green' title='your Destination' ></Marker>)}   

                     {lati && longi && (<MapViewDirections origin={{latitude:origin.location.lat,longitude:origin.location.lng}}  destination={{latitude:lati,longitude:longi}} apikey={GOOGLE_MAPS_APIKEY}     onReady={result => {
               set_dist(result.distance)   
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
                   }}

           
            ></MapViewDirections>)} 

           </MapView>
           </View>

           <View >
                  
           <GooglePlacesAutocomplete
                   placeholder='Search Destination'

                   styles={{container:{flex:0,},textInput:{fontSize:18,},}}

                   query={{key: GOOGLE_MAPS_APIKEY,
                            language:'en'      }}

                            fetchDetails={true}
                            nearbyPlacesAPI='GooglePlacesSearch'

                            debounce={400}
                      
                    returnKeyType={"seach"}

                  onPress={(data,details=null)=>
                  {
                    
                     dispatch(setDestination(
                      {
                            location: details.geometry.location,
                            description:data.description,

                      })
                      
                      );
                       
                      dispatch(setDestination(null));
                    
                      set_lati(details.geometry.location.lat);
                      set_longi(details.geometry.location.lng);

                      console.log(lati);
                   
                 
                      
                  }}



                enablePoweredByContainer={false}

                    
              >


              </GooglePlacesAutocomplete>
             

            
                
            


           </View>

             <View >

              <Image style={{height:70,width:80,flex:0,flexDirection:"row",alignContent:"center"}} source={require('../Images/bxl.png')}></Image>
              <Image style={{height:70,width:80,flex:0,flexDirection:"row",alignContent:"center"}} source={require('../Images/x.png')}></Image>
               <Button title="Book Cab" Text="Book" ></Button>
               {dist && (    <Text> ({'\u20B9'}20 +({'\u20B9'}11 * {dist} km)) = {'\u20B9'}{20+(11*dist)} for this ride  </Text>)}

             </View>

           </View>

  );
};





export default MapScreen

const styles = StyleSheet.create({})