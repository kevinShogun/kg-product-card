import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from '../data/products';

describe('ProductImage ', () => {
  test('should successfully display component, with custom image', () => {
    const wrapper = renderer.create(
      <ProductImage className='custom-class' img='https://cdn.thewirecutter.com/wp-content/media/2021/12/favoritemugs-2048px-ikea.jpg?auto=webp&quality=75&width=980&dpr=2'/>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should successfully display component, with custom image by ProdcutCard', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
