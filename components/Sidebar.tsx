"use client";
import { ChangeEvent, useState } from "react";
import { ChevronRight, ChevronDown, Check } from "react-feather";
import { genres } from "./utils/genreList";

const Sidebar = () => {
  const [activeSort, setActiveSort] = useState(false);
  const [activeWatch, setActiveWatch] = useState(false);
  const [activeFilter, setActiveFilter] = useState(true);
  const [filterShow, setFilterShow] = useState("Everything");
  const [isChecked, setIsChecked] = useState(true);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("2023-07-25");

  const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterShow(e.target.value);
  };
  return (
    <div className="p-4 min-w-[260px] max-w-[320px] hidden sm:block mt-8 w-[30%]">
      <div className="shadow-[0_0_5px_rgba(0,0,0,.5)] rounded-lg px-1 py-2 text-sm mb-3">
        <div
          className="flex w-full justify-between cursor-pointer"
          onClick={() => setActiveSort(!activeSort)}
        >
          <p className="font-bold">Sort</p>
          <ChevronRight className={`${activeSort ? "hidden" : "block"} w-4`} />
          <ChevronDown className={`${!activeSort ? "hidden" : "block"} w-4`} />
        </div>

        <div className={`${activeSort ? "block" : "hidden"}`}>
          <p>Sort by name</p>
          <p>Sort by year</p>
          <p>Sort by rating</p>
        </div>
      </div>

      <div className="shadow-[0_0_5px_rgba(0,0,0,.5)] rounded-lg px-1 py-2 text-sm mb-3">
        <div
          className="flex w-full justify-between items-center cursor-pointer"
          onClick={() => setActiveWatch(!activeWatch)}
        >
          <p className="font-bold">Where To Watch</p>
          <div className="flex items-center">
            <span className="text-[.6rem] bg-gray-300 mr-2 rounded-lg px-[10px] py-[5px] h-5 flex items-center font-light">
              28
            </span>
            <ChevronRight
              className={`${activeWatch ? "hidden" : "block"} w-4`}
            />
            <ChevronDown
              className={`${!activeWatch ? "hidden" : "block"} w-4`}
            />
          </div>
        </div>

        <div className={`${activeWatch ? "block" : "hidden"}`}>
          <p>Netflix</p>
          <p>Youtube</p>
          <p>HBO</p>
          <p>Hulu</p>
          <p>Amazon Prime</p>
          <p>Disney Plus</p>
        </div>
      </div>

      <div className="shadow-[0_0_5px_rgba(0,0,0,.5)] rounded-lg px-1 py-2 text-sm">
        <div
          className="flex w-full justify-between cursor-pointer px-2"
          onClick={() => setActiveFilter(!activeFilter)}
        >
          <p className="font-bold">Filters</p>
          <ChevronRight
            className={`${activeFilter ? "hidden" : "block"} w-4`}
          />
          <ChevronDown
            className={`${!activeFilter ? "hidden" : "block"} w-4`}
          />
        </div>
        <div className={`${activeFilter ? "block" : "hidden"} border-t pt-3`}>
          <div className="pb-2 border-b px-2">
            <p className="text-gray-400 flex items-center">
              Show Me{" "}
              <span className="ml-3 bg-gray-400 w-3 h-3 inline-flex  items-center justify-center text-[8px] text-white rounded-full">
                ?
              </span>
            </p>

            <div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="showMe"
                  value="Everything"
                  id="everything"
                  checked={filterShow == "Everything"}
                  onChange={onOptionChange}
                  className="hidden"
                />
                <label
                  htmlFor="everything"
                  className={`flex items-center text-[.8rem] ${
                    filterShow == "Everything" ? "font-semibold" : "font-normal"
                  }`}
                >
                  <div
                    className={`${
                      filterShow == "Everything" ? "bg-blue-300" : "bg-white"
                    } w-3 h-3 rounded-full flex items-center justify-center mr-1`}
                  >
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                  </div>
                  Everything
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="showMe"
                  value="NotSeen"
                  id="notSeen"
                  checked={filterShow == "NotSeen"}
                  onChange={onOptionChange}
                  className="hidden"
                />
                <label
                  htmlFor="notSeen"
                  className={`flex items-center text-[.8rem] ${
                    filterShow == "NotSeen" ? "font-semibold" : "font-normal"
                  }`}
                >
                  {" "}
                  <div
                    className={`${
                      filterShow == "NotSeen" ? "bg-blue-300" : "bg-white"
                    } w-3 h-3 rounded-full flex items-center justify-center mr-1`}
                  >
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                  </div>
                  Movies I Haven't Seen
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="showMe"
                  value="Seen"
                  id="seen"
                  checked={filterShow == "Seen"}
                  onChange={onOptionChange}
                  className="hidden"
                />
                <label
                  htmlFor="seen"
                  className={`flex items-center text-[.8rem] ${
                    filterShow == "Seen" ? "font-semibold" : "font-normal"
                  }`}
                >
                  {" "}
                  <div
                    className={`${
                      filterShow == "Seen" ? "bg-blue-300" : "bg-white"
                    } w-3 h-3 rounded-full flex items-center justify-center mr-1`}
                  >
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                  </div>
                  Movies I Have Seen
                </label>
              </div>
            </div>
          </div>

          <div className="px-2 pb-3 pt-2 border-b">
            <input
              type="checkbox"
              name="Availability"
              id="availability"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="hidden"
            />
            <label
              htmlFor="availability"
              className={`${
                isChecked ? "font-semibold" : "font-normal"
              } flex items-center`}
            >
              <div
                className={`flex items-center justify-center w-4 h-4 p-1 text-white ${
                  isChecked ? "bg-blue-300" : "bg-white"
                } mr-1 rounded-sm`}
              >
                <Check />
              </div>
              Search all availabilities?
            </label>
          </div>

          <div className="pt-3 px-2">
            <p className="text-gray-400">Release Dates</p>
            <div className="flex items-center mb-2">
              <div className="bg-blue-400 w-4 h-4 flex justify-center items-center rounded-sm mr-1">
                <Check className="w-3 h-3 text-white" />
              </div>
              Search all releases?
            </div>
            <div className="flex justify-between mb-2 items-center relative">
              <label htmlFor="fromDate" className="text-gray-300">
                from
              </label>
              <input
                type="date"
                id="fromDate"
                value={fromDate}
                className={`${
                  fromDate ? "text-black" : "text-transparent"
                } border rounded-lg focus:text-gray-600 p-1 bg-transparent`}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <div className="absolute right-0 bg-gray-300 h-[30px] w-7 -z-10 top-1/2 -translate-y-1/2 rounded-r-lg" />
            </div>
            <div className="flex justify-between items-center  border-b pb-3 relative">
              <label htmlFor="toDate" className="text-gray-300">
                to
              </label>
              <input
                type="date"
                id="toDate"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="text-gray-600 border rounded-lg p-1 bg-transparent"
              />
              <div className="absolute right-0 bg-gray-300 h-[30px] w-7 -z-10 top-0 rounded-r-lg" />
            </div>
            <div className="pt-3">
              <p className="text-gray-600 mb-3">Genres</p>
              <div className="flex flex-wrap">
                {genres.map((genre) => (
                  <div
                    key={genre.name}
                    className="border border-gray-400 w-max rounded-full px-[.75rem] py-[.25rem] mr-2 mb-2 font-semibold text-[.7rem]"
                  >
                    {genre.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
