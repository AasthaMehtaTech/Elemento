
import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../components/layout/Footer'

     
    it('it renders Footer',()=>{
        const wrapper = shallow(<Footer/>);
        expect(wrapper).toMatchSnapshot();
        
    });
    

