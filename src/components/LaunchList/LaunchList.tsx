import * as React from 'react';
import { IProps } from './types';
import { LaunchListWrap, LaunchListItems, LaunchListItem } from './styles';

const LaunchList: React.FC<IProps> = ({ data, changeId }) => (
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

export default LaunchList;
