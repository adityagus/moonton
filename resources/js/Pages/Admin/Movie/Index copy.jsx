import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage, movies }) {
    console.log("ini adalah movies", movies);
    return (
        <>
            <Head title="Home" />
            <h1></h1>
            <Authenticated auth={auth}>
                <Link href={route("admin.dashboard.movie.create")}>
                    <PrimaryButton className="w-40 mt-4 mb-8">
                        Insert New Movie
                    </PrimaryButton>
                </Link>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}

                <table className="table-fixed w-full text-center">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie, index) => {
                            return (
                                <tr key={movie.id}>
                                    <td>
                                        <img
                                            src={`/storage/${movie.thumbnail}`}
                                            alt="tidak ada"
                                        />
                                    </td>
                                    <td>{movie.name}</td>
                                    <td>{movie.category}</td>
                                    <td>{movie.rating}</td>
                                    <td>
                                        <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                                            <PrimaryButton variant="primary">
                                                Detail
                                            </PrimaryButton>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href={route('admin.dashboard.movie.destroy', movie.id)}>
                                            <PrimaryButton className="btn-danger">
                                                Delete
                                            </PrimaryButton>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Authenticated>
            {/* </div> */}
        </>
    );
}
