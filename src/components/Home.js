import React, { useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const getposts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data);
      console.log(data.docs);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getposts();
  }, []);

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>

        <div className="postTextContainer">
          今はReactの学習中です。これから頑張ってReactエンジニアとして活躍していきたいと思います。よろしくおねがいします。
        </div>
        <div className="nameAndDeleteButton">
          <h3>@HiraCode</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
