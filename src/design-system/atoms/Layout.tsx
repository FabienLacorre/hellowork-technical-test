export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
}): JSX.Element => {
  return <div>{children}</div>;
};
