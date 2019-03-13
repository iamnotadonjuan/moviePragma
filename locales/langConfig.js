import React from 'react'
import { en } from './en'
import { es } from './es'
import { I18nLocalize, i18n } from 'react-native-i18n-localize'

export function initLanguage () {
  try {
    I18nLocalize.initialLanguage({ en, es })
    I18nLocalize.setLanguage('en')
  } catch (error) {
    console.log(error)
  }
}

export function translate (key) {
  try {
    if (key) {
      console.log(i18n)
      return i18n.t(key)
    }
    return i18n.t('translateError')
  } catch (error) {
    console.log(error)
  }  
}
