import { Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroTrendingMovieSlide from "../heroTrendingMovieSlide/HeroTrendingMovieSlide";
import "./HeroSwiper.module.css";

type TrendingMovies = {
  id: number;
  backdropPath: string;
  title: string;
  voteAverage: number;
  video: boolean;
  releaseDate: string;
};

type HeroSwiperProps = {
  trendingMovies: TrendingMovies[];
};

function HeroSwiper({ trendingMovies }: HeroSwiperProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        virtual={true}
        navigation
        modules={[Navigation, Virtual]}
        className="mySwiper"
        effect="slide"
        speed={1200}
      >
        {trendingMovies.map((movie) => {
          return (
            <SwiperSlide key={movie.id} virtualIndex={movie.id}>
              <HeroTrendingMovieSlide trendingMovieSlide={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default HeroSwiper;
