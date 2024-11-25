import React from "react";
import { useForm } from "react-hook-form";

export default function FormPrac() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onValid = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수 항목입니다.",
          })}
        />

        {errors.username?.message}
        <br />
        <input
          type="text"
          placeholder="나이"
          {...register("age", {
            pattern: {
              value: /^[0-9]*$/,
              message: "0이상의 숫자만 입력 가능합니다",
            },
          })}
        />
        {errors.age?.message}
        <button>제출</button>
      </form>
    </div>
  );
}
