import {
    View, Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    source={require('../../assets/favicon.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                    animation="flipInY"
                    delay={400}
                />
            </View>

            <Animatable.View delay={700} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Qualquer hora, qualquer lugar
                    Controle sua carga  </Text>
                <Text style={styles.text}>Faça o login pra começar</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            </Animatable.View>

            


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:2,
        backgroundColor: '#76C9F3'
    },
    containerLogo:{
        flex:1.4,
        backgroundColor: '#76C9F3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex: 1.5,
        backgroundColor: '#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 12
    },
    text:{
        color: '#1F4D64'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#1F4D64',
        borderRadius:50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    buttonText:{
        fontSize:18,
        color:'#fff',
        fontWeight: 'bold'
    }

})