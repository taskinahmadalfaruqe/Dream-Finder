"use client";
import axios from "axios";
import { useState } from "react";

const useBookmarkDelete = () => {
  const [deleteState, setDeleteState] = useState(false);
  const handleBookmarkDelete = (id) => {
    axios
      .delete(`https://dream-finder-server.vercel.app/bookmark/${id}`)
      .then((res) => setDeleteState(!deleteState))
      .catch((error) => console.log(error));
  };
  return { handleBookmarkDelete, deleteState };
};

export default useBookmarkDelete;
