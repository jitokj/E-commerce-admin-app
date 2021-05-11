import React, { useState } from "react";
import logo from "../../images/logo_admin.png";

const Index = () => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <div className="w-full h-full">
      <div className="flex flex-no-wrap">
        {/* Sidebar starts */}
        <div className="w-64 absolute lg:relative bg-purple-100 shadow h-screen flex-col justify-between hidden lg:flex pb-12">
          <div className="px-8">
            <div className="h-16 w-full flex justify-center items-center">
              <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            </div>
            <ul className="mt-12">
              <li className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <span className="text-sm">Dashboard</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <span className="text-sm">Products</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <span className="text-sm">Performance</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/*Mobile responsive sidebar*/}
        <div
          className={
            show
              ? "w-full h-full absolute z-40  transform  translate-x-0 "
              : "w-full h-full absolute z-40  transform -translate-x-full"
          }
        >
          <div
            className="bg-gray-800 opacity-50 w-full h-full absolute"
            onClick={() => setShow(!show)}
          ></div>
          <div className="w-64 md:w-96 absolute z-40 bg-purple-100 shadow h-full flex-col justify-between lg:hidden pb-4 transition duration-150 ease-in-out">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between px-8">
                  <div className="h-16 w-full flex justify-center items-center">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                  </div>
                  <div
                    id="closeSideBar"
                    className="flex items-center justify-center h-10 w-10"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
                <div className="px-8">
                  <ul className="mt-12">
                    <li className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6">
                      <div className="flex items-center">
                        <span className="xl:text-base md:text-2xl text-base ml-2">
                          Dashboard
                        </span>
                      </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                      <div className="flex items-center">
                        <span className="xl:text-base md:text-2xl text-base ml-2">
                          Products
                        </span>
                      </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                      <div className="flex items-center">
                        <span className="xl:text-base md:text-2xl text-base ml-2">
                          Performance
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-center mb-4 w-full px-6"></div>
                <div className="border-t border-gray-300">
                  <div className="w-full flex items-center justify-between px-6 pt-1">
                    <div className="flex items-center">
                      <img
                        alt="profile-pic"
                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                        className="w-8 h-8 rounded-md"
                      />
                      <p className="md:text-xl  text-gray-800 text-base leading-4 ml-2">
                        Admin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Mobile responsive sidebar*/}
        {/* Sidebar ends */}
        <div className="w-full">
          {/* Navigation starts */}
          <nav className="h-16 flex items-center justify-start lg:items-stretch  lg:justify-between bg-red-400 shadow relative z-0">
            <div className="hidden lg:flex w-full pr-6">
              <div className="w-1/2 h-full hidden text-white lg:flex items-center pl-6 pr-24 ">
                Admin DashBoard
              </div>
              <div className="w-1/2 hidden lg:flex">
                <div className="w-full flex items-center pl-8 justify-end">
                  <div
                    className="flex items-center relative cursor-pointer"
                    onClick={() => setProfile(!profile)}
                  >
                    <div className="rounded-full">
                      {profile ? (
                        <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                          <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              </svg>
                              <span className="text-sm ml-2">My Profile</span>
                            </div>
                          </li>
                          <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-logout"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                <path d="M7 12h14l-3 -3m0 6l3 -3" />
                              </svg>
                              <span className="text-sm ml-2">Sign out</span>
                            </div>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                      <div className="relative">
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png"
                          alt="avatar"
                        />
                        <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                      </div>
                    </div>
                    <p className="text-white text-sm mx-3">Admin</p>
                    <div className="cursor-pointer text-white">
                      <svg
                        aria-haspopup="true"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center pl-4 lg:hidden">
              <div
                className="text-gray-600 mr-8 visible lg:hidden relative"
                onClick={() => setShow(!show)}
                id="menu"
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    aria-label="Main Menu"
                    aria-haspopup="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu cursor-pointer"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                )}
              </div>
              <div className="h-full lg:hidden text-white">Admin DashBoard</div>
            </div>
          </nav>
          {/* Navigation ends */}
          {/* Remove class [ h-64 ] when adding a card block */}
          <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
            <div className="w-full h-full rounded">
              {/* Place your content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
