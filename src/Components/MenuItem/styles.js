import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { screen, colors, fontSizes } from "../../styles/globalStyles";

export const MenuItemContainer = styled(motion.div)`
  padding: 0;
  background-color: ${colors.black};
  position: fixed;
  grid-row: 2rem;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  grid-gap: 2rem;
  height: 100vh;
  width: 100%;
  z-index: 2;
  padding-top: 70px;
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
    font-size: ${fontSizes.size7};
    width: 100%;
    height: 40px;
    color: ${colors.white};
  }

  .active-page {
    color: ${colors.secondary} !important;
  }

  @media${screen.tablet} {
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

  @media${screen.laptopS} {
    .menu-list {
      padding: 1.5rem 5rem 5rem 5rem;
    }

    .list-link {
      font-size: 31px;
      height: 50px;
      width: 400px;
    }
  }

  @media${screen.laptopL} {
    .list-link {
      height: 55px;
    }
  }

  @media${screen.laptopXL} {
    .menu-list {
      padding: 1.5rem 5.5rem 5.5rem 5.5rem;
    }

    .list-link {
      font-size: 43px;
      height: 75px;
      width: 440px;
    }
  }

  @media${screen.biggestScreen} {
    .list-link {
      font-size: 54px;
      height: 90px;
    }
  }
`;

export const MenuSearchInput = styled(motion.form)`
display: flex;
justify-content: center;
margin: 26px 2rem 5px 2rem;
background-color: ${colors.searchArea};
border-radius: 4px;
box-sizing: border: box;

svg{
  cursor: pointer;
  padding: 16px 1px 16px 22px;
}

.searchArea{
  background-color: ${colors.searchArea};
  color: ${colors.white};
  font-size: ${fontSizes.size4};
  border: none;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;  
  outline: none;
    
  ::placeholder {
    color: ${colors.transparentTertiary};
    font-size: ${fontSizes.size3};
  }
}

  @media${screen.tablet}{
    min-width: 20rem;
    margin: 35px 4.5rem -5px 4.5rem;

    .searchArea{
      padding: 18px;  

      ::placeholder {
        font-size: ${fontSizes.size4};
      }
    }   
    
    svg{
      padding: 15px 0px 15px 6px;
      margin-left: 18px;
    }
  }

  @media${screen.laptopS}{    
    margin: 40px 5rem -10px 5rem;
    .searchArea{
      padding: 20px;  

      ::placeholder {
        font-size: ${fontSizes.size5};
      }
    }   
    
    svg{
      padding: 15px 6px;
      margin-left: 20px;
    }
  }

  @media${screen.laptopL}{    
    .searchArea{
      ::placeholder {
        font-size: ${fontSizes.size6};
      }
    }  

    svg{
      padding: 18px 0px 18px 6px;
    }
  }

  @media${screen.laptopXL} {
    margin: 45px  5.5rem 8px  5.5rem;
  }

  @media${screen.biggestScreen} {
    margin-bottom: 0;
    svg{
      padding: 22px 0px 22px 6px;
    }
  }
`;
