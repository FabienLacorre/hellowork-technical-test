import clsx from "clsx";
import "./Header.scss";
import { Typography } from "../atoms/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

export interface HeaderProps {
  className?: string;
  classNameCenterWrapper?: string;
  classNameUserHello?: string;
}

const Header = ({
  className: classNameProps,
  classNameCenterWrapper: classNameCenterWrapperProps,
}: HeaderProps) => {
  const className = clsx("ds-c-header", classNameProps);

  const classNameCenterWrapper = clsx(
    "ds-c-header--center-wrapper",
    classNameCenterWrapperProps
  );

  return (
    <div className={className}>
      <div className={classNameCenterWrapper}>
        <GitHubIcon />
        <Typography isBold>HELLO WORK TECHNICAL TEST</Typography>
      </div>
    </div>
  );
};

export default Header;
