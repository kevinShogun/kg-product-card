import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductsButtons } from '../.';

const p = {
	id: "1",
	title: "Coffee Mug",
	img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/coffee-mugs-1640187565.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
};


const App = () => {
  return (
    <div>
      <ProductCard
        product={p}
        style={{
          margin: '0 10px',
        }}
        initialValues={{
          count: 5,
          // opcional -> maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductsButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
