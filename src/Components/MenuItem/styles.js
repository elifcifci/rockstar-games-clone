import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//Styles
import styled from "styled-components";
import { screen, colors, fontSizes } from "../../styles/globalStyles";

export const StyledMenuItemContainer = styled(motion.div)`
  padding: 0;
  background-color: ${colors.black};
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  height: 100vh;
  width: 100%;
  padding-top: 60px;
  z-index: 4;
  box-sizing: border-box;

  .toggle-back-drop {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    z-index: 1;
  }

  .menu-list {
    padding-left: 0;
    margin: 0;
    padding: 0 2rem;
    display: grid;
    grid-row-gap: 1rem;
  }

  .list-item {
    position: relative;
    z-index: 2;
    width: 100%;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .list-link {
    font-size: ${fontSizes.size25px};
    width: 100%;
    height: 40px;
    color: ${colors.white};
  }

  .active-page {
    color: ${colors.secondary} !important;
  }

  @media ${screen.tablet} {
    width: max-content;

    .menu-list {
      padding: 1.5rem 4.5rem 4.5rem 4.5rem;
    }

    .list-link {
      font-size: 28px;
      height: 45px;
      width: 360px;
    }
  }

  @media ${screen.laptopS} {
    .menu-list {
      padding: 1.5rem 5rem 5rem 5rem;
    }

    .list-link {
      font-size: 31px;
      height: 50px;
      width: 400px;
    }
  }

  @media ${screen.laptopL} {
    .list-link {
      height: 55px;
    }
  }

  @media ${screen.laptopXL} {
    .menu-list {
      padding: 1.5rem 5.5rem 5.5rem 5.5rem;
    }

    .list-link {
      font-size: 43px;
      height: 75px;
      width: 440px;
    }
  }

  @media ${screen.biggestScreen} {
    .list-link {
      font-size: 54px;
      height: 90px;
    }
  }
`;

export const StyledMenuSearchInput = styled(motion.form)`
display: flex;
justify-content: center;
margin: 26px 2rem 40px 2rem;
background-color: ${colors.searchArea};
border-radius: 4px;
box-sizing: border: box;
position: relative;
z-index: 4;

svg{
  cursor: pointer;
  padding: 16px 1px 16px 22px;
}

.searchArea{
  background-color: ${colors.searchArea};
  color: ${colors.white};
  font-size: ${fontSizes.size19px};
  border: none;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;  
  outline: none;
    
  ::placeholder {
    color: ${colors.transparentTertiary};
    font-size: ${fontSizes.size16px};
  }
}

  @media ${screen.tablet}{
    min-width: 20rem;
    margin: 35px 4.5rem 25px 4.5rem;

    .searchArea{
      padding: 18px;  

      ::placeholder {
        font-size: ${fontSizes.size19px};
      }
    }   
    
    svg{
      padding: 15px 0px 15px 6px;
      margin-left: 18px;
    }
  }

  @media ${screen.laptopS}{    
    margin: 40px 5rem 25px 5rem;
    .searchArea{
      padding: 20px;  

      ::placeholder {
        font-size: ${fontSizes.size20px};
      }
    }   
    
    svg{
      padding: 15px 6px;
      margin-left: 20px;
    }
  }

  @media ${screen.laptopL}{    
    .searchArea{
      ::placeholder {
        font-size: ${fontSizes.size21px};
      }
    }  

    svg{
      padding: 18px 0px 18px 6px;
    }
  }

  @media ${screen.laptopXL} {
    margin: 45px  5.5rem 25px  5.5rem;
  }

  @media ${screen.biggestScreen} {
    svg{
      padding: 22px 0px 22px 6px;
    }
  }
`;

export const StyledLinks = styled(Link)`
  ${(prop) =>
    prop.isIconVisible &&
    `
  pointer-events: none;
  
  `}
`;

export const navbarMenuConfig = {
  open: {
    display: "initial",
    x: [-770, -1, 0],
    y: 0,
    transition: {
      type: "tween",
      delay: 0.2,
      damping: 30,
    },
  },
  closed: {
    display: "none",
    x: -770,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.2,
    },
  },

  displaying: {
    display: "none",

    transition: {
      type: "tween",
      delay: 0.5,
    },
  },
};
