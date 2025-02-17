import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ConfigButton from "./ConfigButton";
import LogOutModal from "./modals/Logout";

const ConfigSidebar = ({ activeSection, setActiveSection }) => {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
    <nav className={`relative absolute top-0 left-0 bg-primary-900/50 font-lato text-2xl text-white/75 p-4 flex-col gap-8 basis-1/5 justify-start items-center ${isSidebarOpen ? 'flex' : 'hidden lg:flex'}`}>
      <div className=" transition-all duration-200 size-24 relative group rounded-full overflow-hidden cursor-pointer">
        <img
          className=" transition-all duration-200 size-24 group-hover:brightness-75 group-hover:blur-sm"
          src="/avatar-default.svg"
          alt="avatar"
        />
        <span className=" transition-all duration-200 hidden group-hover:inline text-sm text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Change Avatar
        </span>
      </div>

      <SearchBar type="sidebar" />

      <ConfigButton
        image="/user-edit-icon.svg"
        alt="Profile"
        text="Profile"
        hint="To edit and save all the profile information."
        isActive={activeSection === "profile"}
        onClick={() => setActiveSection("profile")}
      />

      <ConfigButton
        image="/shield-icon.svg"
        alt="Security"
        text="Security"
        hint="To change your security settings."
        isActive={activeSection === "security"}
        onClick={() => setActiveSection("security")}
      />

      <ConfigButton
        image="/car-icon.svg"
        alt="Rentals"
        text="Rentals"
        hint="To check your rentals history."
        isActive={activeSection === "rental"}
        onClick={() => setActiveSection("rental")}
      />

      <ConfigButton
        image="/wallet-icon.svg"
        alt="Wallet"
        text="Wallet"
        hint="To see your wallet balance and movements."
        isActive={activeSection === "wallet"}
        onClick={() => setActiveSection("wallet")}
      />

      <ConfigButton
        image="/heart-icon.svg"
        alt="Favorites"
        text="Favorites"
        hint="To edit and save all the profile information."
        isActive={activeSection === "favorites"}
        onClick={() => setActiveSection("favorites")}
      />

      <ConfigButton
        image="/accessibility-icon.svg"
        alt="Accessibility"
        text="Accessibility"
        hint="To edit settings related to the accessibility for people with diverse needs."
        isActive={activeSection === "accessibility"}
        onClick={() => setActiveSection("accessibility")}
      />

      <ConfigButton
        image="/logout.svg"
        alt="Log Out"
        text="Log Out"
        hint="To log out of your account."
        isActive={activeSection === "logOut"}
        onClick={() => {
          setActiveSection("logOut");
          setIsLogOutModalOpen(true);
        }}
        className="invert"
      />
      <LogOutModal
        isOpen={isLogOutModalOpen}
        onClose={() => setIsLogOutModalOpen(false)}
      />
    </nav>
    <button className="lg:hidden absolute top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md" onClick={() => setIsSidebarOpen(!isSidebarOpen)} >☰</button>
    </>
  );
};

export default ConfigSidebar;
