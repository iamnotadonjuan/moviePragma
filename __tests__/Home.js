import 'react-native'
import React from 'react'
import HomeController from '../src/controllers/HomeController';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store'
import { listMovie } from '../src/flux/actions/homeAction'


const buildStore = configureStore([thunk]);


configure({ adapter: new Adapter() })
describe('Testing Home component', () => {
  it('Home renderers', () => {
    const wrapper = shallow(
      <HomeController />
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
  it("List Movie", async () => {
    const limit = '?limit=20'
    const quality = '3D'
    const url = 'list_movies.json'
    await store.dispatch(listMovie({ limit, quality, url }))
    expect(store.getActions()).toMatchSnapshot()
  });
}
)