const API_BASE_URL = "http://localhost:8081/api";

const MODO_DEMO = import.meta.env.VITE_MODO_DEMO === "true";
const STORAGE_KEY = "studymate_disciplinas_demo";

export type DisciplinaResponse = {
  idDisciplina: number;
  idPeriodo: number;
  nome: string;
  professor: string | null;
  mediaAprovacao: number;
  limiteFaltas: number;
};

export type DisciplinaRequest = {
  idPeriodo: number;
  nome: string;
  professor: string;
  mediaAprovacao: number;
  limiteFaltas: number;
};

const disciplinasIniciais: DisciplinaResponse[] = [
  {
    idDisciplina: 1,
    idPeriodo: 1,
    nome: "Programação Web",
    professor: "Professor Teste",
    mediaAprovacao: 6,
    limiteFaltas: 20,
  },
  {
    idDisciplina: 2,
    idPeriodo: 1,
    nome: "Banco de Dados",
    professor: "Professora Teste",
    mediaAprovacao: 6,
    limiteFaltas: 20,
  },
];

const carregarDisciplinasDemo = (): DisciplinaResponse[] => {
  const dados = localStorage.getItem(STORAGE_KEY);

  if (!dados) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(disciplinasIniciais));
    return disciplinasIniciais;
  }

  return JSON.parse(dados);
};

const salvarDisciplinasDemo = (disciplinas: DisciplinaResponse[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(disciplinas));
};

const handleResponse = async (response: Response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.mensagem || "Erro ao processar a requisição.");
  }

  return data;
};

export const listarDisciplinas = async (
  termo?: string
): Promise<DisciplinaResponse[]> => {
  if (MODO_DEMO) {
    const disciplinas = carregarDisciplinasDemo();

    if (!termo || termo.trim() === "") {
      return disciplinas;
    }

    return disciplinas.filter((disciplina) =>
      disciplina.nome.toLowerCase().includes(termo.toLowerCase())
    );
  }

  const params = new URLSearchParams();

  if (termo && termo.trim() !== "") {
    params.append("termo", termo);
  }

  const response = await fetch(`${API_BASE_URL}/disciplinas?${params}`);
  return handleResponse(response);
};

export const consultarDisciplina = async (
  idDisciplina: number
): Promise<DisciplinaResponse> => {
  if (MODO_DEMO) {
    const disciplinas = carregarDisciplinasDemo();
    const disciplina = disciplinas.find(
      (item) => item.idDisciplina === idDisciplina
    );

    if (!disciplina) {
      throw new Error("Disciplina não encontrada.");
    }

    return disciplina;
  }

  const response = await fetch(`${API_BASE_URL}/disciplinas/${idDisciplina}`);
  return handleResponse(response);
};

export const buscarDisciplinaPorId = consultarDisciplina;

export const cadastrarDisciplina = async (
  disciplina: DisciplinaRequest
): Promise<DisciplinaResponse> => {
  if (MODO_DEMO) {
    const disciplinas = carregarDisciplinasDemo();

    const novoId =
      disciplinas.length > 0
        ? Math.max(...disciplinas.map((item) => item.idDisciplina)) + 1
        : 1;

    const novaDisciplina: DisciplinaResponse = {
      idDisciplina: novoId,
      idPeriodo: Number(disciplina.idPeriodo) || 1,
      nome: disciplina.nome,
      professor: disciplina.professor,
      mediaAprovacao: Number(disciplina.mediaAprovacao),
      limiteFaltas: Number(disciplina.limiteFaltas),
    };

    const novasDisciplinas = [...disciplinas, novaDisciplina];
    salvarDisciplinasDemo(novasDisciplinas);

    return novaDisciplina;
  }

  const response = await fetch(`${API_BASE_URL}/disciplinas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(disciplina),
  });

  return handleResponse(response);
};

export const criarDisciplina = cadastrarDisciplina;
export const inserirDisciplina = cadastrarDisciplina;
export const incluirDisciplina = cadastrarDisciplina;

export const alterarDisciplina = async (
  idDisciplina: number,
  disciplina: DisciplinaRequest
): Promise<DisciplinaResponse> => {
  if (MODO_DEMO) {
    const disciplinas = carregarDisciplinasDemo();

    const novasDisciplinas = disciplinas.map((item) => {
      if (item.idDisciplina !== idDisciplina) {
        return item;
      }

      return {
        idDisciplina,
        idPeriodo: Number(disciplina.idPeriodo) || 1,
        nome: disciplina.nome,
        professor: disciplina.professor,
        mediaAprovacao: Number(disciplina.mediaAprovacao),
        limiteFaltas: Number(disciplina.limiteFaltas),
      };
    });

    salvarDisciplinasDemo(novasDisciplinas);

    const disciplinaAtualizada = novasDisciplinas.find(
      (item) => item.idDisciplina === idDisciplina
    );

    if (!disciplinaAtualizada) {
      throw new Error("Disciplina não encontrada.");
    }

    return disciplinaAtualizada;
  }

  const response = await fetch(`${API_BASE_URL}/disciplinas/${idDisciplina}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(disciplina),
  });

  return handleResponse(response);
};

export const atualizarDisciplina = alterarDisciplina;
export const editarDisciplina = alterarDisciplina;

export const excluirDisciplina = async (
  idDisciplina: number
): Promise<void> => {
  if (MODO_DEMO) {
    const disciplinas = carregarDisciplinasDemo();

    const novasDisciplinas = disciplinas.filter(
      (item) => item.idDisciplina !== idDisciplina
    );

    salvarDisciplinasDemo(novasDisciplinas);
    return;
  }

  const response = await fetch(`${API_BASE_URL}/disciplinas/${idDisciplina}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.mensagem || "Erro ao excluir disciplina.");
  }
};

export const deletarDisciplina = excluirDisciplina;
export const removerDisciplina = excluirDisciplina;