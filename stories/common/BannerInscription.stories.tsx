import { Meta, StoryObj } from "@storybook/react";
import BannerInscription from "@/components/common/template/BannerInscription";

const meta: Meta<typeof BannerInscription> = {
  title: "Sections/BannerInscription",
  component: BannerInscription,
};

export default meta;

type Story = StoryObj<typeof BannerInscription>;

export const Default: Story = {
  args: {
    imageBackgroundSource: "https://picsum.photos/1200/400?text=Banner",
    title: "Rejoignez notre newsletter",
    description:
      "Recevez les dernières mises à jour et actualités directement par e-mail.",
    buttonLabel: "S'inscrire",
    buttonBackgroundColor: "#8BBA25",
    buttonTextColor: "white",
  },
};

export const CustomStyles: Story = {
  args: {
    imageBackgroundSource: "https://picsum.photos/1200/400?text=Custom+Banner",
    title: "Inscrivez-vous maintenant",
    description:
      "Ne manquez pas nos dernières nouveautés et offres exclusives.",
    buttonLabel: "Envoyer",
    buttonBackgroundColor: "#FF5722",
    buttonTextColor: "#FFFFFF",
    titleClassename: "text-red-500",
    descriptionClassename: "text-yellow-300",
    buttonClassename: "bg-red-600",
    inputClassename: "border-red-400",
  },
};

export const WithoutDescription: Story = {
  args: {
    imageBackgroundSource:
      "https://picsum.photos/1200/400?text=Banner+Sans+Description",
    title: "Abonnez-vous à nos offres",
    description: "",
    buttonLabel: "Go",
    buttonBackgroundColor: "#4CAF50",
    buttonTextColor: "#FFFFFF",
  },
};
