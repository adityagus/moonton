import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage }) {
    console.log('ini adalah flash message', flashMessage)
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
            </Authenticated>
            {/* </div> */}
        </>
    );
}
