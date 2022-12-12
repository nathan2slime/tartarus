import { FC } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../store';
import { CurrentCountyStyles } from './styles';
import { InfoCountyProps } from './model';

export const InfoCounty: FC<InfoCountyProps> = props => {
  const {
    counties: { currentCounty },
  } = useSelector((state: AppState) => state);

  return (
    <CurrentCountyStyles>
      <h3>{currentCounty?.name}</h3>

      {props.children}

      <section>
        <div>
          <span>Immediate Region</span>
          <span>{currentCounty?.immediateRegion.name}</span>
        </div>

        <div>
          <span>Intermediate Region</span>
          <span>{currentCounty?.immediateRegion.intermediateRegion.name}</span>
        </div>

        <div>
          <span>Microregion</span>
          <span>{currentCounty?.microRegion.name}</span>
        </div>

        <div>
          <span>Mesoregion</span>
          <span>{currentCounty?.microRegion.mesoRegion.name}</span>
        </div>

        <div>
          <span>UF</span>
          <span>{currentCounty?.microRegion.mesoRegion.uf.name}</span>
        </div>

        <div>
          <span>Region</span>
          <span>{currentCounty?.microRegion.mesoRegion.uf.region.name}</span>
        </div>
      </section>
    </CurrentCountyStyles>
  );
};
