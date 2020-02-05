import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import CustomButtom from '../custom-button/custom-button.component.jsx'
import CartItem from '../cart-item/cart-item.component.jsx'
import {selectCartItems} from '../../redux/cart/cart.selectors.js'
import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">your cart is empty</span>
      )}
    </div>
    <CustomButtom onClick={() => history.push('/checkout')}>
      GO TO CHECKOUT
    </CustomButtom>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
