const Food = ({ food }) => {
  return (
    <div>
      <div>
        이 음식은 <span style={{ color: "red" }}>{food}</span>라고 하는
        음식입니다 맛있어요~
      </div>
    </div>
  );
};

Food.defaultProps = {
  food: "기본값",
};

export default Food;
