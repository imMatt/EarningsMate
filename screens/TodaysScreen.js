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
    this.state = {bto:[]}
  }

  componentWillMount(){
    fetch('https://cloud.iexapis.com/beta/stock/market/today-earnings?token=sk_39e8d5f0966347b2ab46b1999d0dd338')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    }).then((json) => {
      this.setState({bto:json.bto});
    })
    .catch((error) => {
      console.error(error);
    });

    this.setState({bto: [{
      "actualEPS": 2.1,
      "consensusEPS": 2.02,
      "estimatedEPS": 2.02,
      "announceTime": "BTO",
      "numberOfEstimates": 14,
      "EPSSurpriseDollar": 0.08,
      "EPSReportDate": "2017-05-02",
      "fiscalPeriod": "Q2 2017",
      "fiscalEndDate": "2017-03-31",
      "yearAgo": 1.67,
      "yearAgoChangePercent": .30,
      "estimatedChangePercent": -.28,
      "symbolId": 11,
      "symbol": "AAPL",
      "headline": "Apple to aquire North Korea in $22b deal"
    },{
      "actualEPS": 2.1,
      "consensusEPS": 2.02,
      "estimatedEPS": 2.02,
      "announceTime": "BTO",
      "numberOfEstimates": 14,
      "EPSSurpriseDollar": 0.08,
      "EPSReportDate": "2017-05-02",
      "fiscalPeriod": "Q2 2017",
      "fiscalEndDate": "2017-03-31",
      "yearAgo": 1.67,
      "yearAgoChangePercent": .30,
      "estimatedChangePercent": .28,
      "symbolId": 11,
      "symbol": "GOOG",
      "headline": "Apple to aquire North Korea in $22b deal"
    },{
      "actualEPS": 2.1,
      "consensusEPS": 2.02,
      "estimatedEPS": 2.02,
      "announceTime": "BTO",
      "numberOfEstimates": 14,
      "EPSSurpriseDollar": 0.08,
      "EPSReportDate": "2017-05-02",
      "fiscalPeriod": "Q2 2017",
      "fiscalEndDate": "2017-03-31",
      "yearAgo": 1.67,
      "yearAgoChangePercent": .30,
      "estimatedChangePercent": -1.28,
      "symbolId": 11,
      "symbol": "FB",
      "headline": "Apple to aquire North Korea in $22b deal"
    },{
      "actualEPS": 2.1,
      "consensusEPS": 2.02,
      "estimatedEPS": 2.02,
      "announceTime": "BTO",
      "numberOfEstimates": 14,
      "EPSSurpriseDollar": 0.08,
      "EPSReportDate": "2017-05-02",
      "fiscalPeriod": "Q2 2017",
      "fiscalEndDate": "2017-03-31",
      "yearAgo": 1.67,
      "yearAgoChangePercent": .30,
      "estimatedChangePercent": .28,
      "symbolId": 11,
      "symbol": "MSFT",
      "headline": "Apple to aquire North Korea in $22b deal"
    },{
      "actualEPS": 2.1,
      "consensusEPS": 2.02,
      "estimatedEPS": 2.02,
      "announceTime": "BTO",
      "numberOfEstimates": 14,
      "EPSSurpriseDollar": 0.08,
      "EPSReportDate": "2017-05-02",
      "fiscalPeriod": "Q2 2017",
      "fiscalEndDate": "2017-03-31",
      "yearAgo": 1.67,
      "yearAgoChangePercent": .30,
      "estimatedChangePercent": .28,
      "symbolId": 11,
      "symbol": "AMZN",
      "headline": "Apple to aquire North Korea in $22b deal"
    }]})
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {(this.state.bto.length == 0 ? <Text style={styles.emptyTitle}>No Earnings Due Today</Text>: null)}

        {
        this.state.bto.map((stock) =>
          <TouchableHighlight key={stock.symbol + "Item"} underlayColor={"#eee"} onPress={() => {
                navigate('StockScreen', {name: 'Jane'})
              }}>

            <StockCard symbol={stock.symbol} quarter={stock.fiscalPeriod} estimatedChangePercent={stock.estimatedChangePercent} imageURL={"https://storage.googleapis.com/iex/api/logos/" + stock.symbol + ".png"}></StockCard>
          </TouchableHighlight>
        )
        }
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
    fontSize: 18,
    color:"#aaa",
    alignSelf:"center"
  }
});
