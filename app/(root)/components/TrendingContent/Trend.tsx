"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./TrendingContent.module.css";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
}

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || ""; // Access API key from .env
const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING_MOVIES_URL = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL || "https://image.tmdb.org/t/p/original";
console.log(IMAGE_BASE_URL)

const TrendingContent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(TRENDING_MOVIES_URL);
        if (response.data.results) {
          setMovies(response.data.results);
        }
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, movies.length - 6)
        : Math.max(0, prevIndex - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= movies.length - 6 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Now</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.carouselContainer}>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={handlePrevious}
            aria-label="Previous items"
          >
            &lt;
          </button>

          <div className={styles.carousel}>
            {movies.slice(currentIndex, currentIndex + 6).map((movie) => (
              <div key={movie.id} className={styles.carouselItem}>
                <Image
                  src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} 
                  alt={movie.title}
                  width={200}
                  height={300}
                  className={styles.itemImage}
                />
                <div className={styles.itemTitle}>{movie.title}</div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={handleNext}
            aria-label="Next items"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default TrendingContent;