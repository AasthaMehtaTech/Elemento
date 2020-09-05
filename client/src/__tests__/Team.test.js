
import React from 'react'
import { shallow } from 'enzyme'
import Team from '../components/pages/Team'
import ProfileModal from "../layout/ProfileModal";

     
    it('testing Team page',()=>{
        const wrapper = shallow(<Team/>);
        expect(wrapper).toMatchSnapshot();
        
    });
    

