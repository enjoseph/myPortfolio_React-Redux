import React from "react";

// Redux
import { setIsActive } from "../../../../../../stores/projectsSlice";
import { useDispatch } from "react-redux";

export default function TabComponent({ index }) {
  const dispatch = useDispatch();


  return (
    <a
      key={index}
      onClick={() => {
        dispatch(setIsActive(index));
      }}
      id={index}
    >
      Tab {index}
    </a>
  );
}
