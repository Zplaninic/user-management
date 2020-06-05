import React from 'react'
import styled from 'styled-components'

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <div>USER MANAGEMENT</div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    @media (min-width: 1024px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        text-align: left;
    }
    text-align: center;
    background-color: #64b6ac;

    div {
        color: #fff;
        font-size: 20px;
        margin: 13px;
    }
`
export default Header
