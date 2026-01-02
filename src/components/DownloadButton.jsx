export const DownloadButton = () => {
  const downloadLink =
    "https://drive.google.com/uc?export=download&id=1LRv0jJkXsZICs8aL1rdnZvDKXlTGn42R";
  const handleDownload = () => {
    if (navigator.onLine) {
      window.open(downloadLink, "_blank");
    } else {
      alert("You need an internet connection to download the resume.");
    }
  };
  return (
    <div className="m-auto w-40">
      <button
        onClick={handleDownload}
        className="my-5 transition-all ease-in-out duration-500 bg-emerald-700 hover:bg-green-600 hover:text-gray-100 px-3 py-1 text-white font-semibold rounded-md"
      >
        Download resume
      </button>
    </div>
  );
};
