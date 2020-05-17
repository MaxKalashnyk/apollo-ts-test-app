import * as React from 'react';
import { IProps } from './types';
import { LaunchListWrap, LaunchListItems, LaunchListItem } from './styles';
import { useLaunchListQuery } from '../../generated/graphql';

export const LaunchList: React.FC<IProps> = ({ changeId }) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <LaunchListWrap>
      <h3>Launches</h3>
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
