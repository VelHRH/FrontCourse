import { useEffect, useState } from "react";
import { Buttons } from "./components/Buttons";
import { Display } from "./components/Display";

function App() {
 const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
 const [isStarted, setIsStarted] = useState(false);
 const [intervalId, setIntervalId] = useState(0);
 const [isPaused, setIsPaused] = useState(false);
 const [round, setRound] = useState(1);
 const [results, setResults] = useState([
  { round: 0, h: 0, m: 0, s: 0, ms: 0, sum: 0, total: 0 },
 ]);

 useEffect(() => {
  !isStarted && setTime({ h: 0, m: 0, s: 0, ms: 0 });
 }, [isStarted]);

 let incrementH = time.h;
 let incrementM = time.m;
 let incrementS = time.s;
 let incrementMS = time.ms;
 const start = () => {
  setIsStarted(true);
  if (incrementM === 60) {
   incrementH++;
   incrementM = 0;
  }
  if (incrementS === 60) {
   incrementM++;
   incrementS = 0;
  }
  if (incrementMS === 100) {
   incrementS++;
   incrementMS = 0;
  }
  incrementMS++;
  setTime({ h: incrementH, m: incrementM, s: incrementS, ms: incrementMS });
 };

 const save = () => {
  const timePassed =
   results[round - 1].sum +
   results[round - 1].ms * 10 +
   results[round - 1].s * 1000 +
   results[round - 1].m * 1000 * 60 +
   results[round - 1].h * 1000 * 3600;
  console.log(timePassed);
  const cur =
   time.ms * 10 + time.s * 1000 + time.m * 1000 * 60 + time.h * 1000 * 3600;
  var msec = cur - timePassed;
  var hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  var mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  var ss = Math.floor(msec / 1000);
  msec -= ss * 1000;
  setResults([
   ...results,
   {
    round: round,
    h: hh,
    m: mm,
    s: ss,
    ms: msec / 10,
    sum: timePassed,
    total: cur - timePassed,
   },
  ]);
 };

 return (
  <>
   <Display time={time} />
   <Buttons
    start={start}
    time={time}
    setTime={setTime}
    isStarted={isStarted}
    intervalId={intervalId}
    setIntervalId={setIntervalId}
    setIsStarted={setIsStarted}
    isPaused={isPaused}
    setIsPaused={setIsPaused}
    round={round}
    setRound={setRound}
    save={save}
    results={results}
    setResults={setResults}
   />
  </>
 );
}

export default App;
