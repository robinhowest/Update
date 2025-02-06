import { BiCart } from "react-icons/bi"
import './styles.css'
import { Header } from "../Header"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../../Context/AppContext"

export const Navbar =() => {
  const { cart } = useContext(AppContext);
  console.log("1 log", cart)

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
  console.log("2 log", totalItemsInCart)
  return (
    <nav>
      <Header>
        <div className="wraper">
          <Link to='/cadastro'>Quero me cadastrar</Link>       
          <Link to='/login'>Login</Link>   
          <div className="cart">
            <Link to='/carrinho'><BiCart/>
            {totalItemsInCart > 0 && (
              <span className="cart-quantity">{totalItemsInCart}</span>
            )}
            </Link>
          </div>
        </div>
      </Header>       
    </nav>
  )
}


