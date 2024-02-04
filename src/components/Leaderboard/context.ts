import mockData from './mock-data.json';
import { createContext } from 'react';

export const intialLeaderboardConfig = {
  inputData: mockData,
  title: 'Example OpenRank Leaderboard',
  columnOptions: [ // TODO: add fields back
    {
      name: 'no',
      type: 'Text',
      width: 100,
    },
    {
      name: 'name',
      type: 'Text',
      width: 300,
    },
    {
      name: 'openrank',
      type: 'Number',
      width: 200,
    }
  ],
}

export function leaderboardConfigReducer(config, action) {
  switch (action.type) {
    case 'updateInputData': {
      return { ...config, inputData: action.payload };
    }
    case 'updateTitle': {
      return { ...config, title: action.payload };
    }
    default:
      return config;
  }
}

export const LeaderboardContext = createContext({});