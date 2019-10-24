import React from 'react';
import Cart from './Cart';
import { render, cleanup, act } from '@testing-library/react';


afterEach(cleanup);


describe('General Cart tests', () => {
  test('It renders', () => {
    render(<Cart />);
  });
})
