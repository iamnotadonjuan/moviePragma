import 'react-native'
import React from 'react'
import App from '../App';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import configureStore from 'redux-mock-store'


const mockStore = configureStore()

configure({ adapter: new Adapter() })
describe('Testing App component', () => {
  it('App renderers', () => {
    const wrapper = shallow(
      <App />
    )
    expect(wrapper).toMatchSnapshot()
  })
})