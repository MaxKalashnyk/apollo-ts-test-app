import * as React from 'react';
import { IProps } from './types';
import {
  LaunchListWrap,
  LaunchListItems,
  LaunchListItem,
  Title,
} from './styles';
import { useLaunchListQuery } from '../../generated/graphql';
import { Message } from '../LaunchProfile/styles';

export const LaunchList: React.FC<IProps> = ({ changeId }) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <Message>Loading...</Message>;
  }

  if (error || !data) {
    return <Message>ERROR</Message>;
  }

  return (
    <LaunchListWrap>
      <Title>Launches</Title>
      <LaunchListItems>
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <LaunchListItem
                  key={i}
                  onClick={() => changeId(launch.flight_number!)}
                >
                  {launch.mission_name} ({launch.launch_year})
                </LaunchListItem>
              )
          )}
      </LaunchListItems>
    </LaunchListWrap>
  );
};
