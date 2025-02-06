import { Link } from "react-router-dom"
import './styles.css'

export const Header = ({ children }) => {
  return(
    <div id='header'>      
      <h2>
        <Link to='/'>Update</Link>         
      </h2>  
      { children }                           
    </div>     
  )  
}
