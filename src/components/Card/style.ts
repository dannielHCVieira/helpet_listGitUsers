import styled from 'styled-components/native';

export const Container = styled.View`
    border-radius: 6px;
    elevation: 3;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
/*     shadow-offset: 1px, 1px;
    shadow-opacity: 0.5;
    shadow-radius: 2px; */
    margin: 4px 6px;
`;

export const CardContent = styled.View`
    margin: 20px 18px;
`;