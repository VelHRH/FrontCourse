import {
 HomeIcon,
 BookOpenIcon,
 ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import { NavItem } from "./NavItem";
import { Link, useLocation } from "react-router-dom";

export const Navbox = () => {
 const loc = useLocation();
 const isActiveHome = () => {
  if (loc.pathname === "/") {
   return true;
  }
  return false;
 };
 const isActiveBlogs = () => {
  if (loc.pathname.slice(0, 5) === "/blog") {
   return true;
  }
  return false;
 };
 const isActiveContact = () => {
  if (loc.pathname.slice(0, 8) === "/contact") {
   return true;
  }
  return false;
 };
 return (
  <>
   <div className="hidden md:block w-1/5">
    <div className={`w-[12%] fixed top-24 left-[8%] font-semibold`}>
     <Link to="/">
      <NavItem
       icon={<HomeIcon className="w-7 mr-3" />}
       text="Home"
       isActive={isActiveHome()}
      />
     </Link>
     <Link to="/blog">
      <NavItem
       icon={<BookOpenIcon className="w-7 mr-3" />}
       text="Blog"
       isActive={isActiveBlogs()}
      />
     </Link>
     <Link to="/contact">
      <NavItem
       icon={<ChatBubbleLeftEllipsisIcon className="w-7 mr-3" />}
       text="Contact"
       isActive={isActiveContact()}
      />
     </Link>
    </div>
   </div>
   <div className="md:hidden">
    <div
     className={`w-full h-16 fixed bottom-0 flex justify-around bg-slate-50 border-t-[3px] border-violet-400 items-center`}
    >
     <Link to="/">
      <NavItem icon={<HomeIcon className="w-7" />} isActive={isActiveHome()} />
     </Link>
     <Link to="/blog">
      <NavItem
       icon={<BookOpenIcon className="w-7" />}
       isActive={isActiveBlogs()}
      />
     </Link>
     <Link to="/contact">
      <NavItem
       icon={<ChatBubbleLeftEllipsisIcon className="w-7" />}
       isActive={isActiveContact()}
      />
     </Link>
    </div>
   </div>
  </>
 );
};
