export const getMediaGenres = (genreIds = [], movies) =>
  genreIds.map((c) => movies.genres.find((p) => p.id === c));
