const Loader = ({ className = "w-14 h-14 border-2" }) => {
  return (
    <div className="text-center">
      <div className={`${className}  border-dashed rounded-full animate-spin border-accent-600 mx-auto`} />
    </div>
  );
};

export default Loader;
