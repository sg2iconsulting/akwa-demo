import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ResponsiveImage from "../atoms/responsive-image";
import ImageWithText from "../molecules/ImageWithText";
import Timeline, { TimelineItem } from "./timeline";

interface HistorySectionProps {
  timelineItems: TimelineItem[];
  initialActiveIndex?: number;
}

export default function HistorySection({
  timelineItems,
  initialActiveIndex = 0,
}: HistorySectionProps) {
  return (
    <section className="flex flex-col gap-8 xl:px-16">
      {/* Main content */}

      <ImageWithText
        title="Historique"
        description="Une histoire qui se confond avec celle du Maroc et qui témoigne
            d'une vision audacieuse et entreprenante qui fait de AKWA Group un
            fleuron de l'économie nationale."
        imageSrc="/akwagroup/images/akwa-about3.jpg"
        imageAlt="AKWA Vision"
        className="p-4 md:p-8"
        imageClassname="md:aspect-[2.2/1] w-full object-cover rounded-3xl "
      />

      {/* Timeline */}
      <Timeline items={timelineItems} initialActiveIndex={initialActiveIndex} />
    </section>
  );
}
