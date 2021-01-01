import React from 'react';
import {Keys} from '../api_key_nasa';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
class MyMap extends React.Component{
  
    render(){
        return(
            <Map
                google={this.props.google}
                zoom={2}
                initialCenter={{ lat: this.props.lat, lng: this.props.long }}
                style={mapStyle}
            >
            <Marker position={{ lat: this.props.lat, lng: this.props.long }} /> 
            </Map>
        )
    }    
}

const mapStyle = {
    width:'80%',
    height:'80%',
    margin:'auto',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'black'
}
export default GoogleApiWrapper({
    apiKey: Keys.googleKey
})(MyMap)