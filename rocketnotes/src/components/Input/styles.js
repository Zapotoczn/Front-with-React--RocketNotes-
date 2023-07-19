import styled from 'styled-components';

export const Container = styled.div`
    width: 100%:
    display: flex;
    flex-direction: row;
    align-items: center;
    

    padding: 2px;

    background-color: ${({ theme })  => theme.COLORS.BACKGROUND_900};
    color:  ${({ theme })  => theme.COLORS.GRAY_300};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56x;
        width: 80%;  
        padding: 12px;
        margin-left: 20px;

        background: transparent;
        color:  ${({ theme })  => theme.COLORS.WHITE};
        border: 0;

        &:placeholder {
             color:  ${({ theme })  => theme.COLORS.GRAY_100};
        }
    }

    > svg {
            margin-left: 10px
        }
`;