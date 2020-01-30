import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import styled from "styled-components"




const SocialIcons = () => {

  return (


    <SocialIconsGrid>
      <a title="twitter" href="https://twitter.com/mediasweatshirt">
        <FontAwesomeIcon width="16" icon={['fab', 'twitter']} />
      </a>

      <a title="instagram" href="https://www.instagram.com/mediasweatshirt/">
        <FontAwesomeIcon width="16" icon={['fab', 'instagram']} />
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
  padding: 1em;
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: center;


  transition: 100ms;
  svg{
    transition: 100ms;

    color: #fff;
    width: 1.5rem;

  }

  &:hover{

    svg{
      color: var(--mainColor);
    }
  }
}

`