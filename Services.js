import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
const hotelData = [
  {
    id: 1,
    name: 'Luxury Hotel',
    description: 'Experience luxury and comfort in our top-rated hotel. Book your stay now!',
    imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/345742520.jpg?k=76270be811ebcb2ed123bd361fc8a4787a2f62f4e451349f4c4fc1a87c311bdc&o=',
  },
  {
    id: 2,
    name: 'Business Hotel',
    description: 'Perfect for business travelers. Stay connected and productive with our amenities.',
    imageUrl: 'https://media.gqindia.com/wp-content/uploads/2017/05/04-866x487.jpg',
  },
  {
    id: 3,
    name: 'Budget Inn',
    description: 'Affordable and cozy accommodations for your budget. Book your room today!',
    imageUrl: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH72120224162908/QS1042/QS1042-Q1/Screenshot_2022-09-11-09-49-31-82_40deb401b9ffe8e1df2f1cc5ba480b12__01.jpg',
  },
  {
    id: 4,
    name: 'Beach Resort',
    description: 'Escape to paradise in our beachfront resort. Relax and enjoy the sun and sea!',
    imageUrl: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/e0/7b/40eead99cceb3d62e3e997ee05ca67681dfed1f9340ffd3603f30ce0641d.jpeg',
  },
  {
    id: 5,
    name: 'City View Hotel',
    description: 'Enjoy stunning city views from our centrally located hotel. Book your urban retreat!',
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/7c/1d/e2/night-view-from-room.jpg',
  },
  {
    id: 6,
    name: 'Mountain Lodge',
    description: 'Experience the beauty of nature in our mountain lodge. Perfect for outdoor enthusiasts!',
    imageUrl: 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/07/24/0732/Hyatt-Residence-Club-at-Beaver-Creek-P001-Exterior.jpg/Hyatt-Residence-Club-at-Beaver-Creek-P001-Exterior.16x9.jpg?imwidth=1920',
  },
  {
    id: 7,
    name: 'Family Inn',
    description: 'Family-friendly accommodations with activities for all ages. Plan your family vacation now!',
    imageUrl: 'https://pigeonforgetncoc.weblinkconnect.com/External/WCPages/WCWebContent/WebContentPage.aspx?ContentID=4169',
  },
  {
    id: 8,
    name: 'Historic Hotel',
    description: 'Step back in time in our historic hotel. Immerse yourself in the charm of the past.',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/5e/a4/4c/hoi-an-hotel.jpg?w=700&h=-1&s=1',
  },
  {
    id: 9,
    name: 'Spa Retreat',
    description: 'Indulge in relaxation and rejuvenation at our luxurious spa retreat. Unwind in style!',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/pvrpmci-spa-outdoor-cocoon-individual-1675108929.jpg?crop=1.00xw:0.754xh;0,0.246xh&resize=1200:*',
  },
  {
    id: 10,
    name: 'Golf Resort',
    description: 'Play a round of golf in the scenic surroundings of our premium golf resort. Tee off now!',
    imageUrl: 'https://www.glencorgolf.com/wp-content/uploads/2015/04/Mar-Menor-Golf-Tuition-Break-1.jpg',
  },
  {
    id: 11,
    name: 'Skyline Tower Hotel',
    description: 'Experience luxury living at new heights with breathtaking views from our skyline tower hotel.',
    imageUrl: 'https://ak-d.tripcdn.com/images/22020g0000007zrcl984F_R_800_525.jpg',
  },
  {
    id: 12,
    name: 'Riverside Lodge',
    description: 'Relax by the riverside in our cozy lodge. Enjoy nature and tranquility by the water.',
    imageUrl: 'https://www.shortstayhomes.co.uk/wp-content/uploads/2015/12/Riverside-lodge-at-dusk.jpg',
  },
];

function HotelCard({ name, description, imageUrl }) {
  return (
    <Card sx={{ height: '100%',width:"100%", display: 'flex', flexDirection: 'column' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          width="50hv"
          image={imageUrl}
          alt={name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/BookNowForm">
      <Button size="small" color="primary">
          Book Now 
        </Button>
        </Link>
      </CardActions>
      <CardActions>
      <Link to="/ViewDetails">
      <Button size="small" color="primary">
          View Details
        </Button>
        </Link>
      </CardActions>
      <CardActions>
      <Link to="/Reservation">
      <Button size="small" color="primary">
          Add to Reservation
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

function HotelGrid() {
  return (
    <div
      style={{
        backgroundImage: `url(https://t4.ftcdn.net/jpg/05/42/73/17/360_F_542731759_13JHh4kxcOPv4RLPSKEMwbM1UowsvVVX.jpg)`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        paddingTop:'100px',
        alignItems: 'center',
        justifyContent: 'center',
        overflow:'auto',
        marginTop:'110rem',
      
      }}
    >
      <Grid container spacing={2}>
        {hotelData.map((hotel) => (
          <Grid item key={hotel.id} xs={12} sm={8} md={4} lg={4}>
            <HotelCard
              name={hotel.name}
              description={hotel.description}
              imageUrl={hotel.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HotelGrid;