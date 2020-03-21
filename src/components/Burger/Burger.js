import React from 'react';
import {bool, func} from 'prop-types';
import { StyledBurger} from './Burger.styled'

function BurgerComponent({open, setOpen}) {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />            
        </StyledBurger>
    )
}

BurgerComponent.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default BurgerComponent;