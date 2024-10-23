import { Typography } from "../design-system/atoms/Typography";
import { Card } from "../design-system/molecules/Card";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ForkLeftOutlinedIcon from "@mui/icons-material/ForkLeftOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import clsx from "clsx";

import "./GitCard.scss";
import { useState } from "react";
import { Collapse } from "../design-system/atoms/Collapse";
import { useQueryContributorsByRepository } from "../api/queries";

export interface GitCardProps {
  title: string;
  organizationName: string;
  description: string;
  language: string;
  views: number;
  forks: number;
  license: string;
  lastUpdate: string;
  homePageLink: string;
  subscribers: number;
  openedIssues: number;
}

export const GitCard = ({
  title,
  description,
  language,
  views,
  forks,
  license,
  lastUpdate,

  organizationName,
  homePageLink,
  subscribers,
  openedIssues,
}: GitCardProps) => {
  const cardClassName = clsx("app-c-git-card");
  const footerItemClassName = clsx("app-c-git-card__footer-item-container");
  const footerIconClassName = clsx("app-c-git-card__footer-icon");
  const footerClassName = clsx("app-c-git-card__footer");
  const collapseClassName = clsx("app-c-git-card__collapse-container");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data, isFetching } = useQueryContributorsByRepository({
    owner: organizationName,
    repositoryName: title,
    enabled: isOpen,
  });

  const onClickCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card className={cardClassName} onClick={onClickCard}>
      <Typography isBold>{title}</Typography>
      <Typography size="S">{description}</Typography>

      <Collapse isOpen={isOpen}>
        <div className={collapseClassName}>
          {homePageLink !== "" && (
            <a
              style={{ color: "lightblue" }}
              href={homePageLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Typography size="XS">{`Home page: ${homePageLink}`}</Typography>
            </a>
          )}

          <Typography size="XS">
            {`Subscriber: ${subscribers.toString()}`}
          </Typography>
          <Typography size="XS">
            {`Opened issue: ${openedIssues.toString()}`}
          </Typography>
          <Typography size="XS">
            Contributors and number of contributions:
          </Typography>

          {isFetching === true && (
            <Typography size="XS">Loading contributors...</Typography>
          )}

          {data && isFetching === false && data.length === 0 && (
            <Typography size="XS">No contributors</Typography>
          )}

          {data && isFetching === false && data.length > 0 && (
            <ul>
              {data &&
                data.map((contributor: any) => {
                  return (
                    <li key={contributor.id}>
                      <Typography size="XS">
                        {contributor.login} : {contributor.contributions}
                      </Typography>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </Collapse>

      <div className={footerClassName}>
        <div className={footerItemClassName}>
          <CircleIcon className={footerIconClassName} />
          <Typography size="XS" color="secondary">
            {language}
          </Typography>
        </div>

        <div className={footerItemClassName}>
          <RemoveRedEyeOutlinedIcon className={footerIconClassName} />
          <Typography size="XS" color="secondary">
            {views}
          </Typography>
        </div>

        <div className={footerItemClassName}>
          <ForkLeftOutlinedIcon className={footerIconClassName} />
          <Typography size="XS" color="secondary">
            {forks}
          </Typography>
        </div>

        <div className={footerItemClassName}>
          <BalanceOutlinedIcon className={footerIconClassName} />
          <Typography size="XS" color="secondary">
            {license}
          </Typography>
        </div>

        <div className={footerItemClassName}>
          <CalendarMonthOutlinedIcon className={footerIconClassName} />
          <Typography size="XS" color="secondary">
            {lastUpdate}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
