import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import ava from '../../../media/ava.jpg';

class Carousel extends React.PureComponent {
  render() {
    return (
      <StyleRoot>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={1}
          navigation={false}
          enableHeading={false}
          enableScroll
          media={{
            '@media (max-width: 900px)': {
              width: '600px',
              height: '300px',
              background: 'white',
            },
            '@media (min-width: 900px)': {
              width: '960px',
              height: '400px',
              background: 'white',
            },
          }}
        >
          <img src={ava} alt="title or description" />
          <img src={ava} alt="title or description" data-action="http://andyyou.github.io/react-coverflow/" />
          <img src={ava} alt="title or descriptio" data-action="http://andyyou.github.io/react-coverflow/" />
        </Coverflow>
      </StyleRoot>
    );
  }
}

export default Carousel;
