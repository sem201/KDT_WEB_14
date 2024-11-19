import img from "./book.png";
const BestSeller = ({ title, author, price, type }) => {
  return (
    <>
      <div className="mainContainer">
        <div className="title">이번 주 베스트 셀러</div>
        <img src={img} alt="" />
        <div className="infoContainer">
          <p>{title}</p>
          <p>저자 : {author}</p>
          <p>판매가 : {price}원</p>
          <p>구분 : {type}</p>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
