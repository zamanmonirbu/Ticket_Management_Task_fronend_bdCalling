import BusSearchBar from "./BusSearchBar";

const GuestView = () => {
  return (
    <div className="flex justify-center items-center min-h-screen gradient-bg">
      <div className="w-full max-w-5xl p-4">
        <BusSearchBar />
      </div>
    </div>
  );
};

export default GuestView;
