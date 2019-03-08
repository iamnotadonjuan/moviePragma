import React from 'react'
import SideMenu from 'react-native-side-menu'
import HomeLayout from '../../templates/homeLayout'
import HomeHeader from '../../components/header/homeHeader'
import HomeTendency from './tendency'
import HomeList from './list'
import MenuController from '../../controllers/MenuController'
import { i18n } from 'react-native-i18n-localize'

export default function HomeView(props) {
  const {
    navigation,
    isOpen,
    menu,
    getTwoList,
    detailMovie
  } = props
  return (
    <SideMenu
      navigation={navigation}
      menu={<MenuController isOpen={isOpen} navigation={navigation} />}
      isOpen={isOpen}
    >
      <HomeLayout>
        <HomeHeader navigation={navigation} menu={menu} />
        <HomeTendency title={i18n.t('homeTendency.title')} />
        <HomeList navigation={navigation} listMovie={getTwoList} detailMovie={detailMovie} />
      </HomeLayout>
    </SideMenu>
  )
}