import { CollisionPriority } from '@dnd-kit/abstract';
import { useDroppable } from '@dnd-kit/react';
import { cn } from 'cn';
import { CircleDashed, CircleCheck, Timer, CircleDot } from 'lucide-react';
import { SortableTaskCard } from './sortable-task-card';
import type { Column, Task } from './types';

const columnIcons = { planned: CircleDashed, building: Timer, qa: CircleDot, shipped: CircleCheck };

export function KanbanColumn({ column, tasks }: { column: Column; tasks: Task[] }) {
  const dropTarget = useDroppable({
    id: column.id, type: 'task-container', accept: 'task',
    collisionPriority: CollisionPriority.Low,
    data: { type: 'task-container', columnId: column.id },
  });
  const Icon = columnIcons[column.id];

  return (
    <section aria-label={`${column.title}任务`} className={cn(
      'bg-muted/50 flex min-h-0 flex-col rounded-xl border transition-colors',
      'launch-column', dropTarget.isDropTarget && 'bg-muted/90',
    )} data-column-id={column.id}>
      <div className="flex items-center justify-between gap-3 px-4 pt-5 pb-4">
        <div className="flex items-center gap-2">
          <Icon className={cn('size-4', column.tone)} />
          <h2 className="text-sm leading-none font-medium">{column.title}</h2>
          <span className="text-muted-foreground ml-0.5 rounded bg-black/4 px-1.5 text-[11px] tabular-nums">{tasks.length}</span>
        </div>
      </div>
      <div ref={dropTarget.ref} className="flex min-h-36 flex-1 flex-col gap-3 overflow-y-auto px-3 pb-3">
        {tasks.map((task, index) => <SortableTaskCard key={task.id} task={task} columnId={column.id} index={index} />)}
      </div>
    </section>
  );
}
