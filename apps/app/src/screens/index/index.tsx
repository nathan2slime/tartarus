import { FC, useEffect, useState } from 'react';
import {
  TarOption,
  TarSelect,
  SelectValue,
  TarButton,
  TarModal,
  TarToggleModal,
} from '@tar/core';
import themes from '@tar/themes';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Close, MoonOutline, SunnyOutline } from 'react-ionicons';
import * as yup from 'yup';

import { getStatesService } from '../../services/states.service';
import { setStatesAction } from '../../store/actions/states.actions';
import { AppState } from '../../store';
import { IndexWrapper } from './styles';
import { StatesState } from '../../models/states.model';
import { County } from '../../models/counties.model';
import {
  getCountiesService,
  getCountyService,
} from '../../services/counties.service';
import {
  setCountiesAction,
  setCurrentCountyAction,
} from '../../store/actions/counties.actions';
import { setThemeAction } from '../../store/actions/theme.actions';
import { InfoCounty } from '../../components/info-county';

const Index: FC = () => {
  const dispatch = useDispatch();
  const { states, counties, theme } = useSelector((state: AppState) => state);

  const [currentState, setCurrentState] = useState<SelectValue>();
  const [isLoadingCounty, setLoadingCounty] = useState(false);
  const [currentCountyValue, setCurrentCountyValue] = useState<SelectValue>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [stateDataResearch, setStateDataResearch] =
    useState<StatesState>(states);
  const [countyDataResearch, setCountyDataResearch] = useState<County[]>(
    counties.data
  );
  const currentThemeData = themes[theme.data];

  const onValidateState = (value?: string) => {
    return !!states.find(state => state.name == value);
  };

  const onValidateCounty = (value?: string) => {
    return !!counties.data.find(county => county.name == value);
  };

  const schema = yup.object().shape({
    state: yup
      .string()
      .required('Field is required')
      .test('invalid', 'Please enter a valid state', value =>
        onValidateState(value)
      ),
    county: yup
      .string()
      .required('Field is required')
      .test('invalid', 'Please enter a valid county', value =>
        onValidateCounty(value)
      ),
  });

  const {
    register,
    setValue,
    clearErrors,
    trigger,
    formState: { errors, isValid, isDirty },
    watch,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const form = watch();

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    setCountyDataResearch(counties.data);
  }, [counties.data]);

  useEffect(() => {
    const fields = ['state', 'county'];

    fields.forEach(field => register(field));
  }, [register]);

  const fetchStates = async () => {
    if (states.length == 0) {
      const { data } = await getStatesService();

      if (data) {
        dispatch(setStatesAction(data));
        setStateDataResearch(data);
      }
    }
  };

  const fetchCounties = async (value: SelectValue) => {
    const state = `${value.slug}`.toLocaleLowerCase();

    const { data } = await getCountiesService(state);

    if (data) {
      dispatch(setCountiesAction(data));
    }
  };

  const onToggleModal = (value: boolean) => {
    setModalIsOpen(value);
  };

  const onChangeState = async (value: SelectValue) => {
    setValue('state', value.title);
    setCurrentState(value);
    setValue('county', '');
    clearErrors();

    fetchCounties(value);
  };

  const onChangeCounty = (value: SelectValue) => {
    setValue('county', value.title);
    setCurrentCountyValue(value);
  };

  const onBlurState = async () => {
    await trigger('state');

    if (errors.state) {
      setValue('county', '');
      clearErrors('county');
    }
  };

  const onBlurCounty = async () => {
    await trigger();
  };

  const onResetStateDataResearch = () => setStateDataResearch(states);
  const onResetCountyDataResearch = () => setCountyDataResearch(counties.data);

  const onSearchState = (value: string) => {
    setValue('state', value);

    if (value.trim() == '') {
      onResetStateDataResearch();

      return;
    }

    const searchValue = value.toLowerCase();

    const results = states.filter(data => {
      const searchData = data.name.toLowerCase();

      if (searchData.includes(searchValue) || searchData == searchValue) {
        return data;
      }
    });

    setStateDataResearch(results.length == 0 ? states : results);
  };

  const onSearchCounty = (value: string) => {
    setValue('county', value);

    if (value.trim() == '') {
      onResetCountyDataResearch();

      return;
    }

    const searchValue = value.toLowerCase();

    const results = counties.data.filter(data => {
      const searchData = data.name.toLowerCase();

      if (searchData.includes(searchValue) || searchData == searchValue) {
        return data;
      }
    });

    setCountyDataResearch(results.length == 0 ? counties.data : results);
  };

  const onToggleTheme = () => {
    dispatch(setThemeAction(theme.data == 'dark' ? 'light' : 'dark'));
  };

  const onGetCurrentCounty = async () => {
    setLoadingCounty(true);

    const { data } = await getCountyService(
      parseInt(`${currentCountyValue?.slug}`)
    );

    setLoadingCounty(false);

    dispatch(setCurrentCountyAction(data as County));
    onToggleModal(true);
  };

  return (
    <IndexWrapper>
      <TarButton
        onClick={onToggleTheme}
        cssClasses={{ toggle: true }}
        name="toggle"
        variant="solid"
      >
        {theme.data == 'dark' ? (
          <SunnyOutline
            cssClasses="icon"
            color={currentThemeData.textColorDown}
            height="22px"
            width="22px"
          />
        ) : (
          <MoonOutline
            cssClasses="icon"
            color={currentThemeData.textColorUp}
            height="22px"
            width="22px"
          />
        )}
      </TarButton>

      <main>
        <h3>Tartarus</h3>
        <p>City information</p>

        <div className="wrapper">
          <TarSelect
            label="State"
            placeholder="Search"
            value={currentState}
            search={form.state}
            onSearch={onSearchState}
            onClose={onResetStateDataResearch}
            onChange={onChangeState}
            onBlur={onBlurState}
            error={!!errors.state}
            message={errors.state?.message?.toString()}
          >
            {(stateDataResearch.length == 0 ? states : stateDataResearch).map(
              state => (
                <TarOption
                  key={state.id}
                  title={state.name}
                  slug={state.initials}
                />
              )
            )}
          </TarSelect>
        </div>

        <div className="wrapper">
          <TarSelect
            label="County"
            placeholder="Search"
            disable={!!errors.state || !currentState}
            value={currentState}
            search={form.county}
            onSearch={onSearchCounty}
            onClose={onResetCountyDataResearch}
            onChange={onChangeCounty}
            onBlur={onBlurCounty}
            error={!!errors.county}
            message={errors.county?.message?.toString()}
          >
            {(countyDataResearch.length == 0
              ? counties.data
              : countyDataResearch
            ).map(county => (
              <TarOption key={county.id} title={county.name} slug={county.id} />
            ))}
          </TarSelect>
        </div>

        <TarToggleModal>
          <TarButton
            tar-modal
            name="get"
            onClick={onGetCurrentCounty}
            block
            disable={isLoadingCounty ? true : !isValid && !isDirty}
            bold={600}
          >
            {isLoadingCounty ? (
              <ReactLoading
                type="balls"
                color={currentThemeData.textColorDown}
                height={24}
                width={24}
              />
            ) : (
              'GET'
            )}
          </TarButton>
        </TarToggleModal>
      </main>

      <TarModal
        width={550}
        height={600}
        open={modalIsOpen}
        onClose={onToggleModal}
      >
        <InfoCounty>
          <Close
            cssClasses="icon"
            onClick={() => onToggleModal(false)}
            color={currentThemeData.textColorDown}
            height="22px"
            width="22px"
          />
        </InfoCounty>
      </TarModal>
    </IndexWrapper>
  );
};

export default Index;
