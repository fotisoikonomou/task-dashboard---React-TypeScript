// src/components/TaskCard/TaskCard.tsx

import { type Task} from '../../types/data.types';
import styles from './TaskCard.module.css';

// Ορίζουμε τι "props" περιμένει αυτό το component
interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className={styles.taskCardContainer}>
      {task.content}
    </div>
  );
};

export default TaskCard;