
import React from 'react';
import { shallow } from 'enzyme';
import Team from '../components/pages/Team';
     
    it('testing Team page',()=>{
        const wrapper = shallow(<Team/>);
        expect(wrapper).toMatchSnapshot();
        
    });
    

