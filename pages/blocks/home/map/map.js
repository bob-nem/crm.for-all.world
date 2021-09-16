import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 23.746497,
      lng: 90.392484
    },
    zoom: 16,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCn-sNut3kKEg5BES9ywDjwiyece9wX6sE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={23.746497}
          lng={90.392484}
          text="optimization.for-all.world"
        />
      </GoogleMapReact>
    </div>
  );
}