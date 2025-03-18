"use client";
import { useQuery, gql } from '@apollo/client';

const GET_ARTICLES = gql`
  query MyQuery2 {
    articles {
      nodes {
        articles {
          imageArticle {
            node {
              link
            }
          }
          description
          content
          title
        }
      }
    }
  }
`;

export interface Article {
  imageArticle: {
    node: {
      link: string;
    };
  };
  description: string;
  content: string;
  title: string;
}

interface ArticlesData {
  articles: {
    nodes: {
      articles: Article;
    }[];
  };
}

export function useArticles() {
  const { loading, error, data } = useQuery<ArticlesData>(GET_ARTICLES);
  
  const transformedArticles = data?.articles.nodes.map(node => ({
    imgSrc: node.articles.imageArticle.node.link,
    title: node.articles.title,
    date: "", 
    description: node.articles.description,
    containerBackgroundColor: "white",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "black",
  })) || [];

  return {
    loading,
    error,
    articles: transformedArticles
  };
}