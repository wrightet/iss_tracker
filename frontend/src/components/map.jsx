import React from 'react';
import {Keys} from '../../../config/keys_dev';
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
    width:'100%',
    height:'100%',
    margin:'auto',
    // display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'black !important',
    color:'black'
}
export default GoogleApiWrapper({
    apiKey: Keys.googleKey
})(MyMap)