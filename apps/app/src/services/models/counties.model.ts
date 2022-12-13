import { Region, RegionResponse } from './states.model';

export type County = {
  id: number;
  name: string;
  microRegion: MicroRegion;
  immediateRegion: ImmediateRegion;
};

export type UF = Region & {
  region: Region;
};

export type MesoRegion = {
  id: number;
  name: string;
  uf: UF;
};

export type MicroRegion = {
  id: number;
  name: string;
  mesoRegion: MesoRegion;
};

export type IntermediateRegion = {
  id: number;
  name: string;
  uf: UF;
};

export type ImmediateRegion = {
  id: number;
  name: string;
  intermediateRegion: IntermediateRegion;
};

export type CountyResponse = {
  id: number;
  nome: string;
  microrregiao: MicroRegionResponse;
  'regiao-imediata': ImmediateRegionResponse;
};

export type UFResponse = RegionResponse & {
  regiao: RegionResponse;
};

export type MesoRegionReponse = {
  id: number;
  nome: string;
  UF: UFResponse;
};

export type MicroRegionResponse = {
  id: number;
  nome: string;
  mesorregiao: MesoRegionReponse;
};

export type IntermediateRegionResponse = {
  id: number;
  nome: string;
  UF: UFResponse;
};

export type ImmediateRegionResponse = {
  id: number;
  nome: string;
  'regiao-intermediaria': IntermediateRegionResponse;
};

export type CountiesReponse = CountyResponse[];

export type CountiesState = {
  data: County[];
  currentCounty?: County;
};
