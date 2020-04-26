import * as React from 'react';
import { IProps } from './types';
import {
  Wrap,
  Title,
  Status,
  StatusSuccess,
  StatusFailed,
  ImageList,
  Image,
} from './styles';

const LaunchProfile: React.FC<IProps> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>;
  }

  return (
    <Wrap>
      <Status>
        <span>Flight {data.launch.flight_number}: </span>
        {data.launch.launch_success ? (
          <StatusSuccess>Success</StatusSuccess>
        ) : (
          <StatusFailed>Failed</StatusFailed>
        )}
      </Status>
      <Title>
        {data.launch.mission_name}
        {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
      </Title>
      <p>{data.launch.details}</p>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <ImageList>
          {data.launch.links.flickr_images.map((image) =>
            image ? <Image src={image} key={image} /> : null
          )}
        </ImageList>
      )}
    </Wrap>
  );
};

export default LaunchProfile;
