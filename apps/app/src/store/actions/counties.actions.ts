import { createAction } from '@reduxjs/toolkit';
import { County } from '../../models/counties.model';

export const setCountiesAction = createAction<County[], string>('setCounties');
export const setCurrentCountyAction = createAction<County, string>('setCounty');
