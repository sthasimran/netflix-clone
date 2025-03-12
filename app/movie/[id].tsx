// "use client"

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import Image from 'next/image';
// import styles from '../movie/ShowDetail.module.css';

// interface MovieDetails {
//   id: number;
//   title: string;
//   backdrop_path: string;
//   overview: string;
//   vote_average: number;
  
// }

// const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
// const BASE_URL = "https://api.themoviedb.org/3";
// const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

// const ShowDetail: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [movie, setMovie] = useState<MovieDetails>();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (id) {
//       const fetchMovieDetails = async () => {
//         try {
//           const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
//           setMovie(response.data);
//           console.log(response.data)
//         } catch (error) {
//           console.error("Error fetching movie details:", error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchMovieDetails();
//     }
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!movie) {
//     return <p>Movie not found</p>;
//   }

//   return (
//       <div className={styles.mainContent}>
//         <div className={styles.showInfo}>
//           <div className={styles.logo}>
//             <Image
//               src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
//               alt={movie.title}
//               width={350}
//               height={120}
//             />
//           </div>
//           <div className={styles.topRated}>
//             <span className={styles.topTen}>Rating: {movie.vote_average}</span>
//           </div>
//           <p className={styles.description}>{movie.overview}</p>
//           <div className={styles.buttonGroup}>
//             <button className={styles.playButton}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M6 4.75L17.25 12L6 19.25V4.75Z" fill="black" />
               
//               </svg>
//               Play
//             </button>
//           </div>
//         </div>
//       </div>
    
//   );
// };

// export default ShowDetail;

import MovieDescription from '../(root)/components/DescriptionMovie/Description';

export default function MoviePage({ params }: { params: { id: string } }) {
  return <MovieDescription params={params} />;
}