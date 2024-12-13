import BusSearchBar from "./BusSearchBar";
import Navbar from "./Navbar";

const GuestView = () => {
    return (
        <div className="gradient-bg min-h-screen">
            <Navbar/>
            <BusSearchBar/>
        </div>
    );
};

export default GuestView;