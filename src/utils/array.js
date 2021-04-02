export const treatPhotos = (photos) => {
  return photos.map((photo) => photo.getUrl({ maxWidth: 450, maxHeight: 450 }));
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
