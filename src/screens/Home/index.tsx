import React, { useState } from 'react';
import { FlatList, View, TextInput, Alert } from 'react-native';
import Header from '../../components/Header';
import Participant from '../../components/Participant';
import ButtonDefault from '../../components/ButtonDefault';
import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>(['João']);
  const [participantName, setParticipantName] = useState<string>('');

  function handleParticipantRemove(item: string) {
    Alert.alert('Remover', `Deseja remover o participante ${item}?`, [
      {
        text: `Sim`,
        onPress: () => {
          Alert.alert('Participante deletado!')
          setParticipants(participants.filter(participant => participant !== item));
        }
      },
      {
        text: `Cancelar`,
        style: 'cancel',
      },
    ]);
    ;
  };

  function handleParticipantAdd () {
    if (participants.includes(participantName)) {
      return
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  return (
    <View>
      <Header />
      <View style={styles.containerAdd}>
        <TextInput 
          style={styles.textAddInput} 
          placeholder="Nome do participante" 
          onChangeText={text => setParticipantName(text)}
          value={participantName}
        />
        <ButtonDefault onAddPress={handleParticipantAdd} />
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
            name={item}
            key={item}
            onRemove={() => handleParticipantRemove(item)}
          />         
        )}
      >
      </FlatList>
    </View>
  );
}
