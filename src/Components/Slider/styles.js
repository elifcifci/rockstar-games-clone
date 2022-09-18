import { motion } from "framer-motion";
import styled from "styled-components";
import { screen, fontSizes, colors } from "../../Styles/globalStyles";

export const SliderContainer = styled.div`
  .inside-carousel-container {
    max-width: 1920px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  @media${screen.tablet} {
    .inside-carousel-container {
      padding: 4.5rem 0;
    }
  }

  @media${screen.laptopS} {
    .inside-carousel-container {
      padding: 5rem 0;
    }
  }

  @media${screen.laptopM} {
    .top-carousel-container {
      display: grid;
      grid-template-columns: 70% 1fr;
    }

    .detail-and-buttons-container {
      padding: 40px;
      display: grid;
      row-gap: 2rem;
    }
  }

  @media${screen.laptopL} {
    .detail-and-buttons-container {
      padding: 80px 40px;
    }
  }

  @media${screen.laptopXL} {
    .detail-and-buttons-container {
      padding: 88px;
    }

    .inside-carousel-container {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media${screen.biggestScreen} {
    .top-carousel-container {
      grid-template-columns: 60% 1fr;
    }

    .detail-and-buttons-container {
      padding: 170px;
    }

    .inside-carousel-container {
      padding: 5.5rem 0;
    }
  }
`;

export const Carousel = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DetailContainer = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  padding-bottom: calc(2rem - 10px);
  display: grid;
  grid-gap: 2rem;

  .inner_figcaption {
    font-size: ${fontSizes.size2};
    font-weight: bold;
  }

  .slider-figcaption {
    display: grid;
    grid-gap: 0.5rem;
  }

  h2 {
    font-size: ${fontSizes.size8};
  }

  .slider-page_title {
    margin: 0;
  }

  @media${screen.mobileXL} {
    display: flex;
    align-items: flex-start;
    grid-gap: 2rem;
    justify-content: space-between;
  }

  @media${screen.tablet} {
    padding: 72px 36px;
  }

  @media${screen.laptopM} {
    flex-direction: column;
  }

  @media ${screen.laptopS} {
    padding: 40px 40px 60px 40px;

    h2 {
      font-size: ${fontSizes.size9};
    }

    .inner_figcaption {
      font-size: ${fontSizes.size3};
    }
  }

  @media${screen.laptopM} {
    padding: 0;
    justify-content: initial;
  }

  @media${screen.laptopXL} {
    h2 {
      font-size: ${fontSizes.size11};
    }
  }

  @media${screen.biggestScreen} {
    h2 {
      font-size: ${fontSizes.size12};
    }

    .inner_figcaption {
      font-size: ${fontSizes.size6};
    }
  }
`;

export const Container = styled.div`
  border: solid 9px red;
`;

//SliderButtons styles
export const ButtonContainer = styled(motion.div)`
  padding: 0;
  display: flex;
  padding: 0 2rem;
  box-sizing: border-box;

  .button-label {
    height: 20px;
    cursor: pointer;
    width: 1.5rem;
    margin-right: 8px;
  }

  .slider_button {
    display: inline-block;
    background-color: ${colors.inactive};
    margin-right: 8px;
    height: 2px;
    width: 1.5rem;
    border-radius: 2px;
    outline: none;
  }

  .active-slider_button {
    background-color: white;
  }

  @media${screen.tablet} {
    margin-bottom: 4rem;

    .button-label {
      height: 30px;
      width: 4.6rem;
    }

    .slider_button {
      margin-right: 10px;
      height: 4px;
      width: 4.6rem;
    }
  }

  @media${screen.laptopM} {
    margin: 0;
    padding: 0;
  }

  @media${screen.laptopXL} {
    align-items: flex-end;

    .button-label {
      width: 5.5rem;
    }

    .slider_button {
      width: 5.5rem;
    }
  }
`;
//SliderButtons styles end

//SliderContent styles start
export const Content = styled(motion.div)`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  padding: 0rem 2rem 1.5rem 2rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;
  width: 100%;

  .slider-header_title {
    font-size: ${fontSizes.size5};
    font-weight: bold;
    margin: 0;
  }

  .arrow-container {
    display: grid;
    grid-gap: 1.5rem;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .slider-arrow {
    width: 13px;
    fill: white;
  }

  .slider-disabled-arrow {
    fill: ${colors.inactive};
  }

  @media${screen.tablet} {
    padding: 0rem 4.5rem 1.7rem 4.5rem;

    .slider-header_title {
      font-size: ${fontSizes.size6};
    }
  }

  @media${screen.laptopS} {
    padding: 0rem 5rem 1.9rem 5rem;

    .slider-header_title {
      font-size: ${fontSizes.size7};
    }
  }

  @media${screen.laptopXL} {
    padding: 0 0 1.9rem 0;
  }
`;

export const InnerCarouselContainer = styled.div`
  .motion-container {
    display: flex;
    width: 100%;
    grid-gap: 2rem;
  }

  .slider-inside-page-container {
    width: 100%;
    padding: 0 2rem;
    box-sizing: border-box;
    margin-left: -10px;
  }

  .slider-page_image {
    width: 100%;
  }

  .slider-page-container {
    margin: 0;
    min-width: 100%;
  }

  @media${screen.mobileM} {
    .slider-page_detail {
      height: auto;
    }
  }

  ${(props) =>
    props.visibleForTopPage === false &&
    `
    
  .slider-page-container{
    margin: 0;
    border-radius: 10px;
    border: 1px solid ${colors.gray};
    background-color: ${colors.black};
  }
  
  .slider-page_image{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-bottom: 0;
  }

  .slider-page_detail {
    padding: 24px;
  }

  .inner-carousel_figcaption{
    font-size: ${fontSizes.size2};
    font-weight: bold;
  }
  
  .slider-inside-page_title{
    font-size: ${fontSizes.size3};
    margin: 5px 0 0 0;
  }

  .last-slider_image{
    border-radius: 10px;
    width: 100%;
   }

   .last-slider-inner-container{
    border: 1px solid ${colors.black};
   }

   @media${screen.tablet}{
    margin: 0 72px;
    display: grid;
    grid-gap: 1.5rem;

    .slider-inside-page-container {
      padding: 0;
      width: 45%;
      box-sizing: border-box;
      margin-left: 0px;
    }

    .slider-page_detail {
      padding: 27px; 
    }

    .inner-carousel_figcaption{
      font-size: 15px;
     }

     .slider-inside-page_title{
       font-size: 18px;
     }
   }

   @media${screen.laptopS}{
     .inner-carousel_figcaption{
       font-size: ${fontSizes.size3};
      }

      .slider-inside-page_title{
        font-size: ${fontSizes.size5};
      }

      .slider-inside-page-container {
        width: 47%;
      }
  
      .slider-page_detail {
        padding: 30px; 
      }
    }

    @media${screen.laptopL}{
      grid-gap: 1.5rem;
      margin: 0 80px;
      
      .slider-inside-page-container {
        width: 32%;
      }
    } 

    @media${screen.laptopXL}{
      margin: 0;

      .slider-inside-page-container {
        width: calc(25% - 20px);
      }

      .last-slider_image{
         width: 100%;
      }    
    }
  `}
`;
//SliderContent styles end
