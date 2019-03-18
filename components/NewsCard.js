import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Button, Linking, TouchableHighlight, WebView } from 'react-native';

const styles = StyleSheet.create({
    newsCard: {
        marginTop:20,
        marginBottom:20,
        paddingRight:20
    },
    headline: {
        fontSize:18,
    },
    picture: { 
        height: 100,
        flex: 1,
        width: null
    },
    related: {
        fontSize:14,
        color:"#333333"
    }   
})

export default class NewsCard extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            newsData:[]
        }
      }
    
      componentWillMount(){
        fetch('https://cloud.iexapis.com/beta/stock/aapl/news?token=pk_cdd39094382446dcb0ca44b08ba648cd')
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        }).then((json) => {
          this.setState({newsData:json});
        })
        .catch((error) => {
          console.error(error);
        });
      }

      render() {
        return (
            <View style={styles.earningsCard}>
                {
                this.state.newsData.map((story) =>
                    <TouchableHighlight key={"story" + story.headline} underlayColor={"#eee"} onPress={() => {
                        Linking.openURL(story.url + "?token=pk_cdd39094382446dcb0ca44b08ba648cd")
                    }}>
                        <View style={styles.newsCard}>
                            <Text style={styles.headline}>{story.headline}</Text>
                            <Image style={styles.picture} source={{uri:story.image + "?token=pk_cdd39094382446dcb0ca44b08ba648cd"}}></Image>
                            <Text>{new Date(story.datetime).toLocaleString()}</Text>
                            <Text style={styles.summary}>{story.summary}</Text>
                            <Text style={styles.related}>Related Stocks: {story.related}</Text>
                        </View>
                    </TouchableHighlight>
                )}
            </View>
        );
    }

}