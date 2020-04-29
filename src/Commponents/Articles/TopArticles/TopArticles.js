import React from "react";

//commponents import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Thumbnail from "../SinglePost/Thumbnail/Thumbnail";
import Spinner from "../../UI/Spinner/Spinner";

//utils import
import classes from "./TopArticles.module.css";

const TopArticles = (props) => {
  const { topNews, loading, activeCountry } = props;
  // Setting up title country
  let country = "";
  if (activeCountry === "US") {
    country = "United States";
  } else if (activeCountry === "GB") {
    country = "Great Britain";
  }

  let holderClass = "LoaderHolder";
  let topNewsArticles = <Spinner />;
  if (!loading) {
    // maping over fetched data
    topNewsArticles = topNews.map((article) => {
      const { id, title, urlToImage, description } = article;
      return (
        <Thumbnail
          key={id}
          id={id}
          title={title}
          urlToImage={urlToImage}
          description={description}
        />
      );
    });
    holderClass = "Articles";
  }

  return (
    <Auxiliary>
      <h1>{"Top news from " + country}</h1>
      <div className={classes[holderClass]}>{topNewsArticles}</div>
    </Auxiliary>
  );
};

export default TopArticles;
