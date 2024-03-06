import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head } from "@inertiajs/inertia-react";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/movieCard";


export default function Dashboard({auth, featuredMovies, movies}) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

      

    return (
        <>
            <Head title="Dashboard">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <Authenticated auth={auth}>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {featuredMovies.map((featuredMovie, index) => {
                            {
                                /* <!-- Movie Thumbnail --> */
                            }
                            return (
                                <FeaturedMovie
                                    key={featuredMovie.id}
                                    slug={featuredMovie.slug}
                                    name={featuredMovie.name}
                                    thumbnail={featuredMovie.thumbnail}
                                    category={featuredMovie.category}
                                    rating={featuredMovie.rating}
                                />
                            );
                        })}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {movies.map((movie, index) => {
                            {
                                /* <!-- Movies 1 --> */
                            }
                            return (
                                <MovieCard
                                    key={index}
                                    slug={movie.slug}
                                    name={movie.name}
                                    category={movie.category}
                                    thumbnail={movie.thumbnail}
                                />
                            );
                        })}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
