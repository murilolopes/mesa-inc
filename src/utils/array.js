export const treatPhotos = (photos) => {
  return photos.map(
    (review) =>
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=${review.photo_reference}&key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`
  );
};
export const treatReviews = (reviews) => {
  return reviews.map((review) => {
    return {
      author_name: review.author_name,
      relative_time_description: review.relative_time_description,
      text: review.text,
    };
  });
};
