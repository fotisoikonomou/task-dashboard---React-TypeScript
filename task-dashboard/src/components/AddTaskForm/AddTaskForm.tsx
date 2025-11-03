// src/components/AddTaskForm/AddTaskForm.tsx

import React, { useState } from 'react';
import styles from './AddTaskForm.module.css';

interface AddTaskFormProps {
  
  onAddTask: (content: string) => void;
}

const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!content.trim()) return; 

    onAddTask(content);
    setContent(''); 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTaskForm}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter a title for this card..."
        className={styles.taskInput}
      />
      <button type="submit" className={styles.addButton}>Add Card</button>
    </form>
  );
};

export default AddTaskForm;