"use client";

import { useEffect, useState } from "react";

export default function DBConnectionCheck() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    async function checkConnection() {
      try {
        const res = await fetch("/backend/api");
        const data = await res.json();
        setStatus(data.status);
      } catch (error) {
        setStatus("Error connecting to DB");
      }
    }
    checkConnection();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">MongoDB Connection Status</h1>
      <p className="mt-4 text-lg">{status}</p>
    </div>
  );
}