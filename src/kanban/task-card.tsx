import { cn } from 'cn';
import { BadgeCheck, CalendarDays } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { priorityBadgeConfig } from './task-priority';
import type { ColumnId, Task } from './types';

const priorityLabels = { High: '优先', Medium: '常规', Low: '从容' };
const teamLabels: Record<string, string> = {
  Design: '设计', Product: '内容', Docs: '文档', Platform: '研发',
};

// 卡片结构与样式来自 Studio Admin；仅中文化并去掉示例统计。
export function TaskCard({ task, columnId, isOverlay = false }: {
  task: Task; columnId: ColumnId; isOverlay?: boolean;
}) {
  const owner = task.owner;
  const PriorityIcon = priorityBadgeConfig[task.priority].icon;
  const initials = owner.name === 'Candy' ? 'CA' : owner.name.slice(-2);

  return (
    <article className={cn(
      'bg-card text-card-foreground flex flex-col gap-3 rounded-xl border p-4 shadow-xs',
      'launch-task-card',
      isOverlay && 'rotate-1 shadow-lg',
    )} data-task-id={task.id}>
      <div className="min-w-0 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <h3 className="min-w-0 truncate text-sm leading-none font-medium">{task.title}</h3>
          <Badge variant={priorityBadgeConfig[task.priority].variant}
            className={cn('shrink-0 rounded-md border-transparent px-2 font-medium', priorityBadgeConfig[task.priority].className)}>
            <PriorityIcon data-icon="inline-start" />
            {priorityLabels[task.priority]}
          </Badge>
        </div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-6">{task.description}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <Avatar className={cn('size-5 after:rounded-sm', owner.tone)}>
            <AvatarFallback className="rounded-sm text-[10px]">{initials}</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground text-xs">{owner.name}</span>
        </div>
        <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
          <CalendarDays className="size-3" />{task.dueDate}
        </div>
      </div>
      <Separator />
      <div className="text-muted-foreground flex items-center justify-between text-[11px]">
        <span className="font-mono tracking-wide">{task.id}</span>
        {columnId === 'shipped' ? (
          <span className="flex items-center gap-1 text-emerald-700"><BadgeCheck className="size-3.5" />已完成</span>
        ) : <span>{teamLabels[task.team]}</span>}
      </div>
    </article>
  );
}
