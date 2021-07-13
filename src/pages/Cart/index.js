import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'

import * as CartActions from '../../store/modules/cart/actions'
import { formatPrice } from '../../util/format'

import * as Styled from './styles'

function Cart({ cart, total, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1)
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1)
  }

  return (
    <Styled.Container>
      <Styled.ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159C1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159C1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159C1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Styled.ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Styled.Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Styled.Total>
      </footer>
    </Styled.Container>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount)
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0)
  )
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
