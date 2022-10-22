//Styles
import styled from "styled-components";
import { screen, colors, fontSizes } from "../../styles/globalStyles";

export const Container = styled.div`
  background-color: ${colors.primary};
  display: grid;
  grid-gap: 1.5rem;

  h3 {
    padding-right: 12px;
    font-size: ${fontSizes.size12px};
  }

  time {
    font-size: ${fontSizes.size12px};
    color: ${colors.transparentTertiary};
  }

  .inner-container {
    background-color: ${colors.black};
    border: 1px solid ${colors.cardBorder};
    border-radius: 7px;
  }

  .newswire-img {
    width: 100%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .detail {
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

  .detail-title-time {
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    grid-gap: 0.2rem;
    width: 100%;
  }

  time {
    font-size: ${fontSizes.size12px};
    color: ${colors.transparentTertiary};
  }

  .announcement {
    width: 100%;

    font-size: ${fontSizes.size20px};
    line-height: 1.3;
    font-weight: 600;
  }
`;

export const StyledNewswirePreviewContainer = styled(Container)`
  grid-template-columns: 1fr;
  max-width: 1745px;
  margin-bottom: 2rem;

  .announcement {
    font-size: ${fontSizes.size21px};
  }

  @media ${screen.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.9rem;
  }

  @media ${screen.laptopS} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${screen.laptopXL} {
    h2 {
      font-size: ${fontSizes.size31px};
    }
  }
`;

export const StyledNewswireContainer = styled(Container)`
  display: grid;

  .newswire-img-2 {
    display: none;
  }

  @media ${screen.tablet} {
    grid-gap: 1.9rem;
  }

  .first-newswire {
    border: none;
  }

  ${(props) =>
    !props.firstCard
      ? `
      padding: 2rem;
      max-width: 1920px;
      margin: 0 auto;
      box-sizing: border-box;

      @media ${screen.tablet} {
        padding: 72px;
        grid-gap: 1.9rem;
        grid-template-columns: repeat(2, 1fr);

        .detail{
          padding: 36px 27px;
        }
      }
      @media ${screen.laptopS} {
        padding: 80px;

        grid-template-columns: repeat(3, 1fr);
        .detail{
          padding: 40px 30px;
        }
      }

      @media ${screen.biggestScreen} {
        padding: 88px;       
      }
    `
      : `
      box-sizing: border-box;
      cursor: pointer;

      .announcement{
        font-size: ${fontSizes.size25px}
      }

      .detail{
        padding: 32px;
        box-sizing: border-box;
      }

      @media ${screen.tablet} {
        .first-newswire_img {
          display: none;
        }

        h3, time{
          font-size: 13px;
        }

        .newswire-img-2 {
          display: initial;
          width: 100%;
        }

        .detail{
          padding: 72px 36px;
        }

        .announcement{
          font-size: ${fontSizes.size31px}
        }

      }

      @media ${screen.laptopS} {

        h3, time{
          ${fontSizes.size16px};
        }

        .detail{
          display: grid;
          grid-gap: 1rem;
        }

        .announcement{
          font-size: ${fontSizes.size39px};
        }
      }

      @media ${screen.laptopM} {
        margin-bottom: 20px;

        .first-newswire{
          display: grid;
          grid-template-columns: 70% 1fr;
        }

        .detail{
          display: flex;
          grid-gap: 1rem;
        }
      }

      @media ${screen.laptopXL} {

        margin-bottom: 88px;
        
        .first-newswire{
        grid-template-columns: 65% 1fr;
        }
        
        h3, time{
          ${fontSizes.size18px};
        }

        .announcement{
          font-size: 48.8px;
        }

        .detail{
          padding: 88px;
        }
      
      }

      @media ${screen.biggestScreen} {
        margin-bottom: 40px;

        .first-newswire{
          grid-template-columns: 60% 1fr;
        }
        .detail{
          padding: 176px;
        }
      
      }
    `};
`;
