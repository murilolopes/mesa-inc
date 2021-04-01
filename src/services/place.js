/* eslint-disable no-unused-vars */
import axios from "axios";
import { resolve } from "core-js/features/promise";

export class Place {
  static details(place_id) {
    return new Promise((resolve) => {
      const request = {
        placeId: place_id,
        fields: ["name", "rating", "reviews", "photos"],
      };
      window.placesService.getDetails(request, (results) => {
        resolve(results);
      });
    });
  }

  static review(place_id, review) {
    return new Promise((resolve) => {
      resolve({
        place_id,
        author_name: review.author_name,
        relative_time_description: "Segundos atrás",
        text: review.text,
      });
    });
  }

  static rating(place_id, rating) {
    return new Promise((resolve) => {
      resolve({ place_id, rating });
    });
  }

  static bookmark(place_id) {
    return new Promise((resolve) => {
      resolve();
    });
  }

  static async nearby({ lat, lng, radius, map }) {
    const requestParams = {
      location: { lat, lng },
      radius,
      type: "restaurant",
    };

    return new Promise((resolve) => {
      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(requestParams, (results) => {
        resolve(
          results.map((place) => {
            const position = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            return {
              name: place.name,
              // open: place.opening_hours.open_now,
              rating: place.rating,
              place_id: place.place_id,
              user_ratings_total: place.user_ratings_total,
              vicinity: place.vicinity,
              position,
            };
          })
        );
      });
    });
  }
}
