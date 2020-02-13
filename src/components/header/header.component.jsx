import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
// import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils.js'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx'
import {selectCurrentUser} from '../../redux/user/user.selectors.js'
import {selectCartHiden} from '../../redux/cart/cart.selectors.js'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles.jsx'
// import './header.styles.scss'

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHiden,
})
export default connect(mapStateToProps)(Header)
