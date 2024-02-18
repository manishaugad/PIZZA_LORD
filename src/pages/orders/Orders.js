import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

function Orders() {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;
  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <>
          <div className="relative overflow-x-auto mb-10">
            <h1
              className=" text-center mb-5 text-3xl font-semibold underline"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Your Order Details
            </h1>
            {order
              .filter((obj) => obj.userid === userid)
              .map((order) => {
                // order.cartItems.map()
                return (
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                      className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product price
                        </th>

                        <th scope="col" className="px-6 py-3">
                          Purchase Date
                        </th>
                      </tr>
                    </thead>
                    {order.cartItems.map((item, index) => {
                      return (
                        <tbody>
                          <tr
                            className="bg-gray-50 border-b  dark:border-gray-700"
                            style={{
                              backgroundColor:
                                mode === "dark" ? "rgb(46 49 55)" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {index + 1}.
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-black whitespace-nowrap"
                            >
                              <img
                                className="w-16"
                                src={item.imageUrl}
                                alt="img"
                              />
                            </th>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {item.title}
                            </td>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              ₹{item.price}
                            </td>

                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {item.date}
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                );
              })}
          </div>
        </>
      ) : (
        <h2 className=" text-center tex-2xl text-white">Not Order</h2>
      )}
    </Layout>
  );
}

export default Orders;
