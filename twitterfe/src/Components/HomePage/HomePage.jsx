
import React from 'react';
import { Grid } from '@mui/material';
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection';

const HomePage = () => {
  return (
   <div className="w-full min-h-screen px-4 lg:px-24">
      <Grid container spacing={50}>
        {/* Left Part */}
        <Grid item xs={12} md={3} >
          <div className="w-full text-left"><Navigation/></div>
        </Grid>

        {/* Middle Part */}
        <Grid item xs={12} lg={6}>
          <HomeSection/>
        </Grid>

        {/* Right Part */}
        <Grid item xs={12} lg={3} className="hidden lg:flex">
          <div className="w-full text-right">right part</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
