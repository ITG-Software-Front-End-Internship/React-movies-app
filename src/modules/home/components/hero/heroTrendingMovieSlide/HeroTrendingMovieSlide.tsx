import SlideshowIcon from "@mui/icons-material/Slideshow";
import { TMDB_IMAGE_BASE_URL } from "../../../../shared/constants";
import {
  DarkOverlayContainer,
  StyledTypography,
  StyledWatchNowButton,
  TrendingMovieDetailContainer,
  TrendingMovieSlideContainer,
} from "./HeroTrendingMovieSlide.style";

type TrendingMovieSlide = {
  id: number;
  backdropPath: string;
  title: string;
  voteAverage: number;
  video: boolean;
  releaseDate: string;
};
type HeroTrendingMovieSlideProps = {
  trendingMovieSlide: TrendingMovieSlide;
};

function HeroTrendingMovieSlide({
  trendingMovieSlide,
}: HeroTrendingMovieSlideProps) {
  const backdropPathTrendingMovie = `${TMDB_IMAGE_BASE_URL}/${trendingMovieSlide.backdropPath}`;

  return (
    <>
      <TrendingMovieSlideContainer backdropPath={backdropPathTrendingMovie}>
        <DarkOverlayContainer>
          <TrendingMovieDetailContainer gap={8}>
            <StyledTypography variant="h3" component="h1">
              {trendingMovieSlide.title}
            </StyledTypography>
            <StyledTypography variant="h4" component="span">
              {trendingMovieSlide.releaseDate}
            </StyledTypography>
            <StyledWatchNowButton
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SlideshowIcon />}
            >
              {/**
               *
               * TODO: Magic string !!
               */}
              Watch now !
            </StyledWatchNowButton>
          </TrendingMovieDetailContainer>
        </DarkOverlayContainer>
      </TrendingMovieSlideContainer>
    </>
  );
}

export default HeroTrendingMovieSlide;
