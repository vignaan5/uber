import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    origin2: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin:(state,action) =>
        {
           state.origin=action.payload;
        },
        setOrigin2:(state,action) =>
        {
           state.origin2=action.payload;
        },
        setDestination:(state,action) =>
        {
           state.destination=action.payload;
        },
        setTravelTimeInformation:(state,action) =>
        {
           state.travelTimeInformation=action.payload;
        },
    }
});

export const {setOrigin,setOrigin2,setDestination,setTravelTimeInformation} = navSlice.actions;


//selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectOrigin2 = (state) => state.nav.origin2;

export const selectDestination =(state) =>state.nav.destination;

export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;