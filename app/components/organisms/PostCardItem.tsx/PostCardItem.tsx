import React from "react";
import { motion } from "framer-motion";
import Heading from "../../atoms/Heading/Heading";
import PostCard from "../../molecules/PostCard/PostCard";
import ItemCardList from "../../molecules/ItemCardList/ItemCardList";

export interface PostItem {
  imgSrc: string;
  title: string;
  date: string;
  url?: string;
  description?: string;
  containerBackgroundColor: string;
  containerBorderStyle: string;
  textColor: string;
}

export interface PostCardItemProps {
  items: PostItem[];
  title: string;
  titleTextColor?: string;
  backgroundItemColor?: string;
  backgroundButtonColor?: string;
  buttonTextColor?: string;
  label: string;
}

const PostCardItem = ({
  title= "Actualités",
  items,
  titleTextColor,
  backgroundItemColor,
  backgroundButtonColor,
  buttonTextColor,
  label,
}: PostCardItemProps) => {
  return (
    <div className="w-full h-full max-w-[2000px] mx-auto flex flex-col gap-4 lg:gap-7 px-5 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading
          tag="h2"
          className="font-black w-full text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-poppins dark:text-white"
          style={{ color: titleTextColor || undefined }}
        >
          {title}
        </Heading>
      </motion.div>

      <div className="flex flex-col xl:flex-row mx-auto xl:justify-between items-center w-full gap-3 xl:gap-0">
        <PostCard
          imgSrc={items[0].imgSrc}
          date={items[0].date}
          title={items[0].title}
          description={items[0].description}
          backgroundItemColor={backgroundItemColor}
          backgroundButtonColor={backgroundButtonColor}
          buttonTextColor={buttonTextColor}
          label={label}
        />
          <ItemCardList
            items={items.slice(1).map(item => ({
              imgSrc: item.imgSrc,
              title: item.title,
              date: item.date,
              containerBackgroundColor: "white",
              containerBorderStyle: "1px solid #F1F1F1",
              textColor: "black",
            }))}
            classename="w-full xl:w-[35%] flex flex-col justify-between gap-2 xl:gap-4"
          />
      </div>
    </div>
  );
};

export default PostCardItem;
