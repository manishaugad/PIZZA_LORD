import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import myContext from "../../context/data/myContext";

function Feedback() {
  const context = useContext(myContext);
  const { feedback, setFeedback, addFeedback } = context;
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-8 py-8 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Give Your feedback
            </h1>
          </div>

          <div>
            <input
              type="text"
              name="name"
              onChange={(e) =>
                setFeedback({ ...feedback, name: e.target.value })
              }
              value={feedback.name}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              onChange={(e) =>
                setFeedback({ ...feedback, imageUrl: e.target.value })
              }
              value={feedback.imageUrl}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Your Profile image"
            />
          </div>

          <div>
            <textarea
              cols="30"
              rows="10"
              name="feed"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              onChange={(e) =>
                setFeedback({ ...feedback, feed: e.target.value })
              }
              placeholder="Your Feedback"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button onClick={addFeedback} className=" bg-red-600 w-full text-white font-bold  px-2 py-2 rounded-lg  border-4 border-solid border-amber-400">
              Add Your Testimonial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;