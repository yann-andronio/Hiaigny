import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { BellIcon } from "@heroicons/react/24/outline";
import s from "./navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  interface NavLinkProps {
    isActive: boolean;
  }

  const [language, setLanguage] = useState("fr");
  // const [isSticky, setIsSticky] = useState(false);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    console.log(lang);
  };

  // const handleScroll = () => {
  //   setIsSticky(window.scrollY > 0);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Disclosure as="nav" className={`${s.navbar} bg-[#e0e5df]  fixed w-full z-50`}>  
     {/* ${isSticky ? s.sticky : 'bg-[#F0F4F8] '}  */}
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 bg-[#4CAF50] text-white focus:outline-none">
              <Bars3Icon aria-hidden="true" className={`block h-6 w-6 group-data-[open]:hidden`} />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-between sm:items-stretch">
            <div className="flex items-center ml-14 sm:ml-0">
              <h1 className="text-[#22C55E] text-2xl font-bold h-8 w-auto">LOGO</h1>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 justify-center">
                <NavLink to="/" className={({ isActive }: NavLinkProps) => (isActive ? s.activeLink : s.inactiveLink)}>
                  Accueil
                </NavLink>
                <NavLink to="/Hopitaux" className={({ isActive }: NavLinkProps) => (isActive ? s.activeLink : s.inactiveLink)}>
                  Hôpitaux
                </NavLink>
                <NavLink to="/Ordonnance" className={({ isActive }: NavLinkProps) => (isActive ? s.activeLink : s.inactiveLink)}>
                  Ordonnance
                </NavLink>
                <NavLink to="/Contact" className={({ isActive }: NavLinkProps) => (isActive ? s.activeLink : s.inactiveLink)}>
                  Contact
                </NavLink>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link to="/notification">
                <button type="button" className="relative  p-1 text-gray-400 hover:text-white focus:outline-none mr-2">
                  <BellIcon aria-hidden="true" className={`${s.notif} h-6 w-6`} />
                </button>
              </Link>
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-[#F0F4F8] text-sm focus:outline-none">
                    <img alt="Profil utilisateur" src="./assets/image/pdp/2.png" className={`${s.pdp} h-8 w-8 rounded-full`} />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Votre profil
                    </a>
                  </MenuItem>

                  <MenuItem>
                    <div className="relative group">
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Langue
                      </span>
                      <div className={`${s.languehover} absolute z-20 mt-2 w-32 hidden group-hover:block bg-white rounded-md shadow-lg p-2`}>
                        <span className={`${s.triangle}`}></span>
                        <div className={`${s.languefr} flex items-center cursor-pointer`} onClick={() => changeLanguage("fr")}>
                          <img src="./assets/image/langue/fr.png" alt="Français" className="h-4 w-4 mr-2" />
                          <span>Français</span>
                        </div>
                        <div className={`${s.langueeng} flex items-center cursor-pointer mt-2`} onClick={() => changeLanguage("en")}>
                          <img src="./assets/image/langue/eng.png" alt="English" className="h-4 w-4 mr-2" />
                          <span>English</span>
                        </div>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Déconnexion
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton as={NavLink} to="/" className={({ isActive }: NavLinkProps) => (isActive ? "bg-[#4CAF50] text-white block rounded-md px-3 py-2 text-base font-medium" : "text-gray-700 block hover:bg-[#4CAF50] hover:text-white rounded-md px-3 py-2 text-base font-medium")}>
            Accueil
          </DisclosureButton>
          <DisclosureButton as={NavLink} to="/Hopitaux" className={({ isActive }: NavLinkProps) => (isActive ? "bg-[#4CAF50] text-white block rounded-md px-3 py-2 text-base font-medium" : "text-gray-700 block hover:bg-[#4CAF50] hover:text-white rounded-md px-3 py-2 text-base font-medium")}>
            Hôpitaux
          </DisclosureButton>
          <DisclosureButton as={NavLink} to="/Ordonnance" className={({ isActive }: NavLinkProps) => (isActive ? "bg-[#4CAF50] text-white block rounded-md px-3 py-2 text-base font-medium" : "text-gray-700 block hover:bg-[#4CAF50] hover:text-white rounded-md px-3 py-2 text-base font-medium")}>
            Ordonnance
          </DisclosureButton>
          <DisclosureButton as={NavLink} to="/Contact" className={({ isActive }: NavLinkProps) => (isActive ? "bg-[#4CAF50] text-white block rounded-md px-3 py-2 text-base font-medium" : "text-gray-700 block hover:bg-[#4CAF50] hover:text-white rounded-md px-3 py-2 text-base font-medium")}>
            Contact
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
