// Counter.test.tsx
import React from 'react';
import Counter from './Counter';

import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

it('Counter renders correctly', () => {
    const tree = renderer
      .create(<Counter startValue={100}></Counter>)
      .toJSON();
  
    // expect(tree).toMatchSnapshot();

    
  
  });

  test('Counter changes after click', () => {
    const counter = shallow(<Counter startValue={20} />);
  
     expect(counter.find('span').text()).toEqual('20');

     counter.find('button').at(0).simulate('click');

     counter.update(); // force the virtual to re-render
     expect(counter.find('span').text()).toEqual('21');

    // Snapshot demo
  //  expect(counter).toMatchSnapshot();
  });