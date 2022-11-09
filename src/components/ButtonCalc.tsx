import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    value: string;
    background?: string;
    color?: 'bl' | 'wh';
    width?: boolean;
    action: (numString: string) => void;
}

export const ButtonCalc = ({ value, background = '#2D2D2D', color = 'wh', width = false, action }: Props) => {
    return (
        <TouchableOpacity onPress={() => action(value)}>
            <View style={[styles.btn, { backgroundColor: background, width: width ? 180 : 80 }]}>
                <Text style={[styles.btnText, { color: color === 'wh' ? 'white' : 'black' }]}>{value}</Text>
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    btn: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    btnText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '400'
    }
});