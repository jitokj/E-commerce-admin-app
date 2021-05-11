import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../images/logo_admin.png";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const navigation = [
    {
      name: "Sign In",
      href: "signin",
      current: location.pathname === "/signin" ? true : false,
    },
    {
      name: "Sign Up",
      href: "signup",
      current: location.pathname === "/signup" ? true : false,
    },
  ];

  const signOutNavigation = [
    {
      name: "Sign Out",
      current: true,
    },
  ];

  const renderNonLoggedLinks = () => {
    return navigation.map((item) => (
      <NavLink
        key={item.name}
        to={item.href}
        className={classNames(
          item.current
            ? "bg-gray-900 text-green-400"
            : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "px-3 py-2 rounded-md text-sm font-medium"
        )}
        aria-current={item.current ? "page" : undefined}
      >
        {item.name}
      </NavLink>
    ));
  };

  const renderLoggedInLinks = () => {
    return signOutNavigation.map((item) => {
      return (
        <span
          key={item.name}
          className={classNames(
            item.current
              ? "bg-gray-900 text-green-400"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "px-3 py-2 rounded-md text-sm font-medium"
          )}
        >
          {item.name}
        </span>
      );
    });
  };
  return (
    <Disclosure as="nav" className="bg-gray-800 z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                  </Link>
                  <h2 className="text-white hidden md:block">
                    Admin DashBoard
                  </h2>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {auth.authenticate
                      ? renderLoggedInLinks()
                      : renderNonLoggedLinks()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {auth.authenticate
                ? renderLoggedInLinks()
                : renderNonLoggedLinks()}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
