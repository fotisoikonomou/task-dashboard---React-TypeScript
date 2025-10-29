// src/components/Column/Column.tsx

import type { Column as ColumnType, Task as TaskType } from '../../../types/data.types';
import TaskCard from '../TaskCard';
import styles from './Column.module.css';

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[]; 
}

const Column = ({ column, tasks }: ColumnProps) => {
  return (
    <div className={styles.columnContainer}>
      <h3 className={styles.columnTitle}>{column.title}</h3>
      <div className={styles.taskList}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
