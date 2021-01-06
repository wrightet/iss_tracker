import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MyMap from './map';

class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            long: ''
        }
        this.getPostition = this.getPostition.bind(this);
    }

    componentDidMount(){
        this.intId= setInterval(this.getPostition, 10000)
    }

    componentWillUnmount(){
        clearInterval(this.intId)
        
    }

    getPostition(){
        
        axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        .then(data => {this.setState({lat: data.data.latitude, long:data.data.longitude})})
    }

    render(){
        return (
            <div >
                <div style={posStyle}>
                    {this.state.lat === '' 
                    ? 
                    <div>loading</div>
                    : 
                    <div>
                        <div > Latitude: {this.state.lat}</div>
                        <div>Longitude: {this.state.long}</div>
                    </div>
                    
                    }
                    
                </div>
               
                <MyMap lat={this.state.lat} long={this.state.long} />
            </div> 
            
        ) 
    }
    
}

const PositionToo = () => {
    const [lat, long] = this.useState(0);
    
    return(
        <div >
            <div style={posStyle}>
                {this.state.lat === ''
                    ?
                    <div>loading</div>
                    :
                    <div>
                        <div > Latitude: {this.state.lat}</div>
                        <div>Longitude: {this.state.long}</div>
                    </div>

                }

            </div>

            <MyMap lat={this.state.lat} long={this.state.long} />
        </div> 
    )
}

const posStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid white',
    width: '15%',
    fontSize: '1em',
    margin:'5% auto 0% 10%',
    padding: '1%',
    // background:'white',
    color:'white'
}

export default Position;