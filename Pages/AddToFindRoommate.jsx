import React from "react";

const AddToFindRoommate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());
    console.log(listing);
  };
  return (
    <>
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
              name="title"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="e.g., 'Looking for a roommate in NYC'"
            />
          </fieldset>
          <fieldset className="fieldset y-2 ">
            <legend className="fieldset-legend text-xl">Location</legend>
            <input
              name="location"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset y-2 ">
            <legend className="fieldset-legend text-xl">Rent Amount</legend>
            <input
              name="rent"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset  y-2">
            <legend className="fieldset-legend text-xl">Room Type</legend>
            <input
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
              name="lifestyle"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="Lifestyle Preferences"
            />
          </fieldset>
          <fieldset className="fieldset y-2 ">
            <legend className="fieldset-legend text-xl">Description</legend>
            <input
              name="description"
              type="text"
              className="input w-full  focus:outline-0"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset y-2 ">
            <legend className="fieldset-legend text-xl">Contact Info</legend>
            <input
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
              className="input w-full  focus:outline-0"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset y-2">
            <legend className="fieldset-legend text-xl">User Name</legend>
            <input
              name="userName"
              type="text"
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
