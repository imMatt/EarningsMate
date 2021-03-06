import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Button } from 'react-native';
import EarningsCard from './EarningsCard.js';
import DividendsCard from './DividendCard.js';
import NewsCard from './NewsCard.js';
import Modal from "react-native-modal";

const styles = StyleSheet.create({
  lowerContainer: {
    paddingLeft:20
  },
  header: {
    fontSize:18,
    fontWeight:"bold"
  },  
  stockCard: {
      display: "flex",
      flexDirection: "row",
      marginBottom:15,
      paddingLeft:20
  }, 
  stockName: {
      fontSize:24, 
      fontWeight:"bold"
  },
  stockSymbol: {
  },
  stockImage: {
      width:50,
      height: 50,
      resizeMode:"contain",
  },
  stockEstimateUp: {
      alignSelf:"flex-end",
      color:"#008c1e"
  },
  stockEstimateDown: {
      alignSelf:"flex-end",
      color:"#f44242"
  },
  stockCardImageView: {
      alignItems: "center",
      justifyContent: "center",
  },
  stockCardTextView: {
      margin:10
  }
})

export default class DrilldownModal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      symbol:this.props.symbol,
      estimatedChangePercent:4,
      quarter:"Q2 2017",    
      modalOpen:false
    }
  }

  componentWillReceiveProps(props){
    this.setState({
        symbol:this.props.symbol,
        estimatedChangePercent:4,
        quarter:"Q2 2017",    
        modalOpen:props.visible
    });
  }

  render() {
    return (
        <Modal backdropOpacity={1} backdropColor="white" isVisible={this.state.modalOpen} onBackButtonPress={() => {this.setState({modalOpen:false})}}>
            <ScrollView>
                <View style={styles.stockCard}>
                    <View style={styles.stockCardImageView}>
                    <Image style={styles.stockImage} source={{uri:"https://storage.googleapis.com/iex/api/logos/" + this.state.symbol + ".png"}}></Image>
                    </View>

                    <View style={styles.stockCardTextView}>
                    <Text style={styles.stockName}>{this.state.symbol}</Text>
                    <Text style={styles.stockSymbol}>Reporting for {this.state.quarter}</Text>

                    {(this.state.estimatedChangePercent >= 0 ?
                    <Text style={styles.stockEstimateUp}>Estimated increase of {this.state.estimatedChangePercent}% Year-On-Year</Text>
                    :
                    <Text style={styles.stockEstimateDown}>Estimated decrease of {Math.abs(this.state.estimatedChangePercent)}% Year-On-Year </Text>
                    )}
                    </View>
                </View>
                
                <View style={styles.lowerContainer}>
                    <Text style={styles.header}>Past Earnings</Text>
                    <EarningsCard></EarningsCard>

                    <Text style={styles.header}>Dividends</Text>
                    <DividendsCard></DividendsCard>
                    
                    <Text style={styles.header}>Latest News</Text>
                    <NewsCard></NewsCard>
                </View>
            </ScrollView>
        </Modal>
    )
  }
}
