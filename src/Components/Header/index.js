import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { MdShoppingBasket } from 'react-icons/md'

import * as Styled from './styles'

import logoImg from '../../assets/images/logo.svg'

function Header({ cartSize }) {
  return (
    <Styled.Container>
      <Link to="/">
        <img src={logoImg} alt="Rocketshoes" />
      </Link>

      <Styled.Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Styled.Cart>
    </Styled.Container>
  )
}

const mapStateToProps = (state) => ({
  cartSize: state.cart.length
})

export default connect(mapStateToProps)(Header)
