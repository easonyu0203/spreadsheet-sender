import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "./BoardRows";

type Props = {
  rows: Row[];
  setRows: React.Dispatch<React.SetStateAction<Row[]>>;
};

const BoardFooter = ({ rows, setRows }: Props) => {
  const [searchVal, setSearchVal] = useState<string>("");

  useEffect(() => {
    if (searchVal === "") {
      rows.forEach((row) => (row.show = true));
    } else {
      rows.forEach((row) => {
        row.show = false;
        row.data.forEach((entry) => {
          if (entry.includes(searchVal)) {
            row.show = true;
          }
        });
      });
    }
    setRows([...rows]);
  }, [searchVal]);

  return (
    <div className=" flex-initial flex justify-between pr-8 pl-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="p-1 pl-4 bg-[#F6F6F6] text-sm rounded-lg"
          placeholder="Search"
          type="text"
          name="name"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </form>
      <Link to="/mail-write">
      <button className=" bg-bPurple text-bWhite w-28 rounded py-[2px]">
        Next
      </button>
      </Link>
    </div>
  );
};

export default BoardFooter;
