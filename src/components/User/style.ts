import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5px;
  border-radius: 4px;
  background: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 5px;
  flex-direction: row;
`;

export const Header = styled.ImageBackground`
    width: 100%;
    height: 250px;
    justify-content: flex-end;
    padding: 0 24px 16px;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showsVerticalScrollIndicator: true,
})`
    margin-top: 20px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 26px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    flex-direction: row;
    align-items: center;

    margin-top: 25px;
    margin-left: 20px;
`;