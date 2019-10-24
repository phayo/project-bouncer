import React from 'react';
import App from './App';

import { render, cleanup, act } from '@testing-library/react';


afterEach(cleanup);


describe('General App tests', () => {
  test('It renders', () => {
    render(<App />);
  });
})
