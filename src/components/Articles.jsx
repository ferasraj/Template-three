import { articleData } from "../assets/assets.js";
import ArticleCard from "./ArticleCard";
const Articles = () => {
  return (
    <section id="articles">
      <div className="articles py-primary relative">
        <h2 className="main-title uppercase">Articles</h2>
        <div className="container">
          <div className="grid grid-250 gap-10">
            {articleData.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
      <div className="spikes relative"></div>
    </section>
  );
};

export default Articles;
