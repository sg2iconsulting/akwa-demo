"use client";
import React from "react";
import PostCardItem from "../components/organisms/PostCardItem.tsx/PostCardItem";
import { useArticles } from "../../hook/useArticles";

const dropdownItems = [
  {
    menuItem: "Home",
    link: "#",
  },
  {
    menuItem: "Profile",
    link: "#",
  },
  {
    menuItem: "About",
    link: "#",
  },
  {
    menuItem: "Contact",
    link: "#",
  },
];

const DemoPage = () => {
  const { loading, error, articles } = useArticles();

  console.log("articles : ", articles);
  if (loading) {
    return (
      <div className="flex flex-col gap-16 md:gap-24 xl:gap-32">
        <div className="flex flex-col gap-16 md:gap-24 xl:gap-32">
          <PostCardItem
            title="Actualités"
            items={[]}
            titleTextColor="#052337"
            backgroundButtonColor="#19A0BF"
            buttonTextColor="white"
            labelButton="Lire plus"
            backgroundItemColor="#052337"
            isLoading={true}
          />
        </div>
      </div>
    );
  }
  if (error) return <div>Error loading articles: {error.message}</div>;

  if (articles.length === 0) return <div>No articles found</div>;

  return (
    <div className="flex flex-col gap-16 md:gap-24 xl:gap-32">
      <div className="flex flex-col gap-16 md:gap-24 xl:gap-32">
        <PostCardItem
          title="Actualités"
          items={articles}
          titleTextColor="#052337"
          backgroundButtonColor="#19A0BF"
          buttonTextColor="white"
          labelButton="Lire plus"
          backgroundItemColor="#052337"
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default DemoPage;
