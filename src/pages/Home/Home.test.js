import React from 'react';
import Home from './Home';
import { render, cleanup, debug } from '@testing-library/react';


afterEach(cleanup);


describe('General Home tests', () => {
  test('It renders', () => {
    render(<Home />);
    // debug()
  });

})
