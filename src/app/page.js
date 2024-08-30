"use client";

import supabase from "@/config/supaBaseClinet";
import { useEffect } from "react";
import Layout from "./components/Layout";

export default function Home() {
  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("first_table").select("*");

      if (error) {
        console.log("Could not fetch records!");
      }

      if (data) {
        console.log("super base data ====", data);
      }
    };

    fetchSmoothies();
  }, []);

  return (
    <main>
      <Layout />
    </main>
  );
}

{
  /* <div
        style={{
          width: "600px",
          backgroundColor: "#fff",
          height: "800px",
          backgroundImage: "url('/bgImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div> */
}
