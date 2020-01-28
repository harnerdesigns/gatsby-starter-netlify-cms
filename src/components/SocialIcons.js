import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import styled, { keyframes } from "styled-components"


const SocialIcons = () => {

  return (


    <SocialIconsGrid>
      <a title="twitter" href="https://twitter.com">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>

      <a title="instagram" href="https://instagram.com">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>

      <a title="email" href="https://email.com">
        <FontAwesomeIcon icon='envelope' />
      </a>

    </SocialIconsGrid>
  )

}

export default SocialIcons


const SocialIconsGrid = styled.div`
width: 100%;
display: flex;
align-items; center;
justify-content: center;

a{
  width: 2rem;
  height: 2rem;
  margin: 1.5rem 3rem 0;
  background: rgba(255,255,255,0.8);
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
  border-radius: 3px;
  transition: 100ms;
  svg{
    transition: 100ms;

    transform: rotate(-45deg);
    color: var(--mainColor);

  }

  &:hover{
    background: var(--mainColor);

    svg{
      color: #fff;
    }
  }
}

`