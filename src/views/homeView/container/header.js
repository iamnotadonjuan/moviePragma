import React from 'react'
import {
    View,
    TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderStyle from './styles/headerStyle'


function Header(props) {
    return (
        <View style={HeaderStyle.container}>
            <TouchableWithoutFeedback onPress={props.menu}>
                <Icon name="bars" color="white" size={25} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigate('Search')}>
                <Icon
                    name="search"
                    color="white"
                    size={25} />
            </TouchableWithoutFeedback>
        </View>
    )
}
export default Header