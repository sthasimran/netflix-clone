// "use client";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlay } from "react-icons/fa";
// import styles from "./Description.module.css";
// import Image from "next/image";

// interface Show {
//   id: number;
//   name: string;
//   backdrop_path: string;
//   overview: string;
//   vote_average: number;
//   first_air_date: string;
//   popularity: number;
// }

// const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "";
// const BASE_URL = "https://api.themoviedb.org/3";
// const SHOW_DETAILS_URL = `${BASE_URL}/tv/66732?api_key=${API_KEY}`;
// const IMAGE_BASE_URL =
//   process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL ||
//   "https://image.tmdb.org/t/p/original";

// const Description: React.FC = () => {
//   const [show, setShow] = useState<Show | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const showResponse = await axios.get(SHOW_DETAILS_URL);
//         setShow(showResponse.data);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className={styles.loadingContainer}>Loading...</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.mainContent}>
//         <div className={styles.showInfo}>
//           <div className={styles.logo}>
//             <Image
//               src="/stranger-things-logo.png"
//               alt="Stranger Things"
//               width={350}
//               height={120}
//             />
//           </div>
//           <p className={styles.description}>
//             When a young boy vanishes, a small town uncovers a mystery involving
//             secret experiments, terrifying supernatural forces and one strange
//             little girl.
//           </p>
//           <button className={styles.playButton}>
//             <FaPlay />
//             <div>Play</div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Description;

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import styles from "./Description.module.css";

interface MovieDetails {
  id: string;
  title: string;
  overview: string;
  backdrop_path: string;
}

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL ||
  "https://image.tmdb.org/t/p/original";

const MovieDescription = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        console.log(`Fetching movie with ID: ${params.id}`);
        const response = await axios.get(
          `${BASE_URL}/movie/${params.id}?api_key=${API_KEY}` //api.themoviedb.org/3/movie/1084199?api_key=5adf1b0f22caf0a554215e8b21631f6a
        );
        console.log("Movie data:", response.data);
        setMovie(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError("Failed to load movie details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [params.id]);

  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!movie) {
    return <div className={styles.error}>Movie not found</div>;
  }

  return (
    <div className={styles.container}>
      {/* Background Image with Gradient Overlay */}
      <div className={styles.backdropContainer}>
        {movie.backdrop_path ? (
          <Image
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
            fill
            priority
            className={styles.backdropImage}
          />
        ) : (
          <div className={styles.backdropPlaceholder} />
        )}
        <div className={styles.gradientOverlay}></div>
      </div>

      {/* Netflix Logo */}
      <div className={styles.logoContainer}>
        <div className={styles.logo}>NETFLIX</div>
      </div>

      {/* Back Button */}
      <button onClick={handleGoBack} className={styles.backButton}>
        &larr; Back
      </button>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{movie.title}</h1>
        </div>

        <p className={styles.overview}>{movie.overview}</p>

        <div className={styles.buttonsContainer}>
          <button className={`${styles.button} ${styles.playButton}`}>
            <span className={styles.playIcon}>▶</span> Play
          </button>
          <button className={styles.button}>+ My List</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
