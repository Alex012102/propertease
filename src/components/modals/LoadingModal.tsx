import Loading from "../ui/Loading";

const LoadingModal = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-brand-charcoal">
      <div className="w-[7rem]">
        <Loading />
      </div>
    </div>
  );
};

export default LoadingModal;