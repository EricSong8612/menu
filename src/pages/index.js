import React from 'react';
import Link from 'gatsby-link';
import Flavour from '../components/flavours';

export default () =>
 <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', alignItems: 'center', minWidth: '300px', fontFamily: 'sans-serif'}} >
   <Flavour
     name='black raspberry'
     url='https://s3.amazonaws.com/pinkberry-menu/blackberry.jpg'
     to='/blackraspberry/'
   />
   <Flavour
     name='power berry'
     url='https://s3.amazonaws.com/pinkberry-menu/strawberry.jpg'
     to='/powerberry/'
   />
   <Flavour
     name='pomegranate'
     url='https://s3.amazonaws.com/pinkberry-menu/pomegranate.jpg'
     to='/pomegranate/'
   />
   <Flavour
     name='original'
     url='https://s3.amazonaws.com/pinkberry-menu/original.jpg'
     to='/original/'
   />
   <Flavour
     name='blood orange'
     url='https://s3.amazonaws.com/pinkberry-menu/bloodorange.jpg'
     to='/bloodorange/'
   />
 </div>
