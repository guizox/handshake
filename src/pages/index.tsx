"use client";
import { useRouter } from "next/router";
import React from "react";

const Students = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/students");
  }, [router]);

  return null;
};

export default Students;
