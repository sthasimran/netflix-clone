/*
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./TrendingContent.module.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
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
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
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

*/


"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./TrendingContent.module.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "";
const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING_MOVIES_URL = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL || "https://image.tmdb.org/t/p/original";

const TrendingContent = () => {
  const router = useRouter();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log("Fetching trending movies...");
        const response = await axios.get(TRENDING_MOVIES_URL);
        if (response.data.results) {
          console.log("Movies fetched:", response.data.results);
          setMovies(response.data.results);
        } else {
          setError("No movies found");
        }
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setError("Failed to load trending movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, movies.length - 6)
        : Math.max(0, prevIndex - 1)
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex >= movies.length - 6 ? 0 : prevIndex + 1
    );
  };

  // Navigate to movie description page when a movie is clicked
  const handleMovieClick = (movieId: number) => {
    console.log(`Navigating to movie: ${movieId}`);
    router.push(`/movie/${movieId}`);
  };

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Now</h1>

      {loading ? (
        <p className={styles.loading}>Loading...</p>
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
              <div 
                key={movie.id} 
                className={styles.carouselItem}
                onClick={() => handleMovieClick(movie.id)}
              >
                <div className={styles.imageContainer}>
                  {movie.poster_path ? (
                    <Image
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                      alt={movie.title}
                      width={200}
                      height={300}
                      className={styles.itemImage}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}></div>
                  )}
                </div>
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