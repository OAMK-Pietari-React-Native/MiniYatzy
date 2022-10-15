/*   Author: Pietari Tanner 2022     */

import React, { useState } from 'react'
import { Text, View, Pressable, Modal } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styles from '../style/style'
import style from '../style/style'

export default function Rules () {
  const [modalVisible, setModalVisible] = useState(false)

  function close () {
    setModalVisible(false)
  }

  return (
    <View style={styles.rulesIcon}>
      <Modal
        style={styles.modal}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={close}
      >
        <View style={styles.modalWindow}>
          <Text style={styles.modalHeader}>MINI YATZY</Text>
          <Text style={styles.modalText}>
            <Text style={{ fontWeight: 'bold' }}>
              Tervetuloa pelamaan Mini Yatzya.{' '}
            </Text>
            {'\n'}
            {'\n'}
            Mini Yatzy eroaa perinteisestä versiosta siten, että tässä pelissä
            yritetään saada vain mahdollisimman monta samaa noppalukua.{'\n'}
            {'\n'}
            <Text style={{ fontWeight: 'bold' }}>Pelin kulku:</Text>
            {'\n'}
            {'\n'}
            1. Aloita peli heittämällä noppia. {'\n'}
            2. Lukitse haluamasi nopat jonka jälkeen voit heittää muut nopat
            uudestaan. Sinun tulee heittää noppia yhteensä kolme kertaa. {'\n'}
            3. Kolmen heiton jälkeen voit valita kyseiselle noppaluvulle saamasi
            pisteet. Voit valita kunkin noppalukua vastaavan luvun vain yhden
            kerran.{'\n'}
            4. Pisteesi lasketaan noppaluku * valitsemiesi noppien lukumäärä.
            {'\n'}
            5. Kun olet valinnut pisteesi voit heittää noppia uudestaan.{'\n'}
            6. Peli loppuun kun kaikki piste valintasi ovat tehty.{'\n'}
            {'\n'}
            Bonus tittelin ansaitset, jos saat pelin aikana pisteitä yli 63.
            {'\n'}
            {'\n'}
            <Text style={{ fontWeight: 'bold' }}>Onnea matkaan!!</Text>
          </Text>
          <Pressable
            onPress={() => {
              setModalVisible(false)
            }}
          >
            <Text style={styles.close}>Close</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable
        onPress={() => {
          setModalVisible(true)
        }}
      >
        <Entypo style={style.info} name='info' size={25} color='#5f2dcb' />
      </Pressable>
    </View>
  )
}
