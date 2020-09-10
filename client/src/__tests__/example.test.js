
import React from 'react'
import { shallow , mount} from 'enzyme'
import Example from '../components/layout/example'

     
    it('it renders Example',()=>{
        const wrapper = shallow(<Example/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('it renders Example element',()=>{
        const wrapper = mount(<Example/>);
        
        expect(wrapper.find('.exampleImage')).toMatchSnapshot();
    });
    
    

