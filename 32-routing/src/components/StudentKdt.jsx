import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function StudentKdt() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const name = useParams().student;
  const search = searchParams.get("name");

  return (
    <>
      <p>학생 이름은 {name} 입니다.</p>
      {search ? <div>실제이름은 {search}입니다</div> : <></>}
      <button onClick={() => navigate(-1)}>이전페이지로</button>
    </>
  );
}
