import React from 'react';
import PropTypes from 'prop-types';

import { regexChange } from '../../helper/helper';

import {
  BlogCard,
  PositionName,
  DesktopLocation,
  Place,
  LocationJob,
  TextDescription,
  StyledLink,
} from './styled';

export default function Cards(props) {
  const { id, pathId, positionNames, workplaceNames, locations, locationJobs, description } = props;
  return (
    <BlogCard key={id}>
      <StyledLink
        to={{
          pathname: `/job/${pathId}`,
        }}
      >
        <PositionName>{positionNames}</PositionName>
        <Place>
          {workplaceNames} <DesktopLocation>- {locations}</DesktopLocation>{' '}
        </Place>
        <LocationJob>{locationJobs}</LocationJob>
        <TextDescription>{regexChange(description)}...</TextDescription>
      </StyledLink>
    </BlogCard>
  );
}

Cards.propTypes = {
  id: PropTypes.string.isRequired,
  pathId: PropTypes.string.isRequired,
  positionNames: PropTypes.string.isRequired,
  workplaceNames: PropTypes.string.isRequired,
  locations: PropTypes.string.isRequired,
  locationJobs: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
