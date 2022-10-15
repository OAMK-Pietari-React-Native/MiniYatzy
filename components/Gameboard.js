/*   Author: Pietari Tanner 2022     */

import React from 'react'
import { Text, View, Pressable, ScrollView, Animated } from 'react-native'
import { useState, useEffect } from 'react'
import style from '../style/style'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Col, Grid } from 'react-native-easy-grid'

const NBR_OF_DICES = 5
const NBR_OF_THROWS = 3
const NBR_OF_POINTS = 7

// Gameboard 
export default function Gameboard() {
  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS)
  const [sum, setSum] = useState(0)
  const [bonus, setBonus] = useState(63)
  const [bonusStatus, setBonusStatus] = useState('')
  const [status, setStatus] = useState('')
  const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false))
  const [selectedPoints, setSelectedPoints] = useState(new Array(NBR_OF_POINTS).fill(false))
  const [board, setBoard] = useState([])

  //Dices variable
  const [DiceOne, setDiceOne] = useState(0)
  const [DiceTwo, setDiceTwo] = useState(0)
  const [DiceThree, setDiceThree] = useState(0)
  const [DiceFour, setDiceFour] = useState(0)
  const [DiceFive, setDiceFive] = useState(0)
  const [DiceSix, setDiceSix] = useState(0)

  //Throw dices and check if player already throw tree times.
  function throwDices() {
    if (nbrOfThrowsLeft === 0) {
      setStatus('Heitit jo kolme kertaa.' + '\n' + 'Valitse nopat sekä pisteet.')
      return
    }
    for (let i = 0; i < NBR_OF_DICES; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * 6 + 1)
        board[i] = 'dice-' + randomNumber + '-outline'
      }
    }
    setNbrOfThrowsLeft(nbrOfThrowsLeft - 1)
    setBoard(board)
    setStatus('Sait seuraavat nopat')
  }

  //Use effect to set status before the game and after the game
  useEffect(() => {
    const point = [...selectedPoints]
    if (point[1] === true && point[2] === true && point[3] === true &&
      point[4] === true && point[5] === true && point[6] === true) {
      setStatus('GAME OVER' + `\n` + 'Voit aloittaa uuden pelin')
      setBoard([])
      setNbrOfThrowsLeft(0)
    }
    if (nbrOfThrowsLeft === NBR_OF_THROWS) {
      setStatus('Voit heittää nopat.')
      setSelectedDices(new Array(NBR_OF_DICES).fill(false))
    } else if (nbrOfThrowsLeft < 0) {
      setNbrOfThrowsLeft(NBR_OF_THROWS - 1)
    }
  }, [nbrOfThrowsLeft])

  //Render dices
  const row = []
  for (let i = 0; i < NBR_OF_DICES; i++) {
    row.push(
      <Grid>
        <Col>
          <Pressable key={'row' + i} onPress={() => selectedDice(i)}>
            <MaterialCommunityIcons
              name={board[i]}
              key={'row' + i}
              size={55}
              color={getDiceColor(i)}
            ></MaterialCommunityIcons>
          </Pressable>
        </Col>
      </Grid>
    )
  }

  //Dices selection and color
  function getDiceColor(i) {
    return selectedDices[i] ? '#5f2dcb' : '#cb8cff'
  }

  function selectedDice(i) {
    let dices = [...selectedDices]
    if (nbrOfThrowsLeft === 3) {
      setStatus('Heitä ennen kuin valitset noppia!')
      return
    } else {
      dices[i] = selectedDices[i] ? false : true
      setSelectedDices(dices)
    }
  }

  //Render points
  const points = []
  for (let i = 1; i < NBR_OF_POINTS; i++) {
    const rows = 'numeric-' + i + '-box-multiple'
    points.push(
      <Grid>
        <Col>
          <Pressable key={'rows' + i} onPress={() => SelectedPoints(i)}>
            <MaterialCommunityIcons
              name={rows}
              key={'rows' + i}
              size={30}
              color={getPointsColor(i)}
            ></MaterialCommunityIcons>
          </Pressable>
        </Col>
      </Grid>
    )
  }

  //Points color
  function getPointsColor(i) {
    return selectedPoints[i] ? '#5f2dcb' : '#cb8cff'
  }

  ////Points selection and checking
  function SelectedPoints(i) {
    const point = [...selectedPoints]
    //Check if it has already been thrown three times
    if (nbrOfThrowsLeft > 0) {
      setStatus('Heitä ensin kaikki kolme heittoa.')
      return
    }
    if (i === 1) {
      //Check if the points have already been selected
      if (point[1] === true && DiceOne > 0) {
        setStatus('Olet jo valinnut nämä pisteet.')
        return
      } else {
        let diceOne = 0
        if (board[0] === 'dice-1-outline' && selectedDices[0]) {
          diceOne += 1
        }
        if (board[1] === 'dice-1-outline' && selectedDices[1]) {
          diceOne += 1
        }
        if (board[2] === 'dice-1-outline' && selectedDices[2]) {
          diceOne += 1
        }
        if (board[3] === 'dice-1-outline' && selectedDices[3]) {
          diceOne += 1
        }
        if (board[4] === 'dice-1-outline' && selectedDices[4]) {
          diceOne += 1
        }
        setDiceOne(diceOne)
        setSelectedDices(new Array(NBR_OF_DICES).fill(false))
        setNbrOfThrowsLeft(3)
        setSum(sum + diceOne)
        setBonus(bonus - diceOne)
      }
    }

    if (i === 2) {
      if (point[2] === true && DiceTwo > 0) {
        setStatus('Olet jo valinnut nämä pisteet.')
        return
      } else {
        let diceTwo = 0
        if (board[0] === 'dice-2-outline' && selectedDices[0]) {
          diceTwo += 2
        }
        if (board[1] === 'dice-2-outline' && selectedDices[1]) {
          diceTwo += 2
        }
        if (board[2] === 'dice-2-outline' && selectedDices[2]) {
          diceTwo += 2
        }
        if (board[3] === 'dice-2-outline' && selectedDices[3]) {
          diceTwo += 2
        }
        if (board[4] === 'dice-2-outline' && selectedDices[4]) {
          diceTwo += 2
        } else {
          setStatus('Ei mitään valintoja')
        }
        setDiceTwo(diceTwo)
        setSelectedDices(new Array(NBR_OF_DICES).fill(false))
        setNbrOfThrowsLeft(3)
        setSum(sum + diceTwo)
        setBonus(bonus - diceTwo)
      }
    }

    if (i === 3) {
      if (point[3] === true && DiceThree > 0) {
        setStatus('Olet jo valinnut nämä pisteet.')
        return
      } else {
        let diceThree = 0
        if (board[0] === 'dice-3-outline' && selectedDices[0]) {
          diceThree += 3
        }
        if (board[1] === 'dice-3-outline' && selectedDices[1]) {
          diceThree += 3
        }
        if (board[2] === 'dice-3-outline' && selectedDices[2]) {
          diceThree += 3
        }
        if (board[3] === 'dice-3-outline' && selectedDices[3]) {
          diceThree += 3
        }
        if (board[4] === 'dice-3-outline' && selectedDices[4]) {
          diceThree += 3
        }
        setDiceThree(diceThree)
        setSelectedDices(new Array(NBR_OF_DICES).fill(false))
        setNbrOfThrowsLeft(3)
        setSum(sum + diceThree)
        setBonus(bonus - diceThree)
      }
    }

    if (i === 4) {
      if (point[4] === true && DiceFour > 0) {
        setStatus('Olet jo valinnut nämä pisteet.')
        return
      } else {
        let diceFour = 0
        if (board[0] === 'dice-4-outline' && selectedDices[0]) {
          diceFour += 4
        }
        if (board[1] === 'dice-4-outline' && selectedDices[1]) {
          diceFour += 4
        }
        if (board[2] === 'dice-4-outline' && selectedDices[2]) {
          diceFour += 4
        }
        if (board[3] === 'dice-4-outline' && selectedDices[3]) {
          diceFour += 4
        }
        if (board[4] === 'dice-4-outline' && selectedDices[4]) {
          diceFour += 4
        }
        setDiceFour(diceFour)
        setSelectedDices(new Array(NBR_OF_DICES).fill(false))
        setNbrOfThrowsLeft(3)
        setSum(sum + diceFour)
        setBonus(bonus - diceFour)
      }
    }

    if (i === 5) {
      if (point[5] === true && DiceFive > 0) {
        setStatus('Olet jo valinnut nämä pisteet.')
        return
      } else {
        let diceFive = 0
        if (board[0] === 'dice-5-outline' && selectedDices[0]) {
          diceFive += 5
        }
        if (board[1] === 'dice-5-outline' && selectedDices[1]) {
          diceFive += 5
        }
        if (board[2] === 'dice-5-outline' && selectedDices[2]) {
          diceFive += 5
        }
        if (board[3] === 'dice-5-outline' && selectedDices[3]) {
          diceFive += 5
        }
        if (board[4] === 'dice-5-outline' && selectedDices[4]) {
          diceFive += 5
        }
        setDiceFive(diceFive)
        setSelectedDices(new Array(NBR_OF_DICES).fill(false))
        setNbrOfThrowsLeft(3)
        setSum(sum + diceFive)
        setBonus(bonus - diceFive)
      }
    }

    if (i === 6) {
      if (point[6] === true && DiceSix > 0) {
        setStatus('Olet jo valinnut nämä pisteet.')
        return
      } else {
        let diceSix = 0
        if (board[0] === 'dice-6-outline' && selectedDices[0]) {
          diceSix += 6
        }
        if (board[1] === 'dice-6-outline' && selectedDices[1]) {
          diceSix += 6
        }
        if (board[2] === 'dice-6-outline' && selectedDices[2]) {
          diceSix += 6
        }
        if (board[3] === 'dice-6-outline' && selectedDices[3]) {
          diceSix += 6
        }
        if (board[4] === 'dice-6-outline' && selectedDices[4]) {
          diceSix += 6
        }
        setDiceSix(diceSix)
        setSelectedDices(new Array(NBR_OF_DICES).fill(false))
        setNbrOfThrowsLeft(3)
        setSum(sum + diceSix)
        setBonus(bonus - diceSix)
      }
    }
    point[i] = selectedPoints[i] ? false : true
    setSelectedPoints(point)
  }
  //Use effect to bonus
  useEffect(() => {
    if (bonus > 0) {
      setBonusStatus('Olet ' + bonus + ' pisteen päässä bonuksesta!')
    } else {
      setBonusStatus('Sait bonuksen! Onneksi olkoon!')
    }
  }, [bonus])

  //Start new game
  function Restart() {
    setNbrOfThrowsLeft(NBR_OF_THROWS)
    setSum(0)
    setBonus(63)
    setStatus('')
    setSelectedDices(new Array(NBR_OF_DICES).fill(false))
    setSelectedPoints(new Array(NBR_OF_POINTS).fill(false))
    setBoard([])
    setDiceOne(0)
    setDiceTwo(0)
    setDiceThree(0)
    setDiceFour(0)
    setDiceFive(0)
    setDiceSix(0)
  }

  //Buttons animation
  const animThrowsButton = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(animThrowsButton, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animThrowsButton, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedThrowStyle = {
    transform: [{ scale: animThrowsButton }]
  };

  const animNewGameButton = new Animated.Value(1);

  const onPressInNew = () => {
    Animated.spring(animNewGameButton, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const onPressOutNew = () => {
    Animated.spring(animNewGameButton, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedNewStyle = {
    transform: [{ scale: animNewGameButton }]
  };

  return (
    <View style={style.gameboard}>
      <ScrollView>
        <Text style={style.gameinfo}>{status}</Text>
        <View style={style.flex}>{row}</View>
        <Pressable style={style.button}
          onPress={() => throwDices()}
          onPressIn={onPressIn}
          onPressOut={onPressOut}>
          <Animated.Text style={[style.buttonText, animatedThrowStyle]} title='Throw dices'>
            Heitä nopat
          </Animated.Text>
        </Pressable>
        <Text style={style.gameinfo}>Heittoja jäljellä: {nbrOfThrowsLeft}</Text>
        <Text style={style.gameinfo}>{bonusStatus}</Text>
        <Text style={style.gameinfo}>Pisteet: {sum}</Text>
        <Grid>
          <Col>
            <Text style={style.gameinfo}>{DiceOne}</Text>
          </Col>
          <Col>
            <Text style={style.gameinfo}>{DiceTwo}</Text>
          </Col>
          <Col>
            <Text style={style.gameinfo}>{DiceThree}</Text>
          </Col>
          <Col>
            <Text style={style.gameinfo}>{DiceFour}</Text>
          </Col>
          <Col>
            <Text style={style.gameinfo}>{DiceFive}</Text>
          </Col>
          <Col>
            <Text style={style.gameinfo}>{DiceSix}</Text>
          </Col>
        </Grid>
        <View style={style.flex}>{points}</View>
        <Pressable style={style.button}
          onPress={() => Restart()}
          onPressIn={onPressInNew}
          onPressOut={onPressOutNew}>
          <Animated.Text style={[style.buttonText, animatedNewStyle]} title='restart'>
            Aloita uusi
          </Animated.Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}