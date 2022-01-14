import { toDoController } from "./modules/create_to_do";
import { projectController } from "./modules/projects"
import { getLocalData } from "./modules/local_storage"


// Get the data from Local storage

getLocalData()

// To Do List generation and display
toDoController



// Project list genration and display
projectController
