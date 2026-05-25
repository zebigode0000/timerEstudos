import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContext } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

/*interface NewCycleFormData {
        task: string
        minutesAmount: number
    }*/

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } = useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset} = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }


  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <div className="flex h-full flex-col items-center justify-center flex-1 w-full">
      <form
        action=""
        className="flex flex-col items-center gap-14"
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        
        {activeCycle ? (
          <button
            onClick={interruptCurrentCycle}
            type="button"
            className="flex w-full p-2 rounded-xl items-center justify-center gap-2 font-bold cursor-pointer bg-red-500 text-gray-100 hover:bg-red-800 disabled:bg-gray-400
    disabled:opacity-50
    disabled:cursor-not-allowed"
          >
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="flex w-full p-2 rounded-xl items-center justify-center gap-2 font-bold cursor-pointer bg-ignite-300 text-gray-100 hover:bg-ignite-500 disabled:bg-gray-400
    disabled:opacity-50
    disabled:cursor-not-allowed"
          >
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </div>
  );
}
