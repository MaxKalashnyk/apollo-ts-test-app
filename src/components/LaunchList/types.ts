import { LaunchListQuery } from '../../generated/graphql';

export interface OwnProps {
  changeId: (id: number) => void;
}

export interface IProps extends OwnProps {
  data: LaunchListQuery;
}
