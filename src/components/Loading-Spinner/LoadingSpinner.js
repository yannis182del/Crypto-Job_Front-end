import React from 'react';
import { css } from '@emotion/core';
import { SyncLoader } from 'react-spinners';
import "./LoadingSpinner.css"

const override = css`
    display: block;
    margin: 20 auto;
    border-color: red;
   margin-bottom: 50px;
`;
 
class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <SyncLoader
          css={override}
          sizeUnit={"px"}
          size={30}
          color={' #3eecac;'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default LoadingSpinner