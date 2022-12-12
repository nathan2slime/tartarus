export type Region = {
  id: number;
  initials: string;
  name: string;
};

export type State = {
  id: number;
  initials: string;
  name: string;
  region: Region;
};

export type RegionResponse = {
  id: number;
  sigla: string;
  nome: string;
};

export type StateReponse = {
  id: number;
  sigla: string;
  nome: string;
  regiao: RegionResponse;
};

export type StatesReponse = StateReponse[];

export type StatesState = State[];
