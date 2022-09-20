import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    return (
    <header>
        <div className="header_container">
            <div className="header_logo">
                <Link to="/">Turismo<span> Real</span></Link>
            </div>
            <nav className="header_menu">
<<<<<<< HEAD
                <div className="header_menu_item">
                    <NavLink to="/departamentos" className={ ({isActive}) => `header_menu_link ${ isActive ? 'link_active' : undefined}` } >
                        Departamentos
                    </NavLink>
                </div>
                <div className="header_menu_item">
                    <NavLink to="/tours" className={ ({isActive}) => `header_menu_link ${ isActive ? 'link_active' : undefined}` } >
                        Tours
                    </NavLink>
                </div>
                <div className="header_menu_item">
                    <NavLink to="/contactanos" className={ ({isActive}) => `header_menu_link ${ isActive ? 'link_active' : undefined}` } >
                        Contáctanos
                    </NavLink>
                </div>
                <div className="header_menu_item">
                    <NavLink to="/nosotros" className={ ({isActive}) => `header_menu_link ${ isActive ? 'link_active' : undefined}` } >
=======
                <div className="">
                    <NavLink to="/departamentos" className={ ({isActive}) => `header_menu_item header_menu_link ${ isActive ? 'link_active' : undefined}` } >
                        Departamentos
                    </NavLink>
                </div>
                <div className="">
                    <NavLink to="/tours" className={ ({isActive}) => `header_menu_item header_menu_link ${ isActive ? 'link_active' : undefined}` } >
                        Tours
                    </NavLink>
                </div>
                <div className="">
                    <NavLink to="/contactanos" className={ ({isActive}) => `header_menu_item header_menu_link ${ isActive ? 'link_active' : undefined}` } >
                        Contáctanos
                    </NavLink>
                </div>
                <div className="">
                    <NavLink to="/nosotros" className={ ({isActive}) => `header_menu_item header_menu_link ${ isActive ? 'link_active' : undefined}` } >
>>>>>>> 262624868e05fa57347e724b32200ed4f68f5519
                        Nosotros
                    </NavLink>
                </div>
                
            </nav>
            <div className="header_login">
                <div className="btn_cliente">Soy Cliente</div>
            </div>
        </div>
    </header>
    )
}
