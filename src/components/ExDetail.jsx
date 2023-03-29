import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData, exerciseOptions, youTOptions } from "../utils/FetchData";
import Detail from './Detail';
import ExerciseVideo from './ExerciseVideo';
import SimilarEx from './SimilarEx';

const ExDetail =  () => {
  const {id} = useParams();
  const [exeDetail, setExeDetail] = useState({});
  const [yt, setYt] = useState([]);

  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentMuscle, setEquipmentMuscle] = useState([]);
  
  useEffect(() => {
    const f1=async()=>{
      const url1 = "https://exercisedb.p.rapidapi.com/exercises";
      const url2 = "https://youtube-search-and-download.p.rapidapi.com";
      const exDetData = await fetchData(`${url1}/exercise/${id}`,exerciseOptions);
      setExeDetail(exDetData)
      console.log(exDetData.name)

      const exerciseVideoData =  await fetchData(`${url2}/search?query=${exDetData.name}`,youTOptions)
      setYt(exerciseVideoData.contents);
      console.log(exerciseVideoData.contents);


      const targetz=await fetchData(`${url1}/target/${exDetData.target}`,exerciseOptions)
      setTargetMuscle(targetz)
      const eq=await fetchData(`${url1}/equipment/${exDetData.equipment}`,exerciseOptions)
      setEquipmentMuscle(eq)
      console.log(eq,targetz)
    }
    f1();
  
    
  }, [id]);
  return (
    <div>
      <Detail detail={exeDetail}/>
      <ExerciseVideo video={yt} name={exeDetail.name}/>
      <SimilarEx eq={equipmentMuscle} tar={targetMuscle}/>
    </div>
  )
}

export default ExDetail