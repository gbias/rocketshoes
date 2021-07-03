import { connect } from 'react-redux'

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'

import * as Styled from './styles'

function Cart({ cart }) {
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
                <span>R$129,90</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159C1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159C1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <button type="button">
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
          <strong>R$1920,28</strong>
        </Styled.Total>
      </footer>
    </Styled.Container>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Cart)
