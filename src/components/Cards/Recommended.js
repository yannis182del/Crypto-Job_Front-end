import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
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
              <Link
                          className="link-apply"
                          to={{
                            pathname: `/job/${job._id}`,
                            state: job
                          }}
                        >
                <h3 className="position-name">{job.position_name}</h3>
                </Link>
                <p className="place">{job.workplace_name}</p>
                <p className="job-desc">{job.location}</p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
