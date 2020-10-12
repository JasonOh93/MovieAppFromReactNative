import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

// 단순 스타일링 된 TextInput을 만드는 것이므로
// state는 사용할 필요 없음.. 그렇기에.. 간단한 함수형 컴포넌트로 제작
export default InputComponent=(props)=>{
    return(
        <View style={styles.container}>
            <TextInput 
                placeholder={props.placeholder} 
                style={styles.input}
                secureTextEntry={props.secureTextEntry}
                selectionColor="#29292966"
                // 자동 대문자 하겠는지?
                autoCapitalize="none"
                // 자동교정되게 하겠는지?
                autoCorrect={false}
                placeholderTextColor="#C3C2C8"
                onChangeText={props.onChagneText} // 글씨 변경시마다 실행될 메소드 지정 = property로 전달 받은 데이터 지정
            ></TextInput>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:"#D3D3D3",
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginTop:8,
        marginBottom:8
    },
    input:{
        flex:1,
        color:'#292929'
    }
});