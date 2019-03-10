import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Button } from 'react-native';
import StockCard from '../components/StockCard.js'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Earnings Today", headerStyle: {
      backgroundColor: '#f4f4f4',
    },
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StockCard symbol="Yeet" name="Skeet" earningsText="$4.40eps (+10% YOY)" imageURL="https://i.imgur.com/85rLGiz.png"></StockCard>
        <StockCard symbol="Yeet" name="Skeet" earningsText="$4.40eps (+10% YOY)" imageURL="https://i.imgur.com/85rLGiz.png"></StockCard>
        <StockCard symbol="Yeet" name="Skeet" earningsText="$4.40eps (+10% YOY)" imageURL="https://i.imgur.com/85rLGiz.png"></StockCard>
        <StockCard symbol="Yeet" name="Skeet" earningsText="$4.40eps (+10% YOY)" imageURL="https://i.imgur.com/85rLGiz.png"></StockCard>
        <StockCard symbol="Yeet" name="Skeet" earningsText="$4.40eps (+10% YOY)" imageURL="https://i.imgur.com/85rLGiz.png"></StockCard>
        <StockCard symbol="Yeet" name="Skeet" earningsText="$4.40eps (+10% YOY)" imageURL="https://i.imgur.com/85rLGiz.png"></StockCard>
        <StockCard symbol="Yeet" name="Skeet" earningsText="$4.40eps (+10% YOY)" imageURL="https://i.imgur.com/85rLGiz.png"></StockCard>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#fff',
  }
});
