import React, { useEffect } from "react";
import { useItem } from "../../hooks/useItem";
const HomeComponent = () => {
  const { handleFetchList, list } = useItem();
  useEffect(() => {
    handleFetchList();
  }, [handleFetchList]);
  const items = list?.contend;
  console.log(items);
  return (
    <>
      <div>Home</div>
      {items?.map((item, key) => (
        <div key={key}>{item.item}</div>
      ))}
    </>
  );
};

export default HomeComponent;
