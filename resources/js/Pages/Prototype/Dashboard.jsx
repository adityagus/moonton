import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head } from "@inertiajs/inertia-react";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/movieCard";


export default function Dashboard() {
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
            <Authenticated>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {[1, 2, 3, 4].map((i) => {
                            {
                                /* <!-- Movie Thumbnail --> */
                            }
                            return (
                                <FeaturedMovie
                                    key={i}
                                    slug="movie-thumbnail"
                                    name={`the batman in love ${i}`}
                                    thumbnail="/images/featured-1.png"
                                    category="Action"
                                    title="Batman"
                                    rating={i + 1}
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
                        {[1, 2, 3, 4, 5, 6, 7].map((i) => {
                            {
                                /* <!-- Movies 1 --> */
                            }
                            return (
                                <MovieCard
                                    key={i}
                                    slug="Meong Golden"
                                    name="Meong Golden"
                                    category="Horror • Love"
                                    thumbnail="/images/browse-1.png"
                                />
                            );
                        })}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
