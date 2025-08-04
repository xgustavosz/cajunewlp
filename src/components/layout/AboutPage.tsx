import AboutAlbum from "../AboutAlbum";
import PageTitle from "../PageTitle";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";

export default function AboutPage() {
    return (
        <div>
            <Header />
            <PageTitle title="Sobre nós" />
            <About hasButton />
            <AboutAlbum />
            <Footer />
        </div>
    )
}