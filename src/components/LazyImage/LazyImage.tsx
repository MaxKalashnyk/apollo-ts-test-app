import React, { memo, useState, useCallback } from 'react';
import { IProps } from './types';
import Preloader from '../Preloader/Preloader';
import { Image } from './styles';

const LazyImage: React.FC<IProps> = ({ imgSrc }) => {
  const [imageLoaded, setImageLoading] = useState<boolean>(false);

  const handleLoad = useCallback(() => setImageLoading(true), []);
  const handleError = useCallback(() => setImageLoading(false), []);

  const ImageToRender = (
    <Image
      alt=""
      src={imgSrc}
      onLoad={handleLoad}
      onError={handleError}
      isHidden={!imageLoaded}
    />
  );

  if (!imageLoaded) {
    return <Preloader>{ImageToRender}</Preloader>;
  }

  return ImageToRender;
};

export default memo(LazyImage);
