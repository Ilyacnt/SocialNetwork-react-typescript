import React, { FC } from 'react';
import Button, { ButtonVariant } from '../../../ui/button/Button';
import '../../../App.scss';

const Home:FC = () => {
  return <div>
      <h1>Home</h1>
      <Button onClick={() => {console.log('Home clicked')}}>Добавить в друзья</Button>
      <br />
      <Button onClick={() => {console.log('Home clicked')}} variant={ButtonVariant.emerald}>Добавить в друзья</Button>
      <br />
      <Button onClick={() => {console.log('Home clicked')}} variant={ButtonVariant.amaranth}>Добавить в друзья</Button>
      </div>;
};

export default Home;
