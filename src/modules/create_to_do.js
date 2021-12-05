// Create to do factory

const createToDo = (project, title, description = 'Provide Description', dueDate = 'Select Due Date', priority = 'Select Priority') => {
  return { project, title, description,dueDate, priority };
};



