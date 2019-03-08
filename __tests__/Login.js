import 'react-native'
import React from 'react'
import LoginController from '../src/controllers/LoginController';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store'
import { initSession } from '../src/flux/actions/loginAction'


const buildStore = configureStore([thunk]);

configure({ adapter: new Adapter() })
describe('Testing Login component', () => {
  it('login renderers', () => {
    const wrapper = shallow(
      <LoginController />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Testing requests', () => {
  let store;
  const initialState = {
    isLogged: false
  }
  beforeEach(() => {
    store = buildStore(initialState);
  });
  it("Init session", async () => {
    const isLogged = false;
    await store.dispatch(initSession({ isLogged }))
    expect(store.getActions()).toMatchSnapshot()
  });
}
)
