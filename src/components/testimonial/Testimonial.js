import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode, getfeedback } = context;
  const user = JSON.parse(localStorage.getItem("user"));
  const add = () => {
    window.location.href = "/feedback";
  };
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          {user ? (
            <div className=" flex justify-end">
              <button
                type="button"
                onClick={add}
                className="focus:outline-none text-white bg-red-500 shadow-[inset_0_0_10px_rgb(252 211 77)] border hover:bg-red-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2  border-8 border-solid border-amber-400"
              >
                {" "}
                <div className="flex gap-2 items-center">
                  Give your feedback
                </div>
              </button>
            </div>
          ) : (
            ""
          )}

          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-red-500">Customers</span> are saying
          </h2>
          <div className="flex flex-wrap -m-4 justify-center">
            {getfeedback.slice(0, 5).map((item, index) => {
              const { name, imageUrl, feed } = item;
              return (
                <div className="lg:w-1/3 lg:mb-0 p-4">
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={imageUrl}
                    />
                    <p
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className="leading-relaxed"
                    >
                      {feed}
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-amber-500 mt-6 mb-4" />
                    <h2
                      style={{ color: mode === "dark" ? "#ff4162" : "" }}
                      className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                    >
                      {name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
