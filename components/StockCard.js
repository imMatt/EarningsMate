import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Button } from 'react-native';

const styles = StyleSheet.create({
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

const StockCard = ({ symbol, quarter, estimatedChangePercent, imageURL}) => {
    return (
        <View style={styles.stockCard}>
        <View style={styles.stockCardImageView}>
          <Image style={styles.stockImage} source={{uri:imageURL}}></Image>
        </View>

        <View style={styles.stockCardTextView}>
          <Text style={styles.stockName}>{symbol}</Text>
          <Text style={styles.stockSymbol}>Reporting for {quarter}</Text>

          {(estimatedChangePercent >= 0 ?
          <Text style={styles.stockEstimateUp}>Estimated increase of {estimatedChangePercent}% Year-On-Year</Text>
          :
          <Text style={styles.stockEstimateDown}>Estimated decrease of {Math.abs(estimatedChangePercent)}% Year-On-Year </Text>
          )}
        </View>
      </View>
    );
}



export default StockCard;