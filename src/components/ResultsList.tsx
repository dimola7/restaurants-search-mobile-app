import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { IResults } from './types'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({title, results}: IResults) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return <ResultsDetail result={item}/>
        }}
      />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  container: {
    marginBottom: 10,
  }
})