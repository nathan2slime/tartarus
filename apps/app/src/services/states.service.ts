import api, { RequestReponse } from '../api';
import { statesBuilder } from './builders/states.builder';
import { StatesReponse, StatesState } from './models/states.model';

export const getStatesService = async (): Promise<
  RequestReponse<StatesState>
> => {
  const { data, status } = await api.get<StatesReponse>(
    process.env.REACT_APP_API_URL + '/estados'
  );

  if (status == 200) return { data: statesBuilder(data) };

  return { error: 'Unable to load states' };
};
