import React from "react";
import { CustomButton } from "../Components/CustomButton";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import {
  getLocalStorageData,
  initLocalStorageForData,
} from "../Controllers/localStorageControllers";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getLocalStorageData("fav-npm-object")) {
      initLocalStorageForData("fav-npm-object");
    }
  });

  return (
    <div className="Welcome">
      <div className="w-full flex justify-between">
        <h1 className="font-semibold text-3xl text-gray-600">
          Welcome to Fav NPM Packages
        </h1>
        <CustomButton
          label={"Add Fav"}
          color={"bg-[#74f]"}
          onClick={() => {
            navigate("/Chooser");
          }}
        />
      </div>
      <div className="w-full h-72 mt-4 border-2 border-gray-600 rounded flex flex-col items-center justify-center">
        <label className="text-xl">
          You don't have any favs yet. Please add
        </label>
        <CustomButton
          label={"Add Fav"}
          color={"bg-[#74f] mt-12"}
          onClick={() => {
            navigate("/Chooser");
          }}
        />
      </div>
    </div>
  );
}
