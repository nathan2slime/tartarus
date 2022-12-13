import { StatesReponse } from '../models/states.model';
import { StatesState } from '../models/states.model';

export const statesBuilder = (states: StatesReponse): StatesState =>
  states.map(state => ({
    id: state.id,
    name: state.nome,
    initials: state.sigla,
    region: {
      id: state.regiao.id,
      initials: state.regiao.sigla,
      name: state.regiao.nome,
    },
  }));
