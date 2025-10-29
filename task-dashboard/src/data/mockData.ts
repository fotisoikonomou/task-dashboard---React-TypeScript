// src/data/mockData.ts

import { type BoardData } from '../types/data.types';


export const mockData: BoardData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Set up the project structure' },
    'task-2': { id: 'task-2', content: 'Create basic UI components' },
    'task-3': { id: 'task-3', content: 'Implement Drag and Drop' },
    'task-4': { id: 'task-4', content: 'Add state management (Redux)' },
    'task-5': { id: 'task-5', content: 'Connect to Firebase' },
    'task-6': { id: 'task-6', content: 'Write unit tests' },
    'task-7': { id: 'task-7', content: 'Deploy to Vercel' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do ✏️',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress 🏃‍♂️',
      taskIds: ['task-5'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done ✅',
      taskIds: ['task-6', 'task-7'],
    },
  },
  
  columnOrder: ['column-1', 'column-2', 'column-3'],
};
