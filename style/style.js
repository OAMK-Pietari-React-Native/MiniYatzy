/*   Author: Pietari Tanner 2022     */

import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

/* 
Colors:
Light: #cb8cff
Primary: #955cff
Dark: #5f2dcb
*/

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'black',
    marginLeft: 50,
  },
  headerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    maxHeight: 150,
    marginTop: 20
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  title: {
    fontFamily: 'Play',
    color: '#5f2dcb',
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    fontFamily: 'Karla',
    color: '#955cff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    fontFamily: 'Karla',
    backgroundColor: 'black',
    color: '#cb8cff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    paddingBottom: 10,
  },
  item: {
    margin: 15,
    padding: 5
  },
  flex: {
    flexDirection: "row",
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#955cff",
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Karla',
    color: "black",
    fontSize: 20,
    fontWeight: 'bold'
  },
  rulesIcon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginEnd: 50,
  },
  modal: {
    borderColor: 'black',
    borderWidth: 10
  },
  modalWindow: {
    marginTop: 100,
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 20,
    textColor: "#955cff",
    backgroundColor: '#cb8cff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
  },
  close: {
    marginTop: 50,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalHeader: {
    fontFamily: 'Play',
    fontSize: 30,
    paddingBottom: 30,
    paddingTop: 10,
  },
  modalText: {
    fontSize: 15,
    fontFamily: 'Karla',
    paddingRight: 10,
    paddingLeft: 10,
  }
});
