import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';


export default function App() {
  let data = [
    { id: 1, name: '🎩' },
    { id: 2, name: '🎩' },
    { id: 3, name: '🎩' },
    { id: 4, name: '🦁' },
    { id: 5, name: '🦁' },
    { id: 6, name: '🦁' },
    { id: 7, name: '🐙' },
    { id: 8, name: '🐙' },
    { id: 9, name: '🐙' },
  ];

  const cardGap = 16;

  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 3;
  const cardHeight = (Dimensions.get('window').height - cardGap * 30) / 4;

  const [count, setCount] = useState(0);
  const [player, setPlayer] = useState('Result');

  const [counters, setCounters] = useState(data);


  function resetAll(){
    setCount(0); setCounters(data) ; setPlayer('Result');
  }

  function checkWinner(){
  if (  (counters[0].name === 'X' &&  counters[1].name === 'X' && counters[2].name === 'X') || (counters[0].name === 'Y' &&  counters[1].name === 'Y' && counters[2].name === 'Y') ||
        (counters[3].name === 'X' &&  counters[4].name === 'X' && counters[5].name === 'X') || (counters[3].name === 'Y' &&  counters[4].name === 'Y' && counters[5].name === 'Y') ||
        (counters[6].name === 'X' &&  counters[7].name === 'X' && counters[8].name === 'X') || (counters[6].name === 'Y' &&  counters[7].name === 'Y' && counters[8].name === 'Y') ||
        
        (counters[0].name === 'X' &&  counters[3].name === 'X' && counters[6].name === 'X') || (counters[0].name === 'Y' &&  counters[3].name === 'Y' && counters[6].name === 'Y') ||
        (counters[1].name === 'X' &&  counters[4].name === 'X' && counters[7].name === 'X') || (counters[1].name === 'Y' &&  counters[4].name === 'Y' && counters[7].name === 'Y') ||
        (counters[2].name === 'X' &&  counters[5].name === 'X' && counters[8].name === 'X') || (counters[2].name === 'Y' &&  counters[5].name === 'Y' && counters[8].name === 'Y') ||
        
        (counters[0].name === 'X' &&  counters[4].name === 'X' && counters[8].name === 'X') || (counters[0].name === 'Y' &&  counters[4].name === 'Y' && counters[8].name === 'Y') ||
        (counters[2].name === 'X' &&  counters[4].name === 'X' && counters[6].name === 'X') || (counters[2].name === 'Y' &&  counters[4].name === 'Y' && counters[6].name === 'Y')
  
  )
    return true;
  else
    return false;
  }

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        if(count%2 == 0) {
            c.name='X';
        }else {
            c.name='Y';
        }
        return c;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);

   // console.log(count);
      if(checkWinner()) {
          if(count%2 == 0) {
            setPlayer('Winner is Player 1');
          }else {
            setPlayer('Winner is Player 2');
          }
          setCount(0); 
          setCounters(data) ;
        } 
        else {
          if(count === 8) { 
            setPlayer("Whooo, it's a Tie");
            setCount(0); 
            setCounters(data);
          }
        }
  }
  return (

    <SafeAreaView style={styles.container}>

    <View style={ styles.container }>
      <Text style={styles.title}>Tic Tac Toe</Text>


      <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'center',}}>
        {counters.map((d, i) => {
          return (
            <TouchableOpacity 
            key={i}
            onPress={() => {
              // handle onPress
              setCount(count + 1);
              handleIncrementClick(i);
            }}>
            <View
              key={i}
              style={{
                marginTop: cardGap,
                marginLeft: i % 3 !== 0 ? cardGap : 0,
                width: cardWidth,
                height: cardHeight,
                backgroundColor: '#fff2dd',
                borderRadius: 16,
                shadowOpacity: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#20232a',
              }}
            >
              <Text style={{fontSize:30, fontStyle:"bold",}}>{d.name}</Text>
            </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <Button onPress={() =>  { resetAll(); }} title="Play Again"/>

      <Text style={styles.title}>{player}</Text>
    
    </View>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});