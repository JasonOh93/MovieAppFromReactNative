import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';

export default class SubCatalogList extends Component{

    state={
        data:[]
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <FlatList
                    horizontal={true}
                    data={this.state.data}
                    renderItem={({item})=>{
                        return (
                            <TouchableOpacity
                                activeOpacity={0.9} 
                                style={{paddingLeft:4, paddingRight:4}}
                                onPress={()=>this.props.onPress(item.id)}
                            >
                                <Image style={{width:140, height:200}} source={{uri:item.medium_cover_image}}/>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item, index)=>"Sub"+index}
                ></FlatList>
            </View>
        );
    }

    loadData=()=>{
        fetch(this.props.uri)
        // .then(response=>response.text())
        // .then(resText=>alert(resText))
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movies}))
        ;
    }
    componentDidMount(){
        if(this.props.uri) this.loadData();
    }
}

const styles=StyleSheet.create({
    container:{marginTop:8, marginBottom:8},
    titleContainer:{padding:8},
    title:{fontSize:16, fontWeight:"bold"}
});