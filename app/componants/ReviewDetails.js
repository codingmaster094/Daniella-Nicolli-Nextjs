"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ReviewDetails = () => {
  const [ReviweDetail, setReviweDetail] = useState(null);
  const fetchReviweDetail = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_HEADER_BASE_URL}/google-reviews/?id=520`
      );
      setReviweDetail(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchReviweDetail();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: ReviweDetail?.html }} />;
};

export default ReviewDetails;
