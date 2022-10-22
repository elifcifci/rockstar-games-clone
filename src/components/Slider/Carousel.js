const Carousel = ({ constants, isVisibleForTopPage, title }) =>
  constants.map((constant) => {
    return (
      <div
        className={`
        slider-page-container
        ${title === "By Game" && "last-slider-inner-container"}
        `}
        key={constant.id}
        title={constant.title}
      >
        <img
          className={
            title === "By Game" ? "last-slider_image" : "slider-page_image"
          }
          src={constant.link}
        />
        {!isVisibleForTopPage && constant.description && (
          <div className="slider-page_detail">
            <div className="inner-carousel_figcaption">
              {constant.description}
            </div>
            <h2 className="slider-inside-page_title">{constant.title}</h2>
          </div>
        )}
      </div>
    );
  });

export default Carousel;
