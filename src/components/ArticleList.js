import React from "react";
import Article from "./Article";

function ArticleList() {
  const articles = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ];

  return (
    <>
      <main>
        {articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            date={article.date}
            preview={article.preview}
            time={article.minutes}
          />
        ))}
      </main>
    </>
  );
}
export default ArticleList;
