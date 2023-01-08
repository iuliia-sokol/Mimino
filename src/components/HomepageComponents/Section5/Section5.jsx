// import { useState } from 'react';
import { Box } from 'components/Box';
import Map, { Marker } from 'react-map-gl';
// import MapboxLanguage from '@mapbox/mapbox-gl-language';
import 'mapbox-gl/dist/mapbox-gl.css';

import {
  Section5Wrapper,
  BlockWrapper,
  DataWrapper,
  MapWrapper,
  SubHeader,
  Header,
  LinksList,
  LinksItem,
  ContentWrapper,
  BannerWrapper,
} from './Section5.styled';

// import Pic1_1x from '../../../images/homepage/desktop/main-apartment-design-1x.jpg';
// import Pic1_2x from '../../../images/homepage/desktop/main-apartment-design-2x.jpg';
import { PhoneLink } from 'components/PhoneLink/PhoneLink';
import { LocationBanner } from '../../LocationBanner/LocationBanner';

export const Section5 = () => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAP_API_KEY;
  // const [viewport, setViewport] = useState({
  //   latitude: 49.5992605,
  //   longtitude: 34.5259946,
  //   zoom: 10,
  //   width: '600px',
  //   height: '400px',
  //   style: 'mapbox://styles/avare779/clcnkorgg003m14p2b5n970c6',
  // });
  return (
    <Section5Wrapper>
      <Box
        display="flex"
        flexDirection="column"
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
      >
        <BlockWrapper>
          <DataWrapper>
            <Header>MIMIHO</Header>
            <SubHeader>Amet minim mollit non</SubHeader>
            <ContentWrapper>
              <LinksList>
                <LinksItem>
                  <PhoneLink
                    href="tel:0955559533"
                    abonent="Ресторан"
                    number="095 555 95 33"
                    textColor="dark"
                  />
                </LinksItem>
                <LinksItem>
                  <PhoneLink
                    href="tel:0668491089"
                    abonent="Готель"
                    number="066 849 10 89"
                    number2="067 275 85 40"
                    textColor="dark"
                  />
                </LinksItem>
              </LinksList>
              <BannerWrapper>
                <LocationBanner background="light" />
              </BannerWrapper>
            </ContentWrapper>
          </DataWrapper>
          <MapWrapper style={{ width: 600, height: 400 }}>
            <Map
              initialViewState={{
                latitude: 49.599178222036464,
                longitude: 34.52594915675903,
                zoom: 14,
              }}
              style={{ width: 600, height: 400 }}
              mapStyle="mapbox://styles/mapbox/navigation-night-v1"
              mapboxAccessToken={MAPBOX_TOKEN}
            >
              <Marker
                latitude={49.599178222036464}
                longitude={34.52594915675903}
                color="red"
              />
            </Map>
          </MapWrapper>
        </BlockWrapper>
      </Box>
    </Section5Wrapper>
  );
};
