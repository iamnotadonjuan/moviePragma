import 'react-native'
import React from 'react'
import MenuController from '../src/controllers/MenuController';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store'
import { closeMenu } from '../src/flux/actions/MenuAction'


const buildStore = configureStore([thunk]);


configure({ adapter: new Adapter() })
describe('Testing Menu component', () => {
  it('Menu renderers', () => {
    const wrapper = shallow(
      <MenuController />
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
    it("open menu", async () => {
        let data= true
        await store.dispatch(closeMenu({data}))
        expect(store.getActions()).toMatchSnapshot()
    });
    it("close menu", async () => {
        let data= false
        await store.dispatch(closeMenu({data}))
        expect(store.getActions()).toMatchSnapshot()
    });
  }
  )
