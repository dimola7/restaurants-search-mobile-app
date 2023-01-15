import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelectedResult } from '../hooks';

const SelectedResultScreen = ({navigation}: any) => {
    const id = navigation.getParam('id');

    const {result} = useSelectedResult(id)

    if(!result) return null

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
            return <Image source={{uri: item}} style={styles.imageStyles}/>
        }}
      />
    </View>
  )
}

export default SelectedResultScreen

const styles = StyleSheet.create({
    imageStyles: {
        height: 200,
        width: 300,
    }
})