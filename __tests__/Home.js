import 'react-native'
import React from 'react'
import { HomeController } from '../src/controllers/HomeController'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import thunk from "redux-thunk"
import configureStore from 'redux-mock-store'
import { listMovie } from '../src/flux/actions/homeAction'


const buildStore = configureStore([thunk])


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
  let store
  const initialState = {
    isLogged: false,
    isOpen: false
  }
  beforeEach(() => {
    store = buildStore(initialState)
  })
  it("List Movie", async () => {
    const limit = '?limit=20'
    const quality = '3D'
    const url = 'list_movies.json'
    await store.dispatch(listMovie({ limit, quality, url }))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('list movies', () => {
    const navigation = { navigate: jest.fn() }
    const data = []
    const wrapper = shallow(<HomeController listMovie ={data} navigation={navigation} />)
    expect(wrapper.instance()._listMovies()).toBeTruthy()
  })
  it('Detail Movie', () => {
    const navigation = { navigate: jest.fn() }
    const wrapper = shallow(<HomeController navigation={navigation} />)
    expect(wrapper.instance().detailMovie()).toMatchSnapshot()
  })
  it('menu is open false', () => {
    const isOpen = false
    const wrapper = shallow(<HomeController isOpen={isOpen} />)
    expect(wrapper.instance().menu()).toBeTruthy()
  })
  it('menu is open true', () => {
    const isOpen = true
    const wrapper = shallow(<HomeController isOpen={isOpen} />)
    expect(wrapper.instance().menu()).toBeTruthy()
  })


}
)
