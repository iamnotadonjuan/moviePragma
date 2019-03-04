import React from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
  ImageBackground,
  TouchableNativeFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import styles from './styles/detailBodyStyles'
import TextGradient from 'react-native-linear-gradient'


function DetailBody(props) {
  const { params } = props.navigation.state
  const { favorite } = props
  const { goBack } = props.navigation
  const { title, language, large_cover_image, rating, summary, title_long, torrents } = params

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.thumbnail}
        source={{ uri: large_cover_image }}
      >
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => goBack()}>
            <Icon name="angle-left" color="white" size={30} />
          </TouchableWithoutFeedback>
          <TouchableNativeFeedback onPress={() => props.modalDetail(torrents)}>
            <View>
              <Icon
                name="download"
                size={25}
                color="white" />
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.buttonPlay}></View>
        <View>
          <TextGradient colors={['transparent', '#181818', '#181818']}>
            <Text style={[styles.text, styles.titleShow]}>{title}</Text>
          </TextGradient>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={styles.containerDescription}>
          <View style={styles.rating}>
            <View>
              <Text style={styles.textDescription}>Rating: <Text style={styles.textRatign}>{rating}</Text></Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableNativeFeedback onPress={() => props.saveFavorite(['star_1', favorite[0].star_1, 1])}>
                <IonIcons
                  style={{ padding: 5 }}
                  name={favorite[0].star_1 ? 'md-star' : 'md-star-outline'}
                  color="orange"
                  size={40}
                />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => props.saveFavorite(['star_2', favorite[0].star_2, 2])}>
                <IonIcons
                  style={{ padding: 5 }}
                  name={favorite[0].star_2 ? 'md-star' : 'md-star-outline'}
                  color="orange"
                  size={40}
                />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => props.saveFavorite(['star_3', favorite[0].star_3, 3])}>
                <IonIcons
                  style={{ padding: 5 }}
                  name={favorite[0].star_3 ? 'md-star' : 'md-star-outline'}
                  color="orange"
                  size={40}
                />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => props.saveFavorite(['star_4', favorite[0].star_4, 4])}>
                <IonIcons
                  style={{ padding: 5 }}
                  name={favorite[0].star_4 ? 'md-star' : 'md-star-outline'}
                  color="orange"
                  size={40}
                />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => props.saveFavorite(['star_5', favorite[0].star_5, 5])}>
                <IonIcons
                  style={{ padding: 5 }}
                  name={favorite[0].star_5 ? 'md-star' : 'md-star-outline'}
                  color="orange"
                  size={40}
                />
              </TouchableNativeFeedback>
            </View>
          </View>
          <View>
            <Text style={styles.textDescription}>Title long: {title_long}</Text>
          </View>
          <View>
            <Text style={styles.textDescription}>Language: {language}</Text>
          </View>
          <View>
            <Text style={styles.textDescription}>Summary: {summary}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailBody