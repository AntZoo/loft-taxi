import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYW50em9vIiwiYSI6ImNreHFreXplajBhN20ycm1wcWhqczVtN2QifQ.1BAN24fhV7l2BGx7DkdBTw';

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      attributionControl: false,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3166718, 59.9500019],
      zoom: 15,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className='map-wrapper'>
        <div data-testid='map' className='map' ref={this.mapContainer} />
      </div>
    );
  }
}
