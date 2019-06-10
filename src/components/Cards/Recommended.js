import React from "react";

import { useFetch } from "../../Hooks";

export default function Recommended() {
  const url = "https://cryptoapiforpersonal.herokuapp.com/job";
  const [data] = useFetch(url);

  return (
    <div>
      {data.map(job => (
        <h2>{job.position_name}</h2>
      ))}
    </div>
  );
}
