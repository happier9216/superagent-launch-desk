export const columns = [
  { id: 'planned', title: '待开始', tone: 'text-slate-500' },
  { id: 'building', title: '进行中', tone: 'text-amber-600' },
  { id: 'qa', title: '待确认', tone: 'text-sky-600' },
  { id: 'shipped', title: '已完成', tone: 'text-emerald-600' },
];

export const columnIds = columns.map((column) => column.id);

export const initialBoard = {
  planned: [
    { id: 'REL-001', title: '产品落地页', description: '把核心价值、使用方式和体验入口讲清楚。', priority: 'High', dueDate: '周五', owner: { name: 'Candy', tone: 'bg-violet-100 text-violet-700' }, team: 'Design' },
    { id: 'REL-002', title: '产品截图', description: '准备首屏、任务流和结果页三张截图。', priority: 'Medium', dueDate: '周五', owner: { name: '林可', tone: 'bg-rose-100 text-rose-700' }, team: 'Design' },
  ],
  building: [
    { id: 'REL-003', title: '演示视频', description: '用 30 秒，让人看懂第一次怎么用。', priority: 'High', dueDate: '周四', owner: { name: 'Candy', tone: 'bg-violet-100 text-violet-700' }, team: 'Product' },
    { id: 'REL-004', title: '首发推文', description: '用一个真实场景，带读者亲手试一次。', priority: 'Medium', dueDate: '周五', owner: { name: '许知', tone: 'bg-sky-100 text-sky-700' }, team: 'Product' },
  ],
  qa: [
    { id: 'REL-005', title: '发布说明', description: '把这次做了什么、怎么开始写明白。', priority: 'Medium', dueDate: '周五', owner: { name: '许知', tone: 'bg-sky-100 text-sky-700' }, team: 'Docs' },
  ],
  shipped: [
    { id: 'REL-006', title: 'GitHub 项目', description: 'README、开源许可和示例都准备好了。', priority: 'Low', dueDate: '周三', owner: { name: '林可', tone: 'bg-rose-100 text-rose-700' }, team: 'Platform' },
  ],
};
