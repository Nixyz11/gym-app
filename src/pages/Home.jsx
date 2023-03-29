import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Part from "../components/Part";
import { fetchData, exerciseOptions } from "../utils/FetchData";
import Exercise from "./Exercise";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [allEx, setAllEx] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  const submitHandle = async () => {
    if (searchTerm) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const filterData = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm)
      );
      setSearchTerm("");
      setAllEx(filterData);
      console.log(allEx);
    }
  };
  useEffect(() => {
    const fetchExData = async () => {
      const bodyPart = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPart]);
      // console.log(bodyParts)
    };

    fetchExData();
  }, []);
  return (
    <div>
      <div className="items-center justify-center flex flex-col  border border-t-8">
        <p className="text-emerald-800 text-2xl">
          Awesome exercises you should know!
        </p>
        <div className="m-4 flex">
          <input
            className="rounded-l-lg w-[350px] p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            placeholder="exercise/equipment/bodyPart"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value.toLowerCase());
            }}
          />
          <button
            className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
            onClick={submitHandle}
          >
            Search
          </button>
        </div>
        <div className="p-5 flex flex-row flex-wrap justify-between border mb-5 rounded-lg border-emerald-700 w-3/4">
          {bodyParts.map((pb, i) => (
            <Part part={pb} key={i} setSearchTerm={setSearchTerm} />
          ))}
        </div>
       
      </div>
      {allEx ? <Exercise ex={allEx} /> : <Loading />}
    </div>
  );
};

export default Home;
