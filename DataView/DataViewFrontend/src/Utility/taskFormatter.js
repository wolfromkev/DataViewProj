function taskFormatter(tasks, userId) {
  return {
    personalTasks: tasks.filter(
      (a) => a.assignerId === userId && a.assigneeId === userId
    ),
    assignedTasks: tasks.filter(
      (a) => a.assigneeId !== userId && a.assignerId === userId
    ),
    outgoingTasks: tasks.filter(
      (a) => a.assigneeId === userId && a.assignerId !== userId
    ),
  };
}

export default taskFormatter;
