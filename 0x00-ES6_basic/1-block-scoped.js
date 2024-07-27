export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    task;
    const task2 = false;
    task2;
  }

  return [task, task2];
}
