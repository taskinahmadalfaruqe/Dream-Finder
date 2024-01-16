import { Button } from '@nextui-org/react';
import React from 'react';
import Categories from '@/components/Categories';
const HomePage = () => {
  return (
    <div>
      This Is Home Page
      <Button> Remove</Button>
      <Categories></Categories>
    </div>
  );
};
export default HomePage;