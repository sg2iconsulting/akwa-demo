import ImageWithText from "../molecules/ImageWithText";

interface PresentationContent {
  vision: {
    title: string;
    description: string;
    image: string;
  };
  mission: {
    title: string;
    description: string;
    image: string;
  };
}

interface PresentationSectionProps {
  content: PresentationContent;
}

export default function PresentationSection({
  content,
}: PresentationSectionProps) {
  return (
    <section className="flex flex-col gap-8 lg:gap-12 xl:gap-24 xl:px-16">
      <ImageWithText
        title={content.vision.title}
        description={content.vision.description}
        imageSrc={content.vision.image}
        imageAlt="AKWA Vision"
        className="p-4 md:p-8"
        imageClassname="md:aspect-[2.2/1] w-full object-cover rounded-3xl "
      />

      <ImageWithText
        title={content.mission.title}
        description={content.mission.description}
        imageSrc={content.mission.image}
        imageAlt="AKWA Mission"
        imagePosition="left"
        className="px-4 md:px-8"
        imageClassname="w-full object-cover rounded-3xl object-right"
      />
    </section>
  );
}
