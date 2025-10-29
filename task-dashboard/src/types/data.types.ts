// src/types/data.types.ts

// Ο τύπος για μία μεμονωμένη κάρτα (task)
export interface Task {
  id: string;
  content: string;
}

// Ο τύπος για μία στήλη (column)
export interface Column {
  id: string;
  title: string;
  taskIds: string[]; // Μια λίστα από ID των tasks που ανήκουν σε αυτή τη στήλη
}

// Ο τύπος για την κατάσταση ολόκληρου του board
// Χρησιμοποιούμε "normalized" data. 
// Αντί να έχουμε tasks μέσα σε columns, έχουμε ξεχωριστά "τραπεζάκια"
// για tasks και columns. Αυτό κάνει τη διαχείριση (π.χ. drag-n-drop) πολύ πιο εύκολη.
export interface BoardData {
  tasks: {
    [taskId: string]: Task; // 'task-1': { id: 'task-1', ... }
  };
  columns: {
    [columnId: string]: Column; // 'col-1': { id: 'col-1', ... }
  };
  // Αυτό μας βοηθά να κρατήσουμε τη σειρά των στηλών
  columnOrder: string[]; // ['col-1', 'col-2', ...]
}