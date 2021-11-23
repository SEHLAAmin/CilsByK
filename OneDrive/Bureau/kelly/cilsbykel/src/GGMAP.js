import React from "react";
import GoogleMapReact from 'google-map-react';
import './Map.css'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GGMAP(){
  const defaultProps = {
    center: {
      lat: 47.176107759050694,
      lng: -1.5433509423283307
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAWxJV9Ps8OTVIxP4tNA16G_kCkeazhCMU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AddLocationAltIcon style={{color:'red'}}
          lat={47.176107759050600}
          lng={-1.5433509423283300}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
