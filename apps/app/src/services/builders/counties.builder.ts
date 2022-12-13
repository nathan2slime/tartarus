import {
  CountiesReponse,
  County,
  CountyResponse,
  ImmediateRegion,
  ImmediateRegionResponse,
  IntermediateRegion,
  IntermediateRegionResponse,
  MesoRegion,
  MesoRegionReponse,
  MicroRegion,
  MicroRegionResponse,
  UF,
  UFResponse,
} from '../models/counties.model';
import { Region, RegionResponse } from '../models/states.model';

const intermediateRegionBuilder = (
  item: IntermediateRegionResponse
): IntermediateRegion => ({
  uf: ufBuilder(item.UF),
  id: item.id,
  name: item.nome,
});

const immediateRegionBuilder = (
  item: ImmediateRegionResponse
): ImmediateRegion => ({
  id: item.id,
  name: item.nome,
  intermediateRegion: intermediateRegionBuilder(item['regiao-intermediaria']),
});

const regionBuilder = (item: RegionResponse): Region => ({
  id: item.id,
  initials: item.sigla,
  name: item.nome,
});

const ufBuilder = (item: UFResponse): UF => ({
  id: item.id,
  initials: item.sigla,
  name: item.nome,
  region: regionBuilder(item.regiao),
});

const mesoRegionBuilder = (item: MesoRegionReponse): MesoRegion => ({
  id: item.id,
  name: item.nome,
  uf: ufBuilder(item.UF),
});

const microRegionBuilder = (item: MicroRegionResponse): MicroRegion => ({
  id: item.id,
  name: item.nome,
  mesoRegion: mesoRegionBuilder(item.mesorregiao),
});

export const countyBuilder = (item: CountyResponse): County => ({
  id: item.id,
  name: item.nome,
  microRegion: microRegionBuilder(item['microrregiao']),
  immediateRegion: immediateRegionBuilder(item['regiao-imediata']),
});

export const countiesBuilder = (states: CountiesReponse): County[] =>
  states.map(state => countyBuilder(state));
