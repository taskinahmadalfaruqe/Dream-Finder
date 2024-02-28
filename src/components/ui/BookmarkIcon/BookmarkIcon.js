import { AuthContext } from "@/providers/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import axios from "axios";

const BookmarkIcon = ({ job }) => {
  const { user, Loading } = useContext(AuthContext);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isBookmarkedDisplay, setIsBookmarkedDisplay] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  const {
    company_name,
    category,
    viewCount,
    description,
    minSalary,
    maxSalary,
    location,
    _id,
    type,
    company_logo,
    posted_date,
    appliedCount,
  } = job;

  const handleSaveToBookmark = () => {
    const bookmark = {
      category,
      viewCount,
      description,
      minSalary,
      maxSalary,
      location,
      type,
      company_logo,
      posted_date,
      appliedCount,
      user: user?.email,
      jobId: _id,
    };
    axios
      .post(`https://dream-finder-server.vercel.app/bookmark`, bookmark)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleBookmarkDelete = () => {
    axios
      .delete(
        `https://dream-finder-server.vercel.app/bookmarkDelete?id=${_id}&user=${user?.email}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (user) {
      fetch(`https://dream-finder-server.vercel.app/bookmark/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setBookmarks(data.bookmarks));
      const bookmarked = bookmarks?.find((bookmark) => bookmark?.jobId === _id);

      if (bookmarked) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    }
  }, [Loading, bookmarks]);
  return (
    <>
      {user && (
        <div
          onClick={() => {
            if (isBookmarked) {
              setIsBookmarked(false);
              handleBookmarkDelete();
            } else {
              setIsBookmarked(true);
              handleSaveToBookmark();
            }
          }}
        >
          {isBookmarked ? (
            <FaBookmark
              title="Remove from  Bookmark"
              style={{
                color: "#00BE63",
                fontSize: 22,
                cursor: "pointer",
              }}
            />
          ) : (
            <FaRegBookmark
              title="Add to Bookmark"
              style={{
                color: "#00BE63",
                fontSize: 22,
                cursor: "pointer",
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default BookmarkIcon;
