const API_BASE_URL = "http://localhost:8081/api";

const MODO_DEMO = import.meta.env.VITE_MODO_DEMO === "true";

export type CadastroUsuarioPayload = {
  nome: string;
  email: string;
  senha: string;
};

export type LoginUsuarioPayload = {
  email: string;
  senha: string;
};

export type UsuarioResponse = {
  idUsuario: number;
  nome: string;
  email: string;
  curso: string | null;
  semestre: string | null;
  matricula: string | null;
  instituicao: string | null;
};

const criarUsuarioDemo = (
  email: string,
  nome?: string
): UsuarioResponse => {
  const usuario: UsuarioResponse = {
    idUsuario: 1,
    nome: nome || "Usuário Demo",
    email: email || "demo@studymate.com",
    curso: "Análise e Desenvolvimento de Sistemas",
    semestre: "4",
    matricula: "000001",
    instituicao: "FATEC Sorocaba",
  };

  localStorage.setItem("studymate_usuario_demo", JSON.stringify(usuario));
  localStorage.setItem("usuario", JSON.stringify(usuario));

  return usuario;
};

const handleResponse = async (response: Response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.mensagem || "Erro ao processar a requisição.");
  }

  return data;
};

export const cadastrarUsuario = async (
  usuario: CadastroUsuarioPayload
): Promise<UsuarioResponse> => {
  if (MODO_DEMO) {
    return criarUsuarioDemo(usuario.email, usuario.nome);
  }

  const response = await fetch(`${API_BASE_URL}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  return handleResponse(response);
};

export const loginUsuario = async (
  usuario: LoginUsuarioPayload
): Promise<UsuarioResponse> => {
  if (MODO_DEMO) {
    return criarUsuarioDemo(usuario.email);
  }

  const response = await fetch(`${API_BASE_URL}/usuarios/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  return handleResponse(response);
};

export const obterUsuarioDemo = (): UsuarioResponse | null => {
  const usuario = localStorage.getItem("studymate_usuario_demo");

  if (!usuario) {
    return null;
  }

  return JSON.parse(usuario);
};

export const logoutUsuario = () => {
  localStorage.removeItem("studymate_usuario_demo");
  localStorage.removeItem("usuario");
};