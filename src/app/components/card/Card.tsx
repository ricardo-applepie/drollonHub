import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';

import CardContent from '@mui/material/CardContent';

interface CardInnerProps {
  text: string;
  iconIndex: number;
  className?: string;
};

const currentIcon = ( iconIndex: number ) => {
  switch (iconIndex) {
    case 0:
      return <HomeIcon />
    case 1:
      return <ApartmentIcon />  
    case 2:
      return <LanguageIcon />
    case 3:
      return <PublicIcon />    
  }
};

const CardInner = ({ text, iconIndex } : CardInnerProps) => (
  <React.Fragment>
    <CardContent>
      <h4 className="text-center font-bold text-2xl">
        <div >
         {currentIcon(iconIndex)}
        </div>
        {text}
        <br />
      </h4>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard({ text, iconIndex, className } : CardInnerProps) {
  return (
    <Box sx={{ minWidth: 275 }} className={className}>
      <Card 
        variant="outlined"
      >
        <CardInner 
          text={text} 
          iconIndex={iconIndex}
        />
      </Card>
    </Box>
  );
}