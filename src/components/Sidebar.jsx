import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { FaHome, FaUserFriends, FaChartBar, FaMusic, FaListUl, FaUserCircle } from 'react-icons/fa';

import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-blue-900 hover:text-white text-blue-300'}`}><FaHome /> Discover</NavLink>
    <NavLink to="/around-you" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-blue-900 hover:text-white text-blue-300'}`}><FaUserFriends /> Around You</NavLink>
    <NavLink to="/top-artists" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-blue-900 hover:text-white text-blue-300'}`}><FaUserCircle /> Top Artists</NavLink>
    <NavLink to="/top-charts" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-blue-900 hover:text-white text-blue-300'}`}><FaChartBar /> Top Charts</NavLink>
    <NavLink to="/playlists" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-blue-900 hover:text-white text-blue-300'}`}><FaListUl /> Playlists</NavLink>
    <NavLink to="/albums" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-blue-900 hover:text-white text-blue-300'}`}><FaMusic /> Albums</NavLink>
    <NavLink to="/genres" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-blue-900 hover:text-white text-blue-300'}`}><FaMusic /> Genres</NavLink>
    <NavLink to="/profile" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-blue-900 hover:text-white text-blue-300'}`}><FaUserCircle /> Profile</NavLink>
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="h-full w-60 bg-white/10 backdrop-blur-xl shadow-2xl border-r border-white/10 flex flex-col p-6 transition-all duration-500">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
