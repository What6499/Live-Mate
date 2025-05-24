import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BrowseListings = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/browse-listings")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Browse All Roommate Listings
      </h2>
      <div className=" overflow-y-auto">
        <table className="table table-zebra w-full text-sm md:text-base">
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Room Type</th>
              <th>Posted By</th>
              <th>See More</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.location}</td>
                <td>${post.rent}/month</td>
                <td>{post.type}</td>
                <td>{post.userName}</td>
                <td>
                  <button
                    onClick={() => navigate(`/post/${post._id}`)}
                    className="btn btn-sm bg-green-300 hover:bg-green-600 text-white"
                  >
                    See More
                  </button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-4">
                  No listings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListings;
