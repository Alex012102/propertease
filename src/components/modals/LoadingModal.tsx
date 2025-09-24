import Loading from "../ui/Loading";

const LoadingModal = () => {
  return (
    <div className="flex h-full w-full justify-center items-center text-center">
      <div className="w-[10rem]">
        <Loading />
        <p className="mt-3 ms-1">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingModal;
