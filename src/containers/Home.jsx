import React from 'react';
import { connect } from 'react-redux';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Search from '../components/Search';
import '../assets/styles/Home.scss';

const Home = ({ myList, trends, originals }) => (
  <>
    <Search />
    <Categories title="Mi lista">
      <Carousel>
        {myList.map(item =>
          <CarouselItem {...item} isList />
        )}
      </Carousel>
    </Categories>
    <Categories title="Tendencias">
      <Carousel>
        {trends.map(item =>
          <CarouselItem key={item.id} {...item} />
        )}
      </Carousel>
    </Categories>
    <Categories title="Originales de Platfix">
      <Carousel>
        {originals.map(item =>
          <CarouselItem key={item.id} {...item} />
        )}
      </Carousel>
    </Categories>
  </>
);

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(mapStateToProps, null)(Home);