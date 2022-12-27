import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftArrowIcon from "../assets/LeftArrowIcon";
import { CustomButton } from "../Components/CustomButton";
import { SearchResults } from "../Components/SearchResults";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../Controllers/localStorageControllers";

export default function Chooser() {
  const navigate = useNavigate();

  const [searchBarInput, setSearchBarInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [favReason, setFavReason] = useState("");

  const fetchNPMPackages = async () => {
    searchBarInput !== ""
      ? await fetch(`https://api.npms.io/v2/search?q=${searchBarInput}`)
          .then((data) => data.json())
          .then((response) => setSearchResults(response.results))
      : setSearchResults([]);
  };

  useEffect(() => {
    fetchNPMPackages();
  }, [searchBarInput]);

  const addToStorageAndNavigate = (value) => {
    const temp = getLocalStorageData("fav-npm-object");
    if (!temp.map((object) => object.name).includes(value.name)) {
      temp.push(value);
      setLocalStorageData("fav-npm-object", temp);
      setFavReason("");
      setSelectedPackage("");
      navigate("/");
    }
  };

  return (
    <div className="Chooser flex flex-col ">
      <LeftArrowIcon
        callback={() => {
          navigate("/");
        }}
        color={"text-blue-400 hover:text-blue-500"}
      />
      <label className="text-gray-500 mt-3 font-semibold">
        Search for NPM packages
      </label>
      <input
        className="border border-gray-500 rounded mt-3 px-2 py-1"
        placeholder="react"
        onChange={(e) => {
          setSearchBarInput(e.target.value);
        }}
      />
      <div className="w-full h-44 border border-gray-400 mt-4 flex flex-col overflow-scroll px-2 rounded">
        {searchResults?.length > 0 ? (
          searchResults.map((element, index) => {
            return (
              <SearchResults
                key={element?.package?.name + index}
                name={element?.package?.name}
                index={index}
                onChange={(e) => {
                  setSelectedPackage(e?.target?.value);
                }}
              />
            );
          })
        ) : (
          <div className="flex w-full h-full items-center justify-center">
            <label className="text-gray-500 text-2xl">
              No Search results found
            </label>
          </div>
        )}
      </div>
      <textarea
        className="w-full mt-4 border border-gray-400 rounded py-2 px-1"
        placeholder="Mention the reason for liking this package here"
        rows={10}
        onChange={(e) => {
          setFavReason(e.target.value);
        }}
      />
      <div className="mt-3 w-full flex justify-end">
        <CustomButton
          label={"Submit"}
          onClick={() => {
            addToStorageAndNavigate({ name: selectedPackage, reason: favReason });
          }}
        />
      </div>
    </div>
  );
}
