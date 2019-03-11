import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Button, TouchableHighlight } from 'react-native';
import StockCard from '../components/StockCard.js'

export default class TodaysScreen extends React.Component {
  static navigationOptions = {
    title: "Earnings Today", headerStyle: {
      backgroundColor: '#f4f4f4',
    },
  };

  constructor(props){
    super(props);
    this.state = {bto:[],amc:[]}
  }

  componentWillMount(){
    fetch('https://cloud.iexapis.com/beta/stock/market/today-earnings?token=sk_39e8d5f0966347b2ab46b1999d0dd338')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    }).then((json) => {
      this.setState({bto:json.bto,amc:json.amc});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Before Market Open</Text>
        {(this.state.bto.length == 0 ? <Text style={styles.emptyTitle}>No Earnings Due Today</Text>: null)}

        {
        this.state.bto.map((stock) =>
          <TouchableHighlight key={stock.symbol + "Item"} underlayColor={"#eee"} onPress={() => {
                navigate('StockScreen', {name: 'Jane'})
              }}>

            <StockCard symbol={stock.symbol} quarter={stock.fiscalPeriod} estimatedChangePercent={stock.estimatedChangePercent} imageURL={"https://storage.googleapis.com/iex/api/logos/" + stock.symbol + ".png"}></StockCard>
          </TouchableHighlight>
        )}

        <Text style={styles.sectionTitle}>After Market Close</Text>
        {(this.state.amc.length == 0 ? <Text style={styles.emptyTitle}>No Earnings Due Today</Text>: null)}

        {
        this.state.amc.map((stock) =>
          <TouchableHighlight key={stock.symbol + "Item"} underlayColor={"#eee"} onPress={() => {
                navigate('StockScreen', {name: 'Jane'})
              }}>

            <StockCard symbol={stock.symbol} quarter={stock.fiscalPeriod} estimatedChangePercent={stock.estimatedChangePercent} imageURL={"https://storage.googleapis.com/iex/api/logos/" + stock.symbol + ".png"}></StockCard>
          </TouchableHighlight>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom:20
  },
  emptyTitle: {
    fontSize: 12,
    paddingLeft:20,
    paddingBottom:20,
    color:"#aaa",
  },
  sectionTitle: {
    fontSize:18,
    paddingLeft:20
  }
});
