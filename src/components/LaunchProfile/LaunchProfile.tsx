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
  Image,
} from './styles';

export const LaunchProfile: React.FC<IProps> = ({ id }) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });

  React.useEffect(() => {
    refetch();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  if (!data.launch) {
    return <div>No launch available</div>;
  }

  return data ? (
    <Wrap>
      <Status>
        <span>Flight {data?.launch?.flight_number}: </span>
        {data?.launch.launch_success ? (
          <StatusSuccess>Success</StatusSuccess>
        ) : (
          <StatusFailed>Failed</StatusFailed>
        )}
      </Status>
      <Title>
        {data?.launch.mission_name}
        {data?.launch.rocket &&
          ` (${data?.launch.rocket.rocket_name} | ${data?.launch.rocket.rocket_type})`}
      </Title>
      <p>{data?.launch.details}</p>
      {!!data?.launch.links && !!data?.launch.links.flickr_images && (
        <ImageList>
          {data?.launch.links.flickr_images.map((image: any) =>
            image ? <Image src={image} key={image} /> : null
          )}
        </ImageList>
      )}
    </Wrap>
  ) : null;
};
