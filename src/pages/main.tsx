import React from "react";

const Main = (): JSX.Element => {
  return (
    <div className="MainWrapper">
      <div className="header">
        <div className="img_tag">이미지</div>
        <div className="search_bar">
          <div className="logo">로고</div>
          <form action="get">
            <input type="text" placeholder="검색어를 입력하세요" />
            <button>검색</button>
          </form>
        </div>
        <div className="menu_bar">메뉴바</div>
      </div>
    </div>
  );
};

export default Main;
