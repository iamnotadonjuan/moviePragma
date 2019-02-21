import React from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

function LoaderLayout(props){
    return (
        <View style={styles.container}>
            <Text>Header layaout</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'grey'
    }
})

export default LoaderLayout