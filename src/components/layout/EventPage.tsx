import EventComponent from "../EventComponent";
import PageTitle from "../PageTitle";
import Footer from "./Footer";
import Header from "./Header";

export default function EventPage() {
    return (
        <div>
            <Header />
            <PageTitle title="Eventos" />
            <EventComponent />
            <Footer />
        </div>
    )
}