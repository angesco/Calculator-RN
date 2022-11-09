import { useRef, useState } from "react";
import { Operators } from "../enum/Operators";

export const useCalculator = () => {
  
    const [result, setResult] = useState('0');
    const [partialResult, setPartialResult] = useState('0');
    const lastOperation = useRef<Operators>();

    const clean = () => {
        setResult('0');
        setPartialResult('0')
        lastOperation.current = undefined;
    }

    const buildNumber = (numString: string) => {
        if (lastOperation.current && partialResult === '0') return
        if (result.includes('.') && numString === '.') return;
        if (result.startsWith('0') || result.startsWith('-0')) {
            // Punto decimal

            if (numString === '.') {
                setResult(result + numString);
            }
            else if (result.includes('.') && (numString === '0' || numString === '-0')) {
                setResult(result + numString);
            }
            else if (!result.includes('.') && numString !== '0') {
                setResult(numString);
            }
            else if (numString === '0' && !result.includes('.')) {
                setResult(result);
            }
            else {
                setResult(result + numString);
            }
        }
        else {
            setResult(result + numString);
        }
    }

    const positiveNegative = () => {
        if (result.includes('-')) {
            setResult(result.replace('-', ''));
        }
        else {
            setResult('-' + result);
        }
    }

    const deleteLastEntry = () => {
        if (result.length <= 2) {
            if (result.startsWith('-')) {
                return setResult('0');
            }
        }
        if (result.length === 1) {
            return setResult('0');
        }
        setResult(result.substring(0, result.length - 1));
    }

    const changeNumber = () => {
        if (result.endsWith('.')) {
            setPartialResult(result.slice(0, -1))
        } else {
            setPartialResult(result)
        }
        setResult('0');
    }

    const divisionBtn = () => {
        changeNumber();
        lastOperation.current = Operators.division;
    }

    const multiplyBtn = () => {
        changeNumber();
        lastOperation.current = Operators.multiply;
    }

    const subtractBtn = () => {
        changeNumber();
        lastOperation.current = Operators.subtract;
    }

    const addBtn = () => {
        changeNumber();
        lastOperation.current = Operators.add;
    }

    const calculate = () => {
        const num1 = Number(result);
        const num2 = Number(partialResult)
        switch (lastOperation.current) {
            case Operators.add:
                setPartialResult('0')
                return partialResult !== '0'? setResult((num2 + num1).toString()) : result;
            case Operators.subtract:
                setPartialResult('0')
                return partialResult !== '0'? setResult((num2 - num1).toString()) : result;
            case Operators.multiply:
                setPartialResult('0')
                return partialResult !== '0'? setResult((num2 * num1).toString()) : result;
            case Operators.division:
                setPartialResult('0')
                return partialResult !== '0'? setResult((num2 / num1).toString()) : result;
            default:
                break;
        }
    }

    return {
        addBtn,
        buildNumber,
        calculate,
        clean,
        deleteLastEntry,
        divisionBtn,
        lastOperation,
        multiplyBtn,
        partialResult,
        positiveNegative,
        result,
        subtractBtn
    }
}
