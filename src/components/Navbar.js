import React from 'react'
import { Link } from 'gatsby'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import styled from 'styled-components'

import { breakpoints } from "./breakpoints"


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link cover bg="#A29BFE" to="/" className="navbar-item" title="Logo">
              <Logo src={logo} alt="Sweatshirt" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link cover bg="#A29BFE" className="navbar-item" to="/portfolio">
                Portfolio
              </Link>
              <Link cover bg="#A29BFE" className="navbar-item" to="/team">
                Team
              </Link>
              <Link cover bg="#A29BFE" className="navbar-item" to="/about">
                About
              </Link>
              <Link cover bg="#A29BFE" className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar


const Logo = styled.img`

width: 50vw;
filter: invert(1);

@media ${breakpoints.laptop} {

  width: 20vw;

}


`