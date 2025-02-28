// import type { Meta, StoryObj } from "@storybook/react";
// import Navbar from "./Navbar";

// const meta: Meta<typeof Navbar> = {
//   title: "organisms/Navbar",
//   component: Navbar,
// };

// export default meta;

// type Story = StoryObj<typeof Navbar>;

// export const Default: Story = {};

import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => {

    return (
      <Navbar />
    );
  },
};
