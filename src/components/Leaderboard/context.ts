import mockData from './mock-data.json';
import { createContext } from 'react';

export const intialLeaderboardConfig = {
  inputData: mockData,
  title: 'Example OpenRank Leaderboard',
  columnOptions: [ // TODO: add fields back
    {
      name: '#',
      type: 'String',
      width: 100,
      fields: ['no'],
    },
    {
      name: 'Company',
      type: 'StringWithIcon',
      width: 300,
      fields: ['logo', 'name'],
    },
    {
      name: 'OpenRank',
      type: 'NumberWithDelta',
      width: 200,
      fields: ['openrank', 'delta'],
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
    case 'updateColumnOption': {
      const { index, option } = action.payload;
      // replace the column option at the given index
      const newColumnOptions = [...config.columnOptions];
      newColumnOptions[index] = option;
      return { ...config, columnOptions: newColumnOptions };
    }
    default:
      return config;
  }
}

export const LeaderboardContext = createContext({});