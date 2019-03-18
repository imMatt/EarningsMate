import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Button, TouchableHighlight, RefreshControl} from 'react-native';
import StockCard from '../components/StockCard.js'
import Drilldown from '../components/Drilldown.js'

export default class TodaysScreen extends React.Component {
  static navigationOptions = {
    title: "Earnings Today", headerStyle: {
      backgroundColor: '#f4f4f4',
    },
  };

  constructor(props){
    super(props);
    this.state = {bto:[],amc:[], focusedSymbol:"AMZN", focusOnSymbol:false, refreshing: false}
  }

  componentWillMount(){
    fetch('https://cloud.iexapis.com/beta/stock/market/today-earnings?token=pk_cdd39094382446dcb0ca44b08ba648cd')
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

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetch('https://cloud.iexapis.com/beta/stock/market/today-earnings?token=pk_cdd39094382446dcb0ca44b08ba648cd')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    }).then((json) => {
      this.setState({bto:json.bto,amc:json.amc});
      this.setState({refreshing: false});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Drilldown symbol={this.state.focusedSymbol} visible={this.state.focusOnSymbol}></Drilldown>
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
        />}>

          <Text style={styles.sectionTitle}>Before Market Open</Text>
          {(this.state.bto.length == 0 ? <Text style={styles.emptyTitle}>No Earnings Due Today</Text>: null)}

          {
          this.state.bto.map((stock) =>
            <TouchableHighlight key={stock.symbol + "Item"} underlayColor={"#eee"} onPress={() => {
              this.setState({focusOnSymbol:true, focusedSymbol:stock.symbol});
            }}>

              <StockCard symbol={stock.symbol} quarter={stock.fiscalPeriod} estimatedChangePercent={stock.estimatedChangePercent} imageURL={"https://storage.googleapis.com/iex/api/logos/" + stock.symbol + ".png"}></StockCard>
            </TouchableHighlight>
          )}

          <Text style={styles.sectionTitle}>After Market Close</Text>
          {(this.state.amc.length == 0 ? <Text style={styles.emptyTitle}>No Earnings Due Today</Text>: null)}

          {
          this.state.amc.map((stock) =>
            <TouchableHighlight key={stock.symbol + "Item"} underlayColor={"#eee"} onPress={() => {
                }}>

              <StockCard symbol={stock.symbol} quarter={stock.fiscalPeriod} estimatedChangePercent={stock.estimatedChangePercent} imageURL={"https://storage.googleapis.com/iex/api/logos/" + stock.symbol + ".png"}></StockCard>
            </TouchableHighlight>
          )}
        </ScrollView>
      </View>
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
