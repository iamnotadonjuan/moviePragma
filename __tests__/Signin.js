import 'react-native'
import React from 'react'
import { SignInController } from '../src/controllers/SignInController'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { saveUserInfo } from '../src/flux/actions/userAction'

const buildStore = configureStore([thunk])

configure({ adapter: new Adapter() })
describe('Testing SignIn component', () => {
  it('SignIn renderers', () => {
    const wrapper = shallow(
      <SignInController />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Testing requests', () => {
  let store
  const initialState = {
    isLogged: false
  }
  beforeEach(() => {
    store = buildStore(initialState)
  })

  it('Init session', async () => {
    const data = { displayName: 'test', email: 'test@test.com', uuid: 1002 }
    await store.dispatch(saveUserInfo(data))
    expect(store.getActions()).toMatchSnapshot()
  })

  /*it('Sign In', async () => {
    const navigation = { navigate: jest.fn() }
    const _saveUserInfo = { _saveUserInfo: jest.fn() }
    const _initSession = { _initSession: jest.fn() }
    const wrapper = shallow(<SignInController navigation={navigation} _saveUserInfo={_saveUserInfo} _initSession={_initSession} />)
    const instance = wrapper.instance()
    const res = await instance.signIn()
    console.log(res)
  })*/
})