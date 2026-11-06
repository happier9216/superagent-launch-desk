import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChevronDown, CircleHelp, KanbanSquare, PanelLeft, Rocket } from 'lucide-react';
import { Avatar, AvatarFallback } from './components/ui/avatar';
import { Kanban } from './kanban/kanban';
import './styles.css';

function App() {
  return (
    <div className="launch-shell">
      <aside className="launch-sidebar">
        <div className="launch-brand"><span><Rocket size={17} strokeWidth={1.8} /></span><div>Launch Desk<small>产品发布工作台</small></div></div>
        <div className="launch-workspace"><span className="workspace-symbol">AN</span><div>Agent Notes<small>团队工作空间</small></div><ChevronDown size={14} /></div>
        <div className="launch-nav-label">工作空间</div>
        <a href="#board" className="launch-nav-item" aria-current="page"><KanbanSquare size={16} />发布看板<span>6</span></a>
        <div className="launch-sidebar-note"><span className="sidebar-note-line" />下一次发布，从这里开始。</div>
        <div className="launch-sidebar-footer"><Avatar className="size-7 bg-violet-100 text-violet-700"><AvatarFallback className="text-[10px]">CA</AvatarFallback></Avatar><div>Candy<small>项目负责人</small></div><CircleHelp size={16} /></div>
      </aside>
      <main id="board" className="launch-main">
        <header className="launch-topbar"><div className="launch-breadcrumb"><PanelLeft size={16} /><span />Agent Notes<small>/</small><strong>发布看板</strong></div></header>
        <Kanban />
        <footer className="launch-footer"><span>让值得发布的想法，顺利抵达。</span></footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
