import React from 'react';
import styled from 'styled-components'

const Header: React.FC = () => {
    
    return (
        <HeaderContainer>
            <div>
                USER MANAGEMENT
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div `
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: #64B6AC;
    
    div {
        color: #fff;
        font-size: 20px;
        margin: 13px;
    }
`
export default Header