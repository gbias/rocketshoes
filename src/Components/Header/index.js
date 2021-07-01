import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'

import * as Styled from './styles'

import logoImg from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <Styled.Container>
      <Link to="/">
        <img src={logoImg} alt="Rocketshoes" />
      </Link>

      <Styled.Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Styled.Cart>
    </Styled.Container>
  )
}
