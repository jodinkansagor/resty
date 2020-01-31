import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  it('renders Form', () => {
    const wrapper = shallow(<Form method="method" url="url" userName="username" password="password" bearerToken="bearerToken" textInput="textInput" onChange={()=>{}} onSubmit={()=>{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
