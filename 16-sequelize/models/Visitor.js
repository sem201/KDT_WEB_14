// @param {import('sequelize').Sequelize} Sequelize : sequelize 라이브러리에서 Sequlize 클래스를 가져와서 명시

/**
 * visitor 모델을 정의하는 함수
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const Visitor = (Sequelize, DataTypes) => {
  //Sequelize.define(param1, param2, param3) (13번째 줄 참고)
  // param1 : 모델 이름 설정
  // param2 : 컬럼 정의
  // param3 : 모델 옵션 정의
  return Sequelize.define(
    "visitor",
    {
      id: {
        // id int not null primary key auto_increment
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name varchar(10) not null
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment midumtext
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      // tableName: "visitor2", // 실제 DB 테이블 이름 명시, 값을 안주면 param1 + s 붙여서 자동으로 테이블 name 생성
      freezeTableName: true, // param1 에 있는 모델 이름그대로 테이블 이름 고정
      timestamps: false,
      // - 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만들어서 기록함
    }
  );
};

module.exports = Visitor;
