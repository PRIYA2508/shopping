import { assets } from "../../frontend_assets/assets";

const Header = () => {
  return (
    <div>
    <div className="bg-black">
        <p className="text-white text-center animate-marquee">FREE SHIPPING FOR ALL DOMESTIC</p>
      </div>
    <div className=" flex justify-between font-medium py-5 mx-5">
     <img src={assets.logo} className="w-36"/>
      <ul className="flex gap-10 mx-7">
        <li>
        HOME
          </li>
        <li>COLLECTION</li>
        <li>CONTACT</li>
        <li>ABOUT</li>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer"/>
        <div className="group relative">
        <img className="w-5" src={assets.profile_icon}/>
        <div>
          <p>My Profile</p>
          <p>My Orders</p>
          <p>Logout</p>
          <p></p>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
