import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    stockCard: {
        display: "flex",
        flexDirection: "row",
        marginBottom:15
    }, 
    stockName: {
        fontSize:24, 
        fontWeight:"bold"
    },
    stockSymbol: {
    },
        stockImage: {
        width:40,
        height: 40,
        resizeMode:"contain"
    },
    stockEstimate: {
        margin:5,
        borderRadius:30,
        backgroundColor:"#88dd88"
    },
        stockCardImageView: {
        alignItems: "center",
        justifyContent: "center",
    },
    stockCardTextView: {
        margin:10
    }
})

const StockCard = ({ symbol, name, imageURL, earningsText}) => {
    return (
        <View style={styles.stockCard}>
        <View style={styles.stockCardImageView}>
          <Image style={styles.stockImage} source={{uri:imageURL}}></Image>
        </View>

        <View style={styles.stockCardTextView}>
          <Text style={styles.stockName}>{name}</Text>
          <Text style={styles.stockSymbol}>{symbol}  <Text style={styles.stockEstimate}> {earningsText} </Text></Text>
        </View>
      </View>
    );
}



export default StockCard;