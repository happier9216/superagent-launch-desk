import { initialBoard } from './seed-data.mjs';

// 教学基线只保留当前页面的状态，跨刷新保存留给后续修复任务。
export function createBoardStore(storage) {
  let board = structuredClone(initialBoard);
  return {
    getBoard: () => board,
    setBoard(nextBoard) {
      board = nextBoard;
    },
  };
}
