# 💻 Timer de Estudos & Foco (Pomodoro)

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</p>

## 📌 Sobre o Projeto

Este projeto é uma aplicação avançada de gerenciamento de tempo baseada na metodologia Pomodoro. Desenvolvida durante os meus estudos de aprofundamento no ecossistema do React, a ferramenta permite criar ciclos de foco personalizados, acompanhar o tempo restante em tempo real através de um timer visual (inclusive no título da aba do navegador) e manter um histórico completo de todos os ciclos realizados, categorizados por status (Em andamento, Concluído ou Interrompido).

O principal objetivo técnico deste projeto foi dominar o gerenciamento de estados complexos e regras de negócio robustas sem depender de bibliotecas externas de estado (como Redux ou Zustand).

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **React.js** (v18+)
- **TypeScript** (com configurações estritas de compilação)
- **Vite** (Ferramental de build ultrarrápido)
- **Tailwind CSS** / **Styled Components** (Estilização da interface)
- **Date-fns** (Manipulação e cálculos precisos de intervalos de tempo)

---

## 🧠 Arquitetura e Conceitos Avançados Aplicados

Para garantir a escalabilidade e a manutenção do código, apliquei os padrões mais recomendados pelo mercado:

### 1. State Management com `useReducer`
Toda a lógica de negócios referente às ações de ciclos (criar novo ciclo, interromper ciclo atual e marcar ciclo como finalizado) foi centralizada em um **Reducer**. Isso isola as regras de transição de estado dos componentes visuais, tornando o código previsível e fácil de testar.

### 2. Context API (Isolamento de Contexto)
Criação do `CyclesContextProvider` para gerenciar e distribuir de forma global os estados do timer para toda a aplicação. Isso eliminou o problema de *prop drilling* e garantiu que componentes distantes na árvore de renderização consumam as mesmas informações de forma limpa.

### 3. Validação de Formulários com `React Hook Form` & `Zod`
Implementação de formulários de alta performance com estratégias de *uncontrolled components*. A validação dos dados de entrada (como tempo mínimo de 5 minutos e máximo de 60 minutos) é feita através do schema variance do **Zod**, trazendo segurança em tempo de execução e tipagem estática integrada.

### 4. Persistência de Dados com `LocalStorage`
Os estados dos ciclos são mantidos mesmo se o usuário atualizar ou fechar o navegador. Utilizei funções de inicialização (*lazy initial state*) no `useReducer` e efeitos colaterais com `useEffect` para ler e salvar os dados em formato JSON com segurança, prevendo tratamentos para históricos nulos.
