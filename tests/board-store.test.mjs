import test from 'node:test';
import assert from 'node:assert/strict';
import { createBoardStore } from '../src/board-store.mjs';

function memoryStorage() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
  };
}

// 教学副本的复现标准：拖动成功后重新打开，任务仍应留在目标列。
test('移动演示视频后重新打开工作台，仍在待确认列', () => {
  const storage = memoryStorage();
  const firstVisit = createBoardStore(storage);
  const board = firstVisit.getBoard();
  const task = board.building.find((item) => item.id === 'REL-003');
  firstVisit.setBoard({
    ...board,
    building: board.building.filter((item) => item.id !== task.id),
    qa: [...board.qa, task],
  });
  assert.equal(firstVisit.getBoard().qa.some((item) => item.id === task.id), true);
  const secondVisit = createBoardStore(storage);
  assert.equal(secondVisit.getBoard().qa.some((item) => item.id === task.id), true);
});

test('移动当前卡片，不改变其他卡片及原始清单', () => {
  const store = createBoardStore(memoryStorage());
  const before = store.getBoard();
  const task = before.building.find((item) => item.id === 'REL-003');
  store.setBoard({
    ...before,
    building: before.building.filter((item) => item.id !== task.id),
    qa: [...before.qa, task],
  });
  assert.deepEqual(store.getBoard().planned, before.planned);
  assert.deepEqual(store.getBoard().shipped, before.shipped);
  assert.equal(Object.values(store.getBoard()).flat().length, 6);
  assert.equal(createBoardStore(memoryStorage()).getBoard().building.length, 2);
});
