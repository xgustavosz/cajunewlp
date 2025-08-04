import ClassDetails from "../ClassDetails";
import PageTitle from "../PageTitle";
import Footer from "./Footer";
import Header from "./Header";

export default function ClassPage() {
    return (
        <div>
            <Header />
            <PageTitle title="Turmas" />
            <ClassDetails />
            <Footer />
        </div>
    )
}