import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IResultDetails } from './types'

const ResultsDetail = ({result}: IResultDetails) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: result.image_url}} style={styles.imageStyle}/>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>{result.rating} stars, {result.review_count} reviews</Text>
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginVertical: 5,
    },
    nameStyle: {
        fontWeight: 'bold',
    }
})