// (임시) DB에서 전체 댓글 목록을 받았다고 가정
exports.commentInfos = () => {
  return [
    {
      id: 1,
      userid: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요~~",
    },
    {
      id: 2,
      userid: "lucky",
      date: "2022-09-31",
      comment: "ㅎㅇ",
    },
    {
      id: 3,
      userid: "happy",
      date: "2025-01-31",
      comment: "댓글 작성했음",
    },
    {
      id: 4,
      userid: "hlddwdw",
      date: "2010-02-20",
      comment: "이벤트 완료",
    },
  ];
};
