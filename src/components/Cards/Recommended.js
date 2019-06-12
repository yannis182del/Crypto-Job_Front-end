import React from "react";

import { useFetch } from "../../Hooks";
import "./Recommended.css";

export default function Recommended() {
  const url = "https://cryptoapiforpersonal.herokuapp.com/job";
  const [data] = useFetch(url);

  return (
    <>
      {data.map(job => {
        if (job.location === "remote") {
          return (
            <div class="column">
              <div class="card">
                <h3>{job.position_name}</h3>
                <p>{job.workplace_name}</p>
                <p>{job.location}</p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

