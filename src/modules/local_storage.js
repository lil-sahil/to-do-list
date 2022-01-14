import { dataController } from "./data"

import { projectRender } from "./projects"

export const getLocalData = () => {
  let arr = localStorage.getItem('dataframe')
  arr = JSON.parse(arr)
  dataController.updateArray(arr)
  projectRender.render()
}

export const saveLocalData = (arrayToSave) => {
  console.log('Saving')

  localStorage.setItem('dataframe', JSON.stringify(arrayToSave))
}
