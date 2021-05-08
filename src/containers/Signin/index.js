import React from "react";
import Layout from "../../components/Layout";
import Input from "../../components/ui/Input";

import { login } from "../../actions";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const userLogin = (e) => {
    const user = { email: "jito@jito.com", password: "123456" };
    e.preventDefault();
    dispatch(login(user));
  };
  return (
    <>
      <Layout>
        {/* form */}

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5 flex justify-center">
            <h2>Sign In</h2>
          </div>
        </div>

        <div className="mx-2 mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-12 ">
            <div className="mt-5 md:mt-0 md:col-start-5 md:col-end-9">
              <form onSubmit={userLogin}>
                <div className="shadow-md overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-green-100 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          E-Mail
                        </label>
                        <Input
                          type="email"
                          placeholder="Enter Your Email"
                          name="email"
                          value=""
                          onChange={() => {}}
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <Input
                          type="password"
                          placeholder="Enter Your Password"
                          name="password"
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* **** * */}
      </Layout>
    </>
  );
};

export default Index;
