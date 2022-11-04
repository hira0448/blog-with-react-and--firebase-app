import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
      </div>
      <div className="postTextContainer">
        今はReactの学習中です。これから頑張ってReactエンジニアとして活躍していきたいと思います。よろしくおねがいします。
      </div>
      <div className="nameAndDeleteButton">
        <h3>@HiraCode</h3>
        <button>削除</button>
      </div>
    </div>
  );
};

export default Home;
