import React from 'react'
import SideMenu from 'react-native-side-menu'
import HomeLayout from '../../templates/homeLayout'
import HomeHeader from '../../components/header/homeHeader'
import HomeTendency from './tendency'
import HomeList from './list'
import Menu from '../menuView/component/menu'
import { i18n } from 'react-native-i18n-localize'

export default function HomeView(props) {
  const {
    navigation,
    isOpen,
    updateMenu,
    menu,
    getTwoList,
    detailMovie
  } = props
  return (
    <SideMenu
      navigation={navigation}
      menu={<Menu isOpen={isOpen} navigation={navigation} />}
      isOpen={isOpen}
      onChange={(isOpen) => updateMenu(isOpen)}
    >
      <HomeLayout>
        <HomeHeader navigation={navigation} menu={menu} />
        <HomeTendency title={i18n.t('homeTendency.title')} />
        <HomeList navigation={navigation} listMovie={getTwoList()} detailMovie={detailMovie} />
      </HomeLayout>
    </SideMenu>
  )
}