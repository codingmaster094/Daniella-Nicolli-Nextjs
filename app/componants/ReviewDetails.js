"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
const ReviewDetails = () => {
  const [ReviweDetail, setReviweDetail] = useState(null);
  const fetchReviweDetail = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom/v1/google-reviews/?id=520"
      );
      setReviweDetail(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchReviweDetail();
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(ReviweDetail?.html),
      }}
    />
  );
};

export default ReviewDetails;
