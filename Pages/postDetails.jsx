import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { Helmet } from "react-helmet-async";

const PostDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);

  const [listing, setListing] = useState(null);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    fetch(`https://live-mates-server.vercel.app/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data));
  }, [id]);

  const handleLike = () => {
    if (user.email === listing.userEmail) {
      return Swal.fire("You can't like your own post");
    }
    const updatedLikeCount = liked
      ? listing.likeCount - 1
      : listing.likeCount + 1;

    fetch(`https://live-mates-server.vercel.app/details/like/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likeCount: updatedLikeCount }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        {
          liked
            ? Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Like Removed",
                showConfirmButton: false,
                timer: 1500,
              })
            : Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You liked this post",
                showConfirmButton: false,
                timer: 1500,
              });
        }
        setListing({ ...listing, likeCount: updatedLikeCount });
        setLiked(!liked);
      });
  };

  if (!listing) return <div className="text-center mt-8">Loading...</div>;

  return (
    <>
     <Helmet>
            <title>Details</title>
          </Helmet>
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        <span className="text-green-500">{listing.title}</span>
      </h1>
      <p className="font-bold">Location: {listing.location}</p>
      <p className="font-bold">Rent: ${listing.rent}</p>
      <p className="font-bold">Type: {listing.type}</p>
      <p className="font-bold">Lifestyle: {listing.lifestyle}</p>
      <p className="font-bold">Description: {listing.description}</p>
      <p className="font-bold">Availability: {listing.availability}</p>

      <p className="font-bold">Posted by: {listing.userName}</p>
      <p className="font-bold">{` ${listing.likeCount} people interested in this post.`}</p>

      <button
        className="btn mt-4 bg-pink-500 hover:bg-pink-600 text-white"
        onClick={handleLike}
        >
        Like
      </button>
      <p className={liked ? "block text-green-600 font-bold" : "hidden"}>
        Contact: {listing.contact}
      </p>
    </div>
        </>
  );
};

export default PostDetails;
