import React from 'react';
import Product from './Product';
import { render, cleanup, act } from '@testing-library/react';


afterEach(cleanup);


describe('General Product tests', () => {
  test('It renders', () => {
    render(<Product />);
  });
})
