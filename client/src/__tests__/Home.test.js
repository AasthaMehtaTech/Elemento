import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/pages/Home';

describe('Testing home page', () => {
   it('renders without crashing', () => {
    shallow(<Home />);
    });
    
});