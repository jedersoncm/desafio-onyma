import React from 'react';
import Header from '../components/Header';
import data from '../helpers/data';
import Body from '../components/Body';

function Home() {
  const infos = data;
  console.log(infos);

  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export default Home;
