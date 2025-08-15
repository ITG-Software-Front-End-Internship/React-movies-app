import { Grid, Rating, Typography } from "@mui/material";
import { TMDB_IMAGE_BASE_URL } from "../../../shared/constants";
import { MovieDetailsAPIResponse } from "../../services/fetchMovieDetails/fetchMovieDetails.stypes";
import { StyledImage } from "./MovieDetailsContent.style";

function MovieDetailsContent({
  movieDetails,
}: {
  movieDetails: MovieDetailsAPIResponse;
}) {
  return (
    <Grid
      container
      spacing={5}
      sx={{
        height: 1,
      }}
    >
      <Grid size={7}>
        <Grid
          container
          spacing={{
            md: 4,
            sm: 2,
          }}
        >
          {/** For header title*/}
          <Grid
            size={{
              md: 8,
              sm: 12,
            }}
          >
            <Typography color="primary" variant="h4" component="h1">
              {movieDetails.title}
            </Typography>
          </Grid>

          {/**For vote */}
          <Grid size={4}>
            <Grid container>
              <Grid size={8}>
                <Rating
                  name="half-rating"
                  defaultValue={movieDetails.vote_average / 2}
                  precision={0.5}
                  readOnly
                  max={5}
                />
              </Grid>
              <Typography variant="h6" component="h4">
                {movieDetails.vote_average} Votes
              </Typography>
            </Grid>
          </Grid>

          {/** Geners */}
          <Grid container size={12}>
            <Grid
              size={{
                md: 3.5,
                xs: 12,
              }}
            >
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Film Certification:
              </Typography>
            </Grid>
            <Grid size={8}>
              <Typography variant="h6" component="span">
                {movieDetails.genres
                  .map((genre) => {
                    return genre.name;
                  })
                  .join(", ")}
              </Typography>
            </Grid>
          </Grid>

          {/**overview */}
          <Grid size={12}>
            <Typography variant="h6" component="span">
              {movieDetails.overview}
            </Typography>
          </Grid>

          {/** Release date */}
          <Grid size={12}>
            <Typography variant="h6" component="span">
              Release Date: {movieDetails.release_date}
            </Typography>
          </Grid>

          {/** Status */}
          <Grid size={12}>
            <Typography variant="h6" component="span">
              Status: {movieDetails.status}
            </Typography>
          </Grid>

          {/** Companies */}
          <Grid size={12}>
            <Typography variant="h6" component="span">
              Companies:{" "}
              {movieDetails.production_companies
                .map((company) => {
                  return company.name;
                })
                .join(",  ")}
            </Typography>
          </Grid>

          {/** production_countries */}
          <Grid size={12}>
            <Typography variant="h6" component="span">
              Countries:
              {movieDetails.production_countries
                .map((country) => {
                  return country.name;
                })
                .join(",  ")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size={{
          sm: 12,
          md: 5,
        }}
      >
        <StyledImage
          src={`${TMDB_IMAGE_BASE_URL}/${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
          loading="lazy"
        />
      </Grid>
    </Grid>
  );
}

export default MovieDetailsContent;
