import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import Geocode from 'react-geocode';
import mapStyles from '../../mapStyles';
import useStyles from './styles.js';
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);

// set response language. Defaults to english.
Geocode.setLanguage('en');

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion('us');
const Map = ({ posts }) => {
  const isMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const coordinates = { lat: 37.7749295, lng: -122.4194155 };
  console.log(posts);
  // posts.map((post) => {
  //   let maxLat = -Infinity,
  //     minLng = Infinity;
  //   Geocode.fromAddress(post.location).then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       if (lat > maxLat) maxLat = lat;
  //       if (lng < minLng) minLng = lng;
  //       console.log('bounds:  ', maxLat, minLng);
  //       coordinates.lat = maxLat;
  //       coordinates.lng = minLng;
  //       console.log('coords:', coordinates);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // });

  // console.log(
  //   'posts: ',
  //   Geocode.fromAddress(posts[0]?.location).then(
  //     (res) => {
  //       const { lat, lng } = res.results[0].geometry.location;
  //       console.log(lat, lng);
  //     },
  //     (err) => console.error(err)
  //   )
  // );

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={{ styles: mapStyles }}
        onChange={''}
        onChildClick={''}
      >
        {posts?.map((post, i) => {
          Geocode.fromAddress(post?.location).then((res) => {
            const { lat, lng } = res.results[0].geometry.location;
            console.log(lat, lng);
            <div
              className={classes.markerContainer}
              lat={Number(lat)}
              lng={Number(lng)}
              key={i}
            >
              {!isMobile ? (
                <LocationOnOutlinedIcon color='primary' fontSize='large' />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    className={classes.typography}
                    variant='subtitle2'
                    gutterBottom
                  >
                    {' '}
                    {post.title}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={post.selectedFile}
                    alt='post'
                  />
                </Paper>
              )}
            </div>;
          });
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
