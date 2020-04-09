import React from 'react';
import { Feather } from '@expo/vector-icons';
 import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
 import logoImg from '../../assets/logo.png';
 import * as MailComposer from 'expo-mail-composer'; 
 import{useNavigation } from '@react-navigation/native';

 import styles from './styles';
export default function Detail(){
    const navigation = useNavigation();
    const message = 'ola ajuda';
    function navigateBack(){
        navigation.goBack()
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject:'Hero:teste',
            recipients:['lcspaiva87@gmail.com'],
            body:message,
        })
    }
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone= +55 85989131247&text=${message}`);
    }
    return (
        <View style={styles.container}>
             <View style ={styles.header}>
                <Image source={logoImg} /> 
                <TouchableOpacity onPress={navigateBack} >
                    <Feather  name="arrow-left"  size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={ styles.incident}>
            <Text style={[styles.incidentsProperty,{marginTop:0}]}>ONG:</Text>
                <Text style={styles.incidentsValue}>APAD</Text>

                <Text style={styles.incidentsProperty}>CASO</Text>
                <Text style={styles.incidentsValue}>help leon</Text>

                <Text style={styles.incidentsProperty}>Valor:</Text>
                <Text style={styles.incidentsValue}>R$120,00</Text>
            </View>
            <View style={styles.contacBox}>
                <Text style={styles.heroTitle}>Salve o dia!.</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>


                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}