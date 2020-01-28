import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'


import styled, { keyframes } from "styled-components"


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
        <Link to="/" title="Logo">
              <h1 style={{ margin: 0, color: "#fff", fontFamily: '"SeattleSans", sans-serif'}}>Sweatshirt Media</h1>
            </Link>
            <h5 style={{color: "#fff", fontWeight: "100"}}>&copy; 2020 Sweatshirt Media</h5>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">

              <SocialIcons>
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </SocialIcons>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer


const SocialIcons = styled.div`
width: 100%;
display: flex;
align-items; center;
justify-content: center;

a{
  width: 2rem;
  height: 2rem;
  margin: 3rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
  line-height: 1em;
  border-radius: 3px;
  img{
    transform: rotate(-45deg);
  }

  &:hover{
    background: var(--mainColor);

    img{
      filter:invert(1);
    }
  }
}

`