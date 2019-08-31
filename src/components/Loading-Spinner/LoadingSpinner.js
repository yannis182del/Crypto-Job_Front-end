import React from 'react';
import { css } from '@emotion/core';
import { SyncLoader } from 'react-spinners';

import { LoadingDiv } from './styled';

const override = css`
  display: block;
  margin: 20 auto;
  border-color: red;
  margin-bottom: 50px;
`;

const green = '#3eecac';

class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const { loading } = this.state;
    return (
      <LoadingDiv>
        <SyncLoader css={override} sizeUnit="px" size={20} color={green} loading={loading} />
      </LoadingDiv>
    );
  }
}

export default LoadingSpinner;
