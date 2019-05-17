import React from 'react'

const Articles = ({ location }) => (
 <div>
<h1>{location.state.workplace_name}</h1>
<h2>{location.state.position_name}</h2>
<h2>{location.state.description}</h2>
<h2>{location.state.Compensation}</h2>
 </div>
  )
  
  export default Articles;
