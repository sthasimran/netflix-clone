// Not use ---- demo
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

const IMAGE_BASE_URL= "https://image.tmdb.org/t/p/original";
const BASE_URL = "https://api.tmdb.org/t/p/original";
const TRENDING_MOVIES_URL = `${BASE_URL}/trending/movie/week?api_key=5adf1b0f22caf0a554215e8b21631f6a`;

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
            {movies.slice(currentIndex, currentIndex + 6).map((movie) => {
              const imageURL = "${IMAGE_BASE_URL}${poster_path}"
              return (
                <div key={movie.id} className={styles.carouselItem}>
                  <Image
                    src={imageURL}
                    alt={movie.title}
                    width={200}
                    height={300}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemTitle}>{movie.title}</div>
                </div>
              );
            })}
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

/*
"use client"

import React, { useState } from "react";
import Image from "next/image";
import styles from "./TrendingContent.module.css";

interface TrendingItem {
    id: number;
    title: string;
    imageUrl: string;
    type: string; 
}

const trendingData: TrendingItem[] = [
  {
    id: 1,
    title: 'Squid Game',
    imageUrl: '/images/squid.jpeg',
    type: 'series',
  },
  {
    id: 2,
    title: 'Disney Encato',
    imageUrl: '/images/disney.jpeg',
    type: 'series',
  },
  {
    id: 3,
    title: 'Moana 2',
    imageUrl: '/images/moana.jpeg',
    type: 'movie',
  },
  {
    id: 4,
    title: 'Mufasa',
    imageUrl: '/images/mufasa.jpeg',
    type: 'movie',
  },
  {
    id: 5,
    title: 'Mystery Island',
    imageUrl: '/images/mystery.jpg',
    type: 'series',
    
  },
  {
    id: 6,
    title: 'Sunset View',
    imageUrl: '/images/sunset.jpeg',
    type: 'movie',
  },
  {
    id: 7,
    title: 'Friends',
    imageUrl: '/images/friends.jpeg',
    type: 'series',
  },
  {
    id: 8,
    title: 'Anyone But You',
    imageUrl: '/images/anyone.jpeg',
    type: 'series',
  },
];

const TrendingContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0
          ? Math.max(0, trendingData.length - 6)
          : Math.max(0, prevIndex - 1)
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= trendingData.length - 6 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Trending Now</h1>
  
        <div className={styles.carouselContainer}>
          <button
            onClick={handlePrevious}
            aria-label="Previous items"
          >
            &lt;
          </button>
  
          <div className={styles.carousel}>
            {trendingData
              .slice(currentIndex, currentIndex + 6)
              .map((item, index) => (
                <div key={item.id} className={styles.carouselItem}>
                 
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={200}
                    height={300}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemTitle}>{item.title}</div>
                </div>
              ))}
          </div>
  
          <button
            onClick={handleNext}
            aria-label="Next items"
          >
            &gt;
          </button>
        </div>
      </div>
    );
};

export default TrendingContent; 
*/