import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-Color: #121015;
    padding-left: 30px;
    padding-top: 70px;
    padding-right: 30px;
`

export const Title = styled.Text`
    color: #FFF;
    font-size: 24px;
    font-weight: bold;
`

export const Greetings = styled.Text`
    color: #FFF;
`

export const Input = styled.TextInput`
    background-color: #282730;
    color: #FFF;
    font-size: 18px;
    padding: ${Platform.OS === 'ios' ? '15px' : '9px'};
    margin-top: 30px;
    border-radius: 7px;
`