// Libs

// Components
import { Typography } from "../atoms/Typography";

export default {
  title: "Design System/Atom/Typography",
  component: Typography,
  args: {},
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};

const sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

const PrimaryVariant = () => {
  return (
    <div>
      <Typography>{sentence}</Typography>
    </div>
  );
};

const BoldVariant = () => {
  return (
    <div>
      <Typography isBold>{sentence}</Typography>
    </div>
  );
};

const BarredVariant = () => {
  return (
    <div>
      <Typography isBarred>{sentence}</Typography>
    </div>
  );
};

export const SizeVariants = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Typography size="XS">{`XS: ${sentence}`}</Typography>

      <Typography size="S">{`S: ${sentence}`}</Typography>

      <Typography size="M">{`M: ${sentence}`}</Typography>

      <Typography size="L">{`L: ${sentence}`}</Typography>
    </div>
  );
};

export const ColorVariants = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Typography color="primary">{`Primary: ${sentence}`}</Typography>

      <Typography color="secondary">{`Secondary: ${sentence}`}</Typography>
    </div>
  );
};

export const Primary = PrimaryVariant.bind({});
export const Bold = BoldVariant.bind({});
export const Barred = BarredVariant.bind({});
export const Sizes = SizeVariants.bind({});
export const Colors = ColorVariants.bind({});
