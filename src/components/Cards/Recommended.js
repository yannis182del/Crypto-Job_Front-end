import React from "react";

import { useFetch } from "../../Hooks";
import "./Recommended.css"

export default function Recommended() {
  const url = "https://cryptoapiforpersonal.herokuapp.com/job";
  const [data] = useFetch(url);

  return (
    <>
      {data.map(job => {
        if (job.location === "remote") {
          return (
            <div className="recommended-component">
              <h2>{job.position_name}</h2>
              <p>{job.location}</p>
              <p>{job.position_name}</p>
            </div>
          );
        }
      })}
    </>
  );
}
