import * as S from './Banner.styled.ts';
import { BANNER_IMAGES } from '../../constants/bannerImages';
import { useSlideshow } from '../../hooks/useSlideshow';

export const BannerSlideshow = () => {
  const index = useSlideshow(BANNER_IMAGES.length);

  return (
    <S.SlideWrapper>
      {BANNER_IMAGES.map((img, i) => (
        <S.SlideImage
          key={img.baseName}
          active={i === index}
          src={`${img.baseName}-large.webp`}
          srcSet={`${img.baseName}-small.webp 800w, ${img.baseName}-medium.webp 1280w, ${img.baseName}-large.webp 1920w`}
          sizes='(max-width: 768px) 100vw, 1920px'
          alt={img.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
        />
      ))}
    </S.SlideWrapper>
  );
};
