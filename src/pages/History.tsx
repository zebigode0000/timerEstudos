import { CyclesContext } from "../contexts/CyclesContext";
import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <div className="flex-1 p-4 sm:p-10 flex flex-col w-full max-w-[1120px] mx-auto overflow-hidden">
      <h1 className="text-xl sm:text-2xl text-gray-100 font-bold">
        Meu Histórico
      </h1>

      <div className="flex-1 overflow-x-auto mt-6 w-full">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="bg-cinza-600 p-4 text-left text-gray-100 leading-6 rounded-tl-lg pl-4">
                Tarefa
              </th>
              <th className="bg-cinza-600 p-4 text-left text-gray-100 leading-6">
                Duração
              </th>
              <th className="bg-cinza-600 p-4 text-left text-gray-100 leading-6">
                Início
              </th>
              <th className="bg-cinza-600 p-4 text-left text-gray-100 leading-6 rounded-tr-lg pr-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  {/* Devolvi suas classes originais para não quebrar seu CSS/estilo */}
                  <td className="primeiro-td">{cycle.task}</td>
                  <td className="tds">{cycle.minutesAmount} minutos</td>
                  <td className="tds">
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td className="tds">
                    {cycle.finishedDate && (
                      <span className="text-green-500">Concluído</span>
                    )}
                    {cycle.interruptedDate && (
                      <span className="text-red-500">Interrompido</span>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <span className="text-yellow-500">Em andamento</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
