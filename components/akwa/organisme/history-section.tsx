import ImageWithText from "@/components/akwa/molecule/ImageWithText";
import Timeline, { TimelineItem } from "./timeline";

interface HistorySectionProps {
  timelineData: TimelineItem[];
  historique: {
    title: string;
    description: string;
    image: string;
  };
  initialActiveIndex?: number;
}

export default function HistorySection({
  historique,
  timelineData,
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
      <Timeline items={timelineData} initialActiveIndex={initialActiveIndex} />
    </section>
  );
}
