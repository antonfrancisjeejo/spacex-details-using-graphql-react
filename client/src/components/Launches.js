import React, { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {error && console.log(error)}
      <Fragment>
        {data &&
          data.launches.map((launch) => {
            return <LaunchItem key={launch.flight_number} launch={launch} />;
          })}
      </Fragment>
    </Fragment>
  );
};

export default Launches;
