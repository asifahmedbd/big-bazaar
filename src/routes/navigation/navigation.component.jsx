import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
// import { UserContext } from '../../contexts/user.context';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import {NavigationContainer, NavsLinks, LogoContainer, NavLink} from './navigation.styles.jsx';

const Navigation = ()=> {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen  = useSelector(selectIsCartOpen);
    
    const signOutUser = () => dispatch(signOutStart());

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to="/">
            <CrownLogo className='logo' />
          </LogoContainer>  
          
          <NavsLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                : (
                  <NavLink to='/auth'>
                      SIGN IN
                  </NavLink> 
                )
            }
            <CartIcon />
          </NavsLinks>
          {isCartOpen && <CartDropdown /> }
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  }

export default Navigation;