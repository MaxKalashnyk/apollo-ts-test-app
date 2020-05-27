import * as React from 'react';
import { IProps } from './types';
import { useLaunchProfileQuery } from '../../generated/graphql';
import {
  Wrap,
  Title,
  Status,
  StatusSuccess,
  StatusFailed,
  ImageList,
  Details,
  FlightNumber,
  Message,
} from './styles';
import LazyImage from '../LazyImage/LazyImage';

export const LaunchProfile: React.FC<IProps> = ({ id }) => {
  const { data, error, loading } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });

  if (loading) {
    return <Message>Loading...</Message>;
  }

  if (error) {
    return <Message>ERROR</Message>;
  }

  if (!data) {
    return <Message>Select a flight from the panel</Message>;
  }

  if (!data.launch) {
    return <Message>No launch available</Message>;
  }

  return data ? (
    <Wrap>
      <Title>
        {data?.launch.mission_name}
        {data?.launch.rocket &&
          ` (${data?.launch.rocket.rocket_name} | ${data?.launch.rocket.rocket_type})`}
      </Title>
      <Status>
        <FlightNumber>Flight {data?.launch?.flight_number}: </FlightNumber>
        {data?.launch.launch_success ? (
          <StatusSuccess>Success</StatusSuccess>
        ) : (
          <StatusFailed>Failed</StatusFailed>
        )}
      </Status>
      <Details>{data?.launch.details}</Details>
      {!!data?.launch?.links?.flickr_images && (
        <ImageList>
          {data?.launch.links.flickr_images.map((image: any) =>
            image ? <LazyImage imgSrc={image} key={image} /> : null
          )}
        </ImageList>
      )}
    </Wrap>
  ) : null;
};
