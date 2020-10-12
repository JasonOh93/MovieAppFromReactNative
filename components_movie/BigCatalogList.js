import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BigCatalog from './BigCatalog';

export default class BigCatalogList extends Component{

    state={
        data:[],
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    // 페이징 되도록 할 것인가?
                    pagingEnabled={true}
                    data={this.state.data}
                    renderItem={(obj)=>{
                        return <BigCatalog onPress={this.props.onPress} movieData={obj.item}></BigCatalog>
                    }}
                    keyExtractor={(item, index)=>{return "Big" + index}}
                ></FlatList>
            </View>
        );
    }//render method

    // 영화정보 json 받아오는 메소드
    loadData=()=>{
        // MovieList로 부터 전달 받은 property uri를 통해
        // json 파싱 및 state.data 설정
        fetch(this.props.uri)
        // .then((response)=>{ return response.text() })
        // .then((resText)=>{return alert(resText)});
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movies}));
    }

    // 화면에 장착되면 발동하는 것
    componentDidMount(){
        if(this.props.uri) this.loadData();
    }

}

const styles=StyleSheet.create({
    container:{height:300, marginBottom:8}
});