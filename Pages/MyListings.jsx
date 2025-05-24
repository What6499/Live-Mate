import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import groovyWalk from "../src/assets/groovywalk.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const MyListings = () => {
  const { user } = use(AuthContext);

  const [myListings, setMyListings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !myListings) return;
    fetch("http://localhost:3000/my-listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setMyListings(data));
  }, [user]);
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Lottie animationData={groovyWalk} loop={true} className="w-72 h-72" />
      </div>
    );
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This post will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/listings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your post has been deleted.", "success");
            setMyListings(myListings.filter((item) => item._id !== id));
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/update-listing/${id}`);
  };

  return (
    <>
      <Helmet>
        <title>My Listings</title>
      </Helmet>
      <div className="overflow-x-auto p-4 max-w-11/12 mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">My Listings</h1>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myListings.map((listing) => (
              <tr key={listing._id}>
                <td>{listing.title}</td>
                <td>{listing.location}</td>
                <td>${listing.rent}</td>
                <td>{listing.availability}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => handleUpdate(listing._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(listing._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyListings;
