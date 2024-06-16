import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const JobRow = () => {
  return (
    <>
      <div className="bg-white p-4 shadow-sm rounded-lg relative">
        <div className="absolute top-4 right-4">
          <FontAwesomeIcon
            icon={faStar}
            className="size-4 text-gray-300 cursor-pointer"
          />
        </div>
        <div className="flex grow gap-4">
          <div className="content-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
              alt="image"
              className="size-12"
            />
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div className="text-gray-500 text-sm">Spotify</div>
              <div className="font-bold mb-1 text-lg">Product Designer</div>
              <div className="text-gray-400 text-sm">
                Remote &middot; Boston, MA &middot; full-time
              </div>
            </div>

            <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobRow;
