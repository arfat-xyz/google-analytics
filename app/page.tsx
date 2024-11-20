import Link from "next/link";
import React from "react";

const MainPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="">NextJs with Google analytics</div>
        <span>By</span>
        <Link
          className="text-blue-500"
          target="_"
          href={`https://www.arfat.app/`}
        >
          Arfatur Rahman
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
