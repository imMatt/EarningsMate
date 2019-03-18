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
        fontWeight:"bold",
        color:"#f44242"
    },
    suprisedTextUp: {
        fontWeight:"bold",
        color:"#008c1e"
    }
})

export default class earningsCard extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          earningsData:[]
        }
      }
    
      componentWillMount(){
        fetch('https://cloud.iexapis.com/beta/stock/aapl/earnings/4?token=pk_cdd39094382446dcb0ca44b08ba648cd')
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        }).then((json) => {
          this.setState({earningsData:json.earnings});
        })
        .catch((error) => {
          console.error(error);
        });
      }

      render() {
        return (
            <View style={styles.earningsCard}>
                {
                this.state.earningsData.map((report) =>
                    <View key={"report" + report.fiscalPeriod} style={styles.earningsRow}>
                        <Text style={styles.quarterText}>{report.fiscalPeriod}</Text>
                        
                        <Text>Exp. ${report.consensusEPS}</Text>
                        <Text>Act. ${report.actualEPS}</Text>


                        {(report.EPSSurpriseDollar > 0 ? 
                        <Text style={styles.suprisedTextUp}>{(report.EPSSurpriseDollar / report.consensusEPS).toFixed(2)}% Beat</Text>
                        :
                        <Text style={styles.suprisedTextDown}>{Math.abs((report.EPSSurpriseDollar / report.consensusEPS)).toFixed(2)}% Miss</Text>
                        )}
                    </View>
                )}
            </View>
        );
    }

}