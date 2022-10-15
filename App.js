/*   Author: Pietari Tanner 2022     */

import { View, ImageBackground } from 'react-native';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';
import styles from './style/style'
import { useFonts } from 'expo-font'

export default function App() {

  //Fonts
  const [loaded] = useFonts({
    Karla: require('./assets/Fonts/Karla-VariableFont_wght.ttf'),
    Play: require('./assets/Fonts/PlayfairDisplaySC-Bold.ttf')
  });

  if (!loaded) {
    return null
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.headerImage}
        source={require('./images/dices.jpg')}
        resizeMode="cover">
      </ImageBackground>
      <Header />
      <Gameboard />
      <Footer />
    </View>
  );
}