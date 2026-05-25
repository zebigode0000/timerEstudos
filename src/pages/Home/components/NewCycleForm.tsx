import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import { CyclesContext } from "../../../contexts/CyclesContext";

export function NewCycleForm() {

    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext();

    return (
        <div className="w-full flex items-center justify-center gap-2 font-bold text-sm sm:text-xl flex-wrap text-center">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            id="task"
            className="bg-transparent border-0 h-6 border-b-2 border-gray-500 font-bold pb-2 flex-1 min-w-[150px] focus:shadow-none focus:border-blue-400 focus:outline-none"
            placeholder="Nome do Projeto"
            disabled={!!activeCycle}
            list="taks-sugestions"
            {...register("task")}
          />
          <datalist id="taks-sugestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <input
            id="minutesAmount"
            type="number"
            className="bg-transparent border-0 h-6 border-b-2 border-gray-500 font-bold pb-2 w-16 focus:shadow-none focus:border-blue-400 focus:outline-none text-center"
            placeholder="00"
            disabled={!!activeCycle}
            step={5}
            min={0}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </div>
    )
}
