import Loading from "../ui/Loading";

const LoadingModal = () => {
  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center text-center"
    >
      <div className="w-[15rem]">
        <Loading />
        <p className="mt-3 text-2xl font-semibold text-white ms-1">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingModal;
