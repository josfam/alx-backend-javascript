export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    task;
    const task2 = false;
    task2;
  }

  return [task, task2];
}
