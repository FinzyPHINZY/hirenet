import Image from "next/image";

const JobRow = () => {
  return (
    <>
      <div className="bg-white p-4 shadow-sm rounded-lg flex gap-4">
        <div className="content-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
            alt="image"
            className="size-12"
          />
        </div>
        <div className="grow">
          <div className="text-gray-500 text-sm">Spotify</div>
          <div className="font-bold mb-1 text-lg">Product Designer</div>
          <p className="text-gray-400 text-sm">
            Remote &middot; Boston, MA &middot; full-time
          </p>
        </div>
        <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
      </div>
    </>
  );
};

export default JobRow;
