import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
    padding-top: ${30 + getStatusBarHeight(true)}px;
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height:300px;
    align-items: center;
    padding-top: 25px;
`;

export const Text = styled.Text`

`;

export const Info = styled.View`
    margin-top: 5px;
    margin-left: 0px;
    margin-right: 0px;
    flex-direction: column;
    /* background-color: #DB1914; */

`;

export const Description = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MediumText = styled.Text`
    font-size: 18px;
    font-family:  ${ ({ theme }) => theme.FONTS.MEDIUM};
`;

export const User = styled.Text`
    font-size: 26px;
    font-family:  ${ ({ theme }) => theme.FONTS.BOLD};
`;

export const Stats = styled.View`
    margin-top: 15px;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 70%;
    /* background-color: #000; */

`;

export const Stat = styled.View`
    flex-flow: row;
    margin-right: 2px;
    align-self: center;
    justify-content: center;
    align-items: center;
`;

export const StatCount = styled.Text`
    padding-left: 3px;
    font-size: 16px;
    font-family:  ${ ({ theme }) => theme.FONTS.REGULAR};
`;

export const TextArea = styled.View`
    margin: 10% 5%;
    border-radius: 6px;
    elevation: 3;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 5% 5%;
`;