"use client";

import React, { useEffect } from "react";

function dummy() {
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

  return <div>dummy</div>;
}

export default dummy;
