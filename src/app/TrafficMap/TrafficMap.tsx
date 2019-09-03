import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { GoogleMap } from '../GoogleMap/GoogleMap';

const TrafficMap: React.FunctionComponent<any> = (props) => {

  async function handleApiLoaded (map: google.maps.Map) {
    console.log('The map loaded on the TrafficMap page!')

    // Can use the functions on the map Object per the API:
    // https://developers.google.com/maps/documentation/javascript/tutorial
    map.addListener('zoom_changed', () => {
      console.log(`Map is now zoomed to: ${map.getZoom()}`)
    })

    const response = await fetch('http://traffic-api.acme.com/some-data')
    const data = response.json()

    // Maybe data contains some points with latitude and longitude?
    // Render them as google.maps.Marker in a for loop
    // const marker = new google.maps.Marker({})
  }

  return (
    <PageSection>
      <Title size="lg">Traffic Map</Title>
      <hr/>
      <br/>
      <GoogleMap handleMapApiLoaded={handleApiLoaded}></GoogleMap>
    </PageSection>
  );
}

export { TrafficMap };
