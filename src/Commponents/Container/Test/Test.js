import React, { Component } from "react";

//component import
import Thumbnail from "../../Articles/SinglePost/Thumbnail/Thumbnail";
import GridHolder from "../../UI/GridHolder/GridHolder";

class Test extends Component {
    componentDidMount() {
        this.props.test();
    }
    render() {
        const topNewsArticles = this.props.topNews.map((article) => {
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
        return (
            <div>
                <GridHolder> {topNewsArticles}</GridHolder>
            </div>
        );
    }
}

export default Test;
