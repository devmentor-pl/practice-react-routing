import React from 'react';
import { useParams } from 'react-router-dom';
import products from './../src/products.json';
import Shop from '../src/components/Shop';
import { Link } from 'react-router-dom';

const Task03 = () => {
  const { category } = useParams();

  const filteredProducts = category
    ? products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <>
      <h1>Task03</h1>
      <nav>
        <ul>
          <li>
            <Link to="/task03">Task03</Link>
          </li>
          <li>
            <Link to="/task03/javascript">JavaScript</Link>
          </li>
          <li>
            <Link to="/task03/react">React</Link>
          </li>
        </ul>
      </nav>
      <Shop products={filteredProducts} />
    </>
  );
};

export default Task03;
