import PageTitle from "../PageTitle";
import Footer from "./Footer";
import FormContact from "./FormContact";
import Header from "./Header";

export default function ContactPage() {
    return (
        <div>
            <Header />
            <PageTitle title="Contato" />
            <FormContact isPage />
            <Footer />
        </div>
    )
}