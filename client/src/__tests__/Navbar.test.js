
import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../components/layout/Navbar'

     
    it('it renders navbar',()=>{
        const wrapper = shallow(<Navbar/>);
        expect(wrapper).toMatchSnapshot();
        
    });
    

