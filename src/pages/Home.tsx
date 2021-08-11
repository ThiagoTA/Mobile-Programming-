import React, { useState } from 'react';
import {
     View, 
     Text, 
     StyleSheet,
     TextInput,
     Platform,
     TouchableOpacity,
     ScrollView
    } from 'react-native';

interface ISkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<ISkillData[]>([])

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills([...mySkills, data])
    setNewSkill('')

  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo, Thiago Teixeira</Text>

      <TextInput 
      style={styles.input}
      placeholder="New Skill"
      placeholderTextColor='#555555'
      value={newSkill}
      onChangeText={value => setNewSkill(value)}
        />

      <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.5}
          onPress={handleAddNewSkill}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>  

      <Text style={[styles.title, { marginVertical: 20 }]}>
        My Skills
      </Text>
      
      <ScrollView>
      {
        mySkills.map(skill => (
          <TouchableOpacity key={skill.id} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill.name}</Text>
        </TouchableOpacity>
        ))
      }
      </ScrollView>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#282730',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 9,
        marginTop: 30,
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold'
    },
    buttonSkill: {
      backgroundColor: '#1f1e25',
      padding: 15,
      borderRadius: 20,
      alignItems: 'center',
      marginBottom: 15
    },
    textSkill: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold'
    }
})


