import React, { useCallback, useEffect, useState } from "react";

export default function Info({ init }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(init);
  const handleEdit = () => {
    setIsEdit(true);
  };

  const onChangeText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [isEdit]
  );
  const save = useCallback(() => {
    setIsEdit(false);
  }, []);

  const deletefunc = useCallback(() => {});
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {isEdit ? (
        <>
          <input type="text" value={text} onChange={(e) => onChangeText(e)} />
          <button onClick={save}>save</button>
        </>
      ) : (
        <>
          <p>{text}</p>
          <button onClick={handleEdit}>Edit</button>
          <button>Delete</button>
        </>
      )}
    </li>
  );
}
