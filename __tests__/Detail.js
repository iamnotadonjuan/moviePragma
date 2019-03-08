import 'react-native'
import React from 'react'
import DetailController from '../src/controllers/DetailController';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store'
import { initFavorite } from '../src/flux/actions/DetailAction'


const buildStore = configureStore([thunk]);


configure({ adapter: new Adapter() })
describe('Testing Menu component', () => {
    it('Menu renderers', () => {
        const wrapper = shallow(
            <DetailController />
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('Testing requests', () => {
    let store;
    const initialState = {
        star_1: false,
        star_2: false,
        star_3: false,
        star_4: false,
        star_5: false
    }
    beforeEach(() => {
        store = buildStore(initialState);
    });
    it("init favorite", async () => {
        const favorite = [{
            star_1: false,
            star_2: false,
            star_3: false,
            star_4: false,
            star_5: false
        }
        ]
        await store.dispatch(initFavorite({ favorite }))
        expect(store.getActions()).toMatchSnapshot()
    });
    it("save rating", async () => {
        let position = 'star_2'
        let value = true
        let count = 2
        await store.dispatch(initFavorite({ position, value, count }))
        expect(store.getActions()).toMatchSnapshot()
    });
}
)

