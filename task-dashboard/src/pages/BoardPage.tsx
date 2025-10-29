// src/pages/BoardPage.tsx

import { useParams } from 'react-router-dom';
import styles from './BoardPage.module.css';
import { mockData } from '../data/mockData';
import type { BoardData } from '../types/data.types';
import Column from '../components/common/column/Column';
import { useState } from 'react';

const BoardPage = () => {
  
  const { boardId } = useParams<{ boardId: string }>();

  const [boardData, setBoardData] = useState<BoardData>(mockData);
 

  return (
    <div className={styles.boardPage}>
      <header className={styles.boardHeader}>
        <h1>Project Alpha Board</h1>
        <p>(Currently viewing board with ID: {boardId})</p>
      </header>
      <div className={styles.boardCanvas}>
        {boardData.columnOrder.map(columnId => {
        
          const column = boardData.columns[columnId];
          
      
          const tasks = column.taskIds.map(taskId => boardData.tasks[taskId]);

         
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </div>
  );
};

export default BoardPage;