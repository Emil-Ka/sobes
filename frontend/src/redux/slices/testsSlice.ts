import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {IState, ITest} from '../types/test';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

const initialState: IState = {
  tests: [
    {
      "id": 1,
      "test_name": "React Junior",
      "level": "Легкий",
      "content": {
        "questions": [
          {
            "id": 1,
            "type": "radio",
            "options": {
              "argument=(someFunction)": false,
              "argument={someFunction}": true,
              "argument=(someFunction())": false,
              "argument={someFunction()}": false,
              "argument={someFunction {}}": false
            },
            "question": "Где?"
          }
        ]
      },
      "time": 20
    }
  ]
};

export const fetchTests = createAsyncThunk(
  'tests/fetchTests',
  async (url: string) => {
    const {data} = await axios.get(url);
    console.log(data);
    return data;
  }
)

const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTests.fulfilled, (state, action) => {
      state.tests = action.payload
    })
  }
});

const {reducer} = testsSlice;

export default reducer;