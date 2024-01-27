import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='contenedor'>
        <div className='tituloContenedor scale-up-horizontal-left'>
        <Link to="/" className='link'><h2>AllStore</h2></Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-basket" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304z" />
  <path d="M17 10l-2 -6" />
  <path d="M7 10l2 -6" />
</svg>
        </div>
        <ul className='nav'>
            <NavLink to={`/`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><li type="none">Home</li></NavLink>
            <NavLink to={`/category/men's clothing`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><li type="none">Ropa Masculina</li></NavLink>
            <NavLink to={`/category/jewelry`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><li type="none">Joyas</li></NavLink>
            <NavLink to={`/category/electronics`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><li type="none">Electronica</li></NavLink>
            <NavLink to={`/category/women's clothing`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><li type="none">Ropa Femenina</li></NavLink>
            <NavLink to={`/cart`} className="link"><li type="none">{<CartWidget/>}</li></NavLink>
        </ul>
    </div>
  )
}

export default NavBar