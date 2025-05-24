import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import groovyWalk from "../src/assets/groovywalk.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const AddToFindRoommate = () => {
  const { user } = use(AuthContext);
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Lottie animationData={groovyWalk} loop={true} className="w-72 h-72" />
        <p className="mt-4 text-lg font-semibold animate-pulse">
          Loading user info...
        </p>
      </div>
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());
    listing.likeCount = 0;

    fetch("https://live-mates-server.vercel.app/add-to-find-roommate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(listing),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Your Post Has been added successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>Add a post</title>
      </Helmet>
      <div className="  h-full mt-3">
        <h1 className="text-4xl font-bold text-center  mb-8">
          Create a Roommate Post
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 justify-center mx-auto  gap-x-10 mt-4 max-w-6/10"
        >
          <fieldset className="fieldset y-2 ">
            <legend className="fieldset-legend text-xl">Title</legend>
            <input
              required
              name="title"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="e.g., 'Looking for a roommate in NYC'"
            />
          </fieldset>
          <fieldset className="fieldset y-2 ">
            <legend className="fieldset-legend text-xl">Location</legend>
            <input
              required
              name="location"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset y-2 ">
            <legend className="fieldset-legend text-xl">
              Rent Amount ($/month)
            </legend>
            <input
              required
              name="rent"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset  y-2">
            <legend className="fieldset-legend text-xl">Room Type</legend>
            <input
              required
              name="type"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="Single, Shared, etc."
            />
          </fieldset>
          <fieldset className="fieldset y-2 ">
            <legend className="fieldset-legend text-xl">
              Lifestyle Preferences
            </legend>
            <input
              required
              name="lifestyle"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="Lifestyle Preferences"
            />
          </fieldset>
          <fieldset className="fieldset y-2 ">
            <legend className="fieldset-legend text-xl">Description</legend>
            <input
              required
              name="description"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset y-2 ">
            <legend className="fieldset-legend text-xl">Contact Info</legend>
            <input
              required
              pattern="^\d+$"
              name="contact"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="Enter Contact Number"
            />
          </fieldset>
          <fieldset>
            <legend className="fieldset-legend text-xl">Availability</legend>
            <select
              name="availability"
              defaultValue="Pick a Runtime"
              className="select  focus:outline-0  border-gray-300 w-full"
            >
              <option disabled={true}>Pick One</option>
              <option>Available</option>
              <option>Not Available</option>
            </select>
          </fieldset>
          <fieldset className=" fieldset y-2">
            <legend className="fieldset-legend text-xl">User Email</legend>
            <input
              name="userEmail"
              type="email"
              readOnly
              value={user.email || ""}
              className="input w-full  focus:outline-0"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset y-2">
            <legend className="fieldset-legend text-xl">User Name</legend>
            <input
              name="userName"
              value={user.displayName || ""}
              type="text"
              readOnly
              className="input w-full  focus:outline-0"
              placeholder="Type here"
            />
          </fieldset>
          <input
            type="submit"
            className="btn w-full col-span-full text-white mt-4 bg-green-400 hover:bg-green-500"
          />
        </form>
      </div>
    </>
  );
};

export default AddToFindRoommate;
