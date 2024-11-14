import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="*:w-full mt-5 flex flex-col gap-2">
      <p className="text-[20px] font-semibold">Find Us</p>
      <div className="join join-vertical">
        <button className="btn join-item">
          <FaFacebook /> Facebook
        </button>
      </div>
      <div className="join join-vertical">
        <button className="btn join-item">
          <FaTwitter /> Twitter
        </button>
      </div>
      <div className="join join-vertical">
        <button className="btn join-item">
          <FaInstagram /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
