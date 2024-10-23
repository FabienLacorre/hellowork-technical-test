import { useState } from "react";
import { Content } from "../design-system/atoms/Content";
import { GitCard } from "../components/GitCard";
import { CardContainer } from "../design-system/molecules/CardContainer";
import moment from "moment";
import { Pagination } from "../design-system/molecules/Pagination";
import { FormSearch } from "../components/FormSearch";
import { useQueryOrganizationRepositoriesByName } from "../api/queries";
import { Loader } from "../design-system/atoms/Loader";
import { Typography } from "../design-system/atoms/Typography";
import { Select } from "../design-system/molecules/Select";

import "./Dashboard.scss";

export const Dashboard = (): JSX.Element => {
  const [organizationName, setOrganizationName] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [orderValue, setOrderValue] = useState<string>("created;asc");

  const { data, isError, isFetching } = useQueryOrganizationRepositoriesByName({
    organizationName,
    order: orderValue,
    page,
  });

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderValue(e.target.value);
  };

  const onSubmit = (oName: string) => {
    setPage(1);
    setOrganizationName(oName);
  };

  const onNextPageClick = () => {
    setPage((p) => {
      return p + 1;
    });
  };

  const onPreviousPageClick = () => {
    setPage((p) => {
      return p - 1;
    });
  };

  const allowDisplayData = data && data?.repoList && isFetching === false;

  return (
    <Content className="app-c-dashboard--input-and-button-container">
      <FormSearch value={organizationName} onSubmit={onSubmit} />

      {!data && !isError && !isFetching && (
        <>
          <Typography>
            Search for an organization to see its repositories
          </Typography>
          <Typography>
            You can find a list of organization name here :
            https://api.github.com/organizations
          </Typography>

          <Typography>
            (some exemples: google, facebook, sauspiel, wherecloud ...)
          </Typography>

          <Typography isBold>
            Be careful, the API has a rate limit of 60 requests per hour, if you
            want have more requests, you can create a personal access token on
            your github account and use it the .env file
          </Typography>
        </>
      )}

      {allowDisplayData && (
        <Select
          value={orderValue}
          onChange={onSelectChange}
          options={[
            {
              label: "Created asc",
              value: "created;asc",
            },
            {
              label: "Created desc",
              value: "stars;desc",
            },
            {
              label: "Updated asc",
              value: "updated;asc",
            },
            {
              label: "Updated desc",
              value: "updated;desc",
            },
            {
              label: "Pushed asc",
              value: "pushed;asc",
            },
            {
              label: "Pushed desc",
              value: "pushed;desc",
            },
            {
              label: "Full name asc",
              value: "full_name;asc",
            },
            {
              label: "Full name desc",
              value: "full_name;desc",
            },
          ]}
        />
      )}

      <CardContainer>
        {allowDisplayData &&
          data.repoList.map((repo: any) => {
            return (
              <GitCard
                organizationName={organizationName}
                key={repo.id}
                title={repo.name}
                description={repo.description}
                language={repo.language}
                views={repo.watchers_count}
                forks={repo.forks_count}
                license={repo.license?.name || "No license"}
                lastUpdate={moment(repo.updated_at).format("DD/MM/YYYY")}
                homePageLink={repo.homepage ?? ""}
                subscribers={repo.stargazers_count ?? 0}
                openedIssues={repo.open_issues_count ?? 0}
              />
            );
          })}
      </CardContainer>

      {allowDisplayData && (
        <Pagination
          currentPage={page}
          onNextPageClick={onNextPageClick}
          onPreviousPageClick={onPreviousPageClick}
          hasNext={data?.hasNextPage}
        />
      )}

      {allowDisplayData && data?.repoList?.length === 0 && (
        <Typography>No repositories found for this organization </Typography>
      )}
      {isFetching && <Loader />}
      {isError && isFetching === false && (
        <Typography>
          An error occurred, please try with an another organization name or try
          again later if you reached the rate limit
        </Typography>
      )}
    </Content>
  );
};
