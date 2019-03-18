import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    earningsCard: {
        marginBottom:15,
        paddingRight:20
    },
    earningsRow: {
        display: "flex",
        flex:1,
        flexDirection: "row",
        justifyContent:"space-between",
        paddingBottom:5
    },
    suprisedTextDown: {
        fontFamily:"monospace",
        fontWeight:"bold",
        color:"#f44242"
    },
    suprisedTextUp: {
        fontFamily:"monospace",
        fontWeight:"bold",
        color:"#008c1e"
    },
    flagText: {
        minWidth:150,
        maxWidth:150,
        textAlign:"center"
    }
})

export default class DividendCard extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            dividendData:[]
        }
      }
    
      componentWillMount(){
        fetch('https://cloud.iexapis.com/beta/stock/aapl/dividends/1y?token=pk_cdd39094382446dcb0ca44b08ba648cd')
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        }).then((json) => {
          this.setState({dividendData:json});
        })
        .catch((error) => {
          console.error(error);
        });
      }

      render() {
        return (
            <View style={styles.earningsCard}>
                {
                this.state.dividendData.map((payment) =>
                    <View key={"div" + payment.exDate} style={styles.earningsRow}>
                        <Text style={styles.exText}>{payment.exDate}</Text>
                        <Text style={styles.flagText}>{payment.flag}</Text>
                        <Text style={styles.amountText}>${payment.amount}</Text>
                    </View>
                )}
            </View>
        );
    }

}