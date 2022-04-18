import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
    flex: 1; 
    padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
    height: 54px;
    padding: 0 16px;

    font-size: 32px;
    font-family: ${ ({ theme }) => theme.FONTS.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.ImageBackground`
    width: 100%;
    height: 150px;
    justify-content: flex-end;
    padding: 0 24px 16px;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showsVerticalScrollIndicator: true,
})`
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const Form = styled.View`
    flex-direction: row;
    margin-top: 10px;
    padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#939496',
})`
    flex: 1; 
    padding: 12px 15px;
    border-radius: 4px;
    font-size: 16px;
    color: ${ ( {theme}) => theme.COLORS.TEXT};
    background: ${ ( {theme}) => theme.COLORS.WHITE };
    border: 2px solid ${props => (props.error ? ({theme}) => theme.COLORS.RED : ({theme}) => theme.COLORS.BLACK )}
`; 

export const Submit = styled.TouchableOpacity`
    background: ${ ( {theme}) => theme.COLORS.PRIMARY };
    justify-content: center;
    border-radius: 4px;
    padding: 0 12px;
    margin: 0 2px;
`;