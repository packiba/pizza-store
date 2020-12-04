import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock(props) {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={521}
      viewBox="0 0 280 521"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="132" cy="126" r="127" />
      <rect x="1" y="312" rx="6" ry="6" width="280" height="82" />
      <rect x="123" y="415" rx="22" ry="22" width="152" height="44" />
      <rect x="5" y="270" rx="6" ry="6" width="270" height="25" />
      <rect x="0" y="424" rx="3" ry="3" width="87" height="27" />
    </ContentLoader>
  );
}

export default LoadingBlock;
