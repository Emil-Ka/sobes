import {useDispatch} from 'react-redux';

import type {AppDispath} from '../redux/store';

export const useTypedDispatch: AppDispath = useDispatch();