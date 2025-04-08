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
          date
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
  date: string;
}

interface ArticlesData {
  articles: {
    nodes: {
      articles: Article;
    }[];
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date);
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const year = date.getFullYear();
  return `${day} ${capitalizedMonth} ${year}`;
}

export function useArticles() {
  const { loading, error, data } = useQuery<ArticlesData>(GET_ARTICLES);
  
  const transformedArticles = data?.articles.nodes.map(node => ({
    imgSrc: node.articles.imageArticle.node.link,
    title: node.articles.title,
    date: formatDate(node.articles.date),
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