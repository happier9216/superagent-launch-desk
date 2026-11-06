export type ColumnId = 'planned' | 'building' | 'qa' | 'shipped';
export type TaskPriority = 'High' | 'Medium' | 'Low';
export type Column = { id: ColumnId; title: string; tone: string };
export type Task = {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  dueDate: string;
  owner: { name: string; tone: string };
  team: string;
};
export type BoardState = Record<ColumnId, Task[]>;
