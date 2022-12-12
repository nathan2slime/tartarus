import api, { RequestReponse } from '../api';
import { countiesBuilder, countyBuilder } from '../builders/counties.builder';
import {
  CountiesReponse,
  County,
  CountyResponse,
} from '../models/counties.model';

export const getCountiesService = async (
  state?: string
): Promise<RequestReponse<County[]>> => {
  const { data, status } = await api.get<CountiesReponse>(
    process.env.REACT_APP_API_URL + '/estados/' + state + '/municipios'
  );

  if (status == 200) return { data: countiesBuilder(data) };

  return { error: 'Unable to load counties' };
};

export const getCountyService = async (
  id?: number
): Promise<RequestReponse<County>> => {
  const { data, status } = await api.get<CountyResponse>(
    process.env.REACT_APP_API_URL + '/municipios/' + id
  );

  if (status == 200) return { data: countyBuilder(data) };

  return { error: 'Unable to load county' };
};
