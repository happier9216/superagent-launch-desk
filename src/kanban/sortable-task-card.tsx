import { useSortable } from '@dnd-kit/react/sortable';
import { cn } from 'cn';
import { TaskCard } from './task-card';
import type { ColumnId, Task } from './types';

export function SortableTaskCard({ task, columnId, index }: { task: Task; columnId: ColumnId; index: number }) {
  const { isDragging, ref } = useSortable({
    id: task.id, index, type: 'task', accept: 'task', group: columnId,
    data: { type: 'task', task, columnId },
  });

  return (
    <div ref={ref} tabIndex={0} role="button" aria-label={`移动任务：${task.title}`}
      className={cn('touch-none cursor-grab rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring active:cursor-grabbing', isDragging && 'opacity-30')}>
      <TaskCard task={task} columnId={columnId} />
    </div>
  );
}
