import React from "react";

function Article({ title, date = "January 1, 1970", preview, time }) {
  let emoji = "";
  if (time < 30) {
    const cups = Math.ceil(time / 5);
    emoji = "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(time / 10);
    emoji = "🍱".repeat(bentos);
  }
  return (
    <>
      <article>
        <h3>{title}</h3>

        <small>{date}</small>
        <p>{preview}</p>
      </article>
    </>
  );
}
export default Article;
