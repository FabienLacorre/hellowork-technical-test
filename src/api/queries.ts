import { useQuery } from "react-query";
import { axiosClient } from "./axios";

const URL = "https://api.github.com";

const API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

const queryOrganizationRepositoriesByName = async (
  organizationName: string,
  order: string,
  page: number
) => {
  const [orderBy, orderDirection] = order.split(";");

  const params = {
    per_page: 10,
    page,
    direction:
      orderDirection === "" || orderDirection === undefined
        ? "asc"
        : orderDirection,
    sort: orderBy === "" ? "created" : orderBy,
  };

  const response = await axiosClient.get(
    `${URL}/orgs/${organizationName}/repos`,
    {
      headers: API_TOKEN
        ? {
            Authorization: `Bearer ${API_TOKEN}`,
          }
        : {},
      params,
    }
  );
  return {
    repoList: response.data,
    hasNextPage:
      response.headers.link && response.headers.link.includes('rel="next"'),
  };
};

const queryContributorsByRepository = async ({
  owner,
  repositoryName,
}: {
  owner: string;
  repositoryName: string;
  enabled?: boolean;
}) => {
  const response = await axiosClient.get(
    `${URL}/repos/${owner}/${repositoryName}/contributors`,
    {
      headers: API_TOKEN
        ? {
            Authorization: `Bearer ${API_TOKEN}`,
          }
        : {},
    }
  );
  return response.data;
};

export const useQueryOrganizationRepositoriesByName = ({
  organizationName,
  page,
  order,
  enabled = true,
}: {
  organizationName: string;
  page: number;
  order: string;
  enabled?: boolean;
}) => {
  return useQuery(
    [page, organizationName, order],
    async () => {
      const response = await queryOrganizationRepositoriesByName(
        organizationName,
        order,
        page
      );
      return response;
    },
    {
      enabled: page > 0 && enabled && organizationName !== "",
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
      retry: 0,
    }
  );
};

export const useQueryContributorsByRepository = ({
  owner,
  repositoryName,
  enabled = true,
}: {
  owner: string;
  repositoryName: string;
  enabled?: boolean;
}) => {
  return useQuery(
    [owner, repositoryName],
    async () => {
      const response = await queryContributorsByRepository({
        owner,
        repositoryName,
      });
      return response;
    },
    {
      enabled: enabled && repositoryName !== "",
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
      retry: 0,
    }
  );
};
