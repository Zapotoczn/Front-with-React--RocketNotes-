import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const Container = styled.header`
 grid-area: header;

 height: 105px;
 width: 100%;

 border-bottom-width: 1px;
 border-bottom-style: solid;
 border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

 display: flex;
 justify-content: space-between;

 padding: 0 80px;



`;

export const Profile = styled(Link)`
display: flex;
align-items: center;

    > img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
}


`;

export const Logout = styled.button` 
     border: none;
     background: none;

     > svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 36px;
     }
`;