"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export const DeleteBtn = ({ id }) => {
  const router = useRouter();
  const removeItem = async () => {
    // console.log(id);
    const confirmed = confirm("are you sure?");
    if (confirmed) {
      const response = await fetch(`http://localhost:5000/api/v1/user/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("refresh ho Raha");
        alert("refresh to see the changes.");
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeItem} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};
