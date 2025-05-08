import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/utils/cn";
import Skeleton from "../atoms/Skeleton";
import Heading from "../atoms/Heading";
import PostCard from "../molecule/PostCard";
import ItemCardList from "../molecule/ItemCardList";

export interface PostItem {
  imgSrc: string;
  title: string;
  date: string;
  url?: string;
  description?: string;
  imageClassename?: string;
  dateClassename?: string;
  titleClassename?: string;
  descriptionClassename?: string;
  buttonClassename?: string;
  containerBackgroundColor: string;
  containerBorderStyle: string;
  textColor: string;
}

export interface PostCardItemProps {
  items: PostItem[];
  title: string;
  titleClassename?: string;
  titleTextColor?: string;
  backgroundItemColor?: string;
  backgroundButtonColor?: string;
  buttonTextColor?: string;
  labelButton: string;
  isLoading?: boolean;
}

const PostCardSkeleton = () => (
  <div className="w-full xl:w-[60%] bg-white rounded-lg shadow-md">
    <div className="flex flex-col h-full">
      <Skeleton className="w-full h-52 md:h-64 lg:h-80 rounded-t-lg" />
      <div className="p-4 md:p-6 flex flex-col gap-3">
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-full h-7" />
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-2/4 h-4" />
        <Skeleton className="w-28 h-10 mt-2 rounded-full" />
      </div>
    </div>
  </div>
);

const ItemCardListSkeleton = () => (
  <div className="w-full xl:w-[35%] flex flex-col justify-between gap-2 xl:gap-4">
    {[...Array(5)].map((_, index) => (
      <div key={index} className="flex gap-3 bg-white p-2 rounded-lg shadow-sm">
        <div className="flex flex-col gap-2 flex-grow">
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5" />
        </div>
        <Skeleton className="w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0 rounded" />
      </div>
    ))}
  </div>
);

const PostCardItem = ({
  title = "Actualités",
  titleClassename,
  items,
  titleTextColor,
  backgroundItemColor,
  backgroundButtonColor,
  buttonTextColor,
  labelButton,
  isLoading = false,
}: PostCardItemProps) => {
  return (
    <div className="w-full h-full max-w-[2000px] mx-auto flex flex-col gap-4 lg:gap-7 px-5 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {isLoading ? (
          <Skeleton className="w-44 h-10 md:h-12 xl:h-14" />
        ) : (
          <Heading
            tag="h2"
            className={cn(
              "font-black w-full text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-poppins dark:text-white",
              titleClassename
            )}
            style={{ color: titleTextColor || undefined }}
          >
            {title}
          </Heading>
        )}
      </motion.div>

      <div className="flex flex-col xl:flex-row mx-auto xl:justify-between items-center w-full gap-3 xl:gap-0">
        {isLoading || items.length == 0 ? (
          <>
            <PostCardSkeleton />
            <ItemCardListSkeleton />
          </>
        ) : (
          <>
            <PostCard
              imgSrc={items[0].imgSrc}
              date={items[0].date}
              title={items[0].title}
              description={items[0].description}
              imageClassename={cn(
                "object-cover w-full h-full",
                items[0].imageClassename
              )}
              dateClassename={cn(
                "text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]",
                items[0].dateClassename
              )}
              titleClassename={cn(
                "text-[15px] md:text-[23px] lg:text-2xl xl:text-[28px] 2xl:text-[36px] font-bold",
                items[0].titleClassename
              )}
              descriptionClassename={cn(
                "text-[10px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium line-clamp-2",
                items[0].descriptionClassename
              )}
              buttonClassename={cn(
                "px-6 py-2 w-[200px] rounded-full",
                items[0].buttonClassename
              )}
              backgroundItemColor={backgroundItemColor}
              backgroundButtonColor={backgroundButtonColor}
              buttonTextColor={buttonTextColor}
              labelButton={labelButton}
            />
            <ItemCardList
              items={items.slice(1).map((item) => ({
                imgSrc: item.imgSrc,
                title: item.title,
                date: item.date,
                imageClassename: cn(
                  "w-full h-full rounded-[8px] object-cover",
                  item.imageClassename
                ),
                dateClassename: cn(
                  "text-[8px] md:text-[12px] xl:text-[13px]",
                  item.dateClassename
                ),
                titleClassename: cn(
                  "text-[10px] md:text-[14px] xl:text-[15px] font-bold line-clamp-2",
                  item.titleClassename
                ),
                containerBackgroundColor: "white",
                containerBorderStyle: "1px solid #F1F1F1",
                textColor: "black",
              }))}
              classename="w-full xl:w-[35%] flex flex-col justify-between gap-2 xl:gap-4"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PostCardItem;
