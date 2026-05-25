import { useEffect, useContext } from "react";
import {  differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../contexts/CyclesContext";
// 


export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed} = useContext(CyclesContext);
  

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  
    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;
  
    const minutes = String(minutesAmount).padStart(2, "0");
    const seconds = String(secondsAmount).padStart(2, "0");
  
    useEffect(() => {
      let interval: number;
  
      if (activeCycle) {
        interval = setInterval(() => {
          const secondsDifference = differenceInSeconds(
            new Date(),
            new Date (activeCycle.startDate),
          );
  
          if (secondsDifference >= totalSeconds) {
            markCurrentCycleAsFinished();

            setSecondsPassed(totalSeconds);
            clearInterval(interval);
          } else {
            setSecondsPassed(secondsDifference);
          }
        }, 1000);
      }
      return () => {
        clearInterval(interval);
      };
    }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished, setSecondsPassed]);

    useEffect(() => {
      if (activeCycle) {
        document.title = `${minutes}:${seconds}`;
      }
    }, [minutes, seconds, activeCycle]);

    return (
        <div className="font-mono text-9xl line-height-4 flex items-center gap-2 ">
          <span className="bg-cinza-800 rounded-xl p-4">{minutes[0]}</span>
          <span className="bg-cinza-800 rounded-xl p-4">{minutes[1]}</span>
          <span className="overflow-hidden flex justify-center text-ignite-300">
            :
          </span>
          <span className="bg-cinza-800 rounded-xl p-4">{seconds[0]}</span>
          <span className="bg-cinza-800 rounded-xl p-4">{seconds[1]}</span>
        </div>
    )
}
