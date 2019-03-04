import React from 'react'
import {
    View,
    TouchableWithoutFeedback,
    Text,
    FlatList,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function _renderItem(item, props) {
    return (
        <TouchableWithoutFeedback onPress={() => props.detailMovie(item)}>
            <Image style={{ width: 120, height: 180 }} source={{ uri: item.medium_cover_image }} />
        </TouchableWithoutFeedback>
    )
}

function HomeList(props) {
    return (
        <View>
            <View style={{height: 2, backgroundColor:'white'}}/>
            <View style={{paddingBottom: 5}}>
                <FlatList
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                    renderItem={({ item }) => _renderItem(item, props)}
                    data={props.listMovie[0]}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                    renderItem={({ item }) => _renderItem(item, props)}
                    data={props.listMovie[1]}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}
export default HomeList