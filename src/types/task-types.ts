export type TTaskCategory = 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
export type TTaskStatus = 'To Do' | 'In Progress' | 'Done';
export type TTaskPriority = 'High' | 'Medium' | 'Low';

export type TTaskItem = {
  id: number;
  title: string;
  description?: string;
  category: TTaskCategory;
  status: TTaskStatus;
  priority: TTaskPriority;
};
