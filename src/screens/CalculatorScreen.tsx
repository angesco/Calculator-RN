import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {

    const calculator = useCalculator();

    return (
        <View style={styles.ctnCalculator}>
            <Text style={styles.partialResult}>{calculator.partialResult === '0' ? null : <>{calculator.partialResult} {calculator.lastOperation.current}</>}</Text>
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {calculator.result}
            </Text>

            <View style={styles.row}>
                <ButtonCalc value='C' background='#9B9B9B' color='bl' action={calculator.clean} />
                <ButtonCalc value='+/-' background='#9B9B9B' color='bl' action={calculator.positiveNegative} />
                <ButtonCalc value='del' background='#9B9B9B' color='bl' action={calculator.deleteLastEntry} />
                <ButtonCalc value='/' background='#FF9427' action={calculator.divisionBtn} />
            </View>
            <View style={styles.row}>
                <ButtonCalc value='7' action={calculator.buildNumber} />
                <ButtonCalc value='8' action={calculator.buildNumber} />
                <ButtonCalc value='9' action={calculator.buildNumber} />
                <ButtonCalc value='x' background='#FF9427' action={calculator.multiplyBtn} />
            </View>
            <View style={styles.row}>
                <ButtonCalc value='4' action={calculator.buildNumber} />
                <ButtonCalc value='5' action={calculator.buildNumber} />
                <ButtonCalc value='6' action={calculator.buildNumber} />
                <ButtonCalc value='-' background='#FF9427' action={calculator.subtractBtn} />
            </View>
            <View style={styles.row}>
                <ButtonCalc value='1' action={calculator.buildNumber} />
                <ButtonCalc value='2' action={calculator.buildNumber} />
                <ButtonCalc value='3' action={calculator.buildNumber} />
                <ButtonCalc value='+' background='#FF9427' action={calculator.addBtn} />
            </View>
            <View style={styles.row}>
                <ButtonCalc value='0' width action={calculator.buildNumber} />
                <ButtonCalc value='.' action={calculator.buildNumber} />
                <ButtonCalc value='=' background='#FF9427' action={calculator.calculate} />
            </View>
        </View>
    )
}
