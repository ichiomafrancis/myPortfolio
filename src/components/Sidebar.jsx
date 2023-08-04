import ProfileImage from "../assets/profile-img.jpg";
import Links from "./Links";

const Sidebar = () => {
  return (
    <div className="fixed flex min-h-screen w-80 flex-col justify-center border-r border-green-600 bg-orange-primary py-8">
      <div className="flex flex-col items-center">
        <img
          src={ProfileImage}
          alt=""
          className="h-48 w-48 rounded-full border-8"
        />
      </div>

      <div>
        <Links />
      </div>
    </div>
  );
};

export default Sidebar;
