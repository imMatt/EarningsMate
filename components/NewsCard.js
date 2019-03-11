import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Button, Linking, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    newsCard: {
        marginBottom:15,
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
        fontSize:8,
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
        fetch('https://cloud.iexapis.com/beta/stock/aapl/news?token=sk_39e8d5f0966347b2ab46b1999d0dd338')
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
                    <TouchableHighlight underlayColor={"#eee"} onPress={() => {
                        Linking.openURL(story.url)
                    }}>
                        <View style={styles.newsCard}>
                            <Text style={styles.headline}>{story.headline}</Text>
                            <Image style={styles.picture} source={{uri:story.image + "?token=sk_39e8d5f0966347b2ab46b1999d0dd338"}}></Image>
                            <Text>{new Date(story.datetime).toLocaleString()}</Text>
                            <Text style={styles.related}>{story.related}</Text>
                        </View>
                    </TouchableHighlight>
                )}
            </View>
        );
    }

}