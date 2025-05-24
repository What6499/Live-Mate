import React, { use, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import groovyWalk from "../src/assets/groovywalk.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Context/AuthContext";
import { Helmet } from "react-helmet-async";
const UpdateListing = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [listing, setListing] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedListing = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/listings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedListing),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Updated!", "Your listing has been updated.", "success");
        navigate("/my-listings");
      });
  };
 
  if (!user || !listing) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Lottie animationData={groovyWalk} loop={true} className="w-72 h-72" />
        <p className="mt-4 text-lg font-semibold animate-pulse">
          Loading Post...
        </p>
      </div>
    );
  }

  return (
    <> <Helmet>
            <title>Update Post</title>
          </Helmet>
    <form
      onSubmit={handleUpdate}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-6  max-w-5xl w-full p-4 mx-auto"
      >
      <fieldset className="fieldset y-2 ">
        <legend className="fieldset-legend text-xl">Title</legend>
        <input
          defaultValue={listing.title}
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
          defaultValue={listing.location}
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
          defaultValue={listing.rent}
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
          defaultValue={listing.type}
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
          defaultValue={listing.lifestyle}
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
          defaultValue={listing.description}
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
          defaultValue={listing.contact}
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
          defaultValue={listing.availability}
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
          value={user.email}
          className="input w-full  focus:outline-0"
          placeholder="Type here"
          />
      </fieldset>
      <fieldset className="fieldset y-2">
        <legend className="fieldset-legend text-xl">User Name</legend>
        <input
          name="userName"
          value={user.displayName}
          type="text"
          readOnly
          className="input w-full  focus:outline-0"
          placeholder="Type here"
          />
      </fieldset>
      <input
        type="submit"
        defaultValue={"update"}
        className="btn w-full col-span-full text-white mt-4 bg-green-400 hover:bg-green-500"
        />
    </form>
        </>
  );
};

export default UpdateListing;
