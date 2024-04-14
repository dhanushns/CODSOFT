function storeUsername () {
  var username
  username = document.getElementById('username').value
  sessionStorage.setItem('username', username)
}

function displayUsername () {
  document.getElementById('displayUsername').value =
    sessionStorage.getItem('username');
}

function handleSideNav () {
  let navState = document.getElementById('side-nav-btn')
  if (navState.classList[1] === 'fa-angle-double-right') {
    document.getElementById('side-bar').style.width = '200px'
    document.getElementById('side-bar').style.padding = '30px'
    document.getElementById('content-show').style.opacity = '1'
    navState.classList.remove(navState.classList[1])
    navState.classList.add('fa-angle-double-left')
  } else if (navState.classList[1] === 'fa-angle-double-left') {
    document.getElementById('side-bar').style.width = '50px'
    document.getElementById('side-bar').style.padding = '0'
    document.getElementById('content-show').style.opacity = '0'
    navState.classList.remove(navState.classList[1])
    navState.classList.add('fa-angle-double-right')
  }
}

function toggleCompletedTask () {
  document.getElementById('toggel-sec4').classList.toggle('show-sec4')
}

function toggleOnBoardTask () {
  document.getElementById('toggel-sec5').classList.toggle('show-sec5')
}

function displayAddTask (event, state) {
  var section = event.target.id
  if (state === 1) {
    document.getElementById('add-task' + section).style.display = 'none'
    document.getElementById('display-add-task' + section).style.display = 'flex'
    document.getElementById('task-name' + section).value = ''
    document.getElementById('task-description' + section).value = ''
  } else {
    document.getElementById('add-task' + section).style.display = 'block'
    document.getElementById('display-add-task' + section).style.display = 'none'
  }
}

function displayUpdateTask (state) {
  if (state === 1) {
    document.getElementById('display-absolute-position').style.display = 'block'
  } else {
    document.getElementById('display-absolute-position').style.display = 'none'
  }
}

function handleSectionChange (event) {
  const sectionLength = document.getElementsByClassName('section-title')
  const idList = []
  for (let id of sectionLength) {
    idList.push(id.id)
  }
  console.log(idList);
  var sectionId = event.target.id
  var sectionName = event.target.value
  if (sectionName === '') {
    alert('Sections should contain title')
    var list = document.getElementById('section-list')
    var selectedSection
    var temp = 0
    for (let id of idList) {
      if (id === sectionId) {
        selectedSection = temp
        break
      }
      temp++
    }
    for (let i = 0; i < list.length; i++) {
      if (selectedSection === i) {
        document.getElementById(sectionId).value = list[i].text
      }
    }
  } else {
    var list = document.getElementById('section-list')
    var temp = 0;
    for (let id of idList) {
      if (id === sectionId) {
        selectedSection = temp
        break
      }
      temp++
    }
    for (let i = 0; i < list.length; i++) {
      if (selectedSection === i) {
        list[i].innerHTML = sectionName;
        break;
      }
    }
  }
}

const todo = {}
var section_count = 1
var secId

function addTask (event, state) {
  let flag = false
  let taskName
  let taskDesc
  if (state === 1) {
    secId = event.target.id
    taskName = document.getElementById('task-name' + secId).value
    if(taskName === ''){
      alert("Task name should not be empty")
      return 0;
    }
    taskDesc = document.getElementById('task-description' + secId).value
    var section
    section = document.getElementById('section' + secId).children[0].children[0]
      .value
    document.getElementById('display-add-task' + secId).style.display = 'none'
    document.getElementById('add-task' + secId).style.display = 'block'
  } else {
    taskName = document.getElementById('absolute-task-name').value
    if(taskName === ''){
      alert("Task name should not be empty")
      return 0;
    }
    taskDesc = document.getElementById('absolute-task-description').value
    var section = document.getElementById('section-list')
    var section_value = section.value
    var temp_count = 1
    for (sec of section) {
      if (section_value === sec.text) {
        break
      } else {
        temp_count += 1
      }
    }
    secId = temp_count
    document.getElementById('display-absolute-position-add').style.display = "none";
    // const keys = Object.keys(todo)
    // if (keys.length === 0) {
    //   todo[section] = [[taskName, taskDesc]]
    // } else {
    //   for (let key of keys) {
    //     if (key === section) {
    //       todo[section].push([taskName, taskDesc])
    //       flag = true
    //     } else {
    //       flag = false
    //     }
    //   }
    //   if (!flag) {
    //     todo[section] = [[taskName, taskDesc]]
    //   }
    // }
  }
  var addedTaskId = document.getElementById('section' + secId).children[1]
    .children[0].childElementCount
  addedTaskId += 1
  var onBoard = document.getElementById('add-task-div' + secId)
  //create parent div
  const task = document.createElement('div')
  task.className = 'display-onboard-tasks'
  task.id = 'section' + secId + ' task' + addedTaskId
  //create child div
  //child-1
  const col_1 = document.createElement('div')
  col_1.className = 'col-1'
  //Nested Child Elements
  const checkCircle = document.createElement('div')
  checkCircle.className = 'check-circle'
  checkCircle.onclick = function (event) {
    markComplete(event)
  }

  const checkIcon = document.createElement('i')
  checkIcon.className = 'fa fa-check'
  checkIcon.id = 'section' + secId + ' task' + addedTaskId

  checkCircle.appendChild(checkIcon)
  col_1.appendChild(checkCircle)

  //child-2
  const col_2 = document.createElement('div')
  col_2.className = 'col-2'

  //create text elements
  //Display Task Element
  const display_task = document.createElement('input')
  display_task.id = 'section' + secId + ' Task' + addedTaskId
  display_task.className = 'row'
  display_task.disabled = 'disabled'
  display_task.value = taskName

  //Display Description
  const display_desc = document.createElement('input')
  display_desc.id = 'section' + secId + ' Desc' + addedTaskId
  display_desc.className = 'row'
  display_desc.disabled = 'disabled'
  display_desc.value = taskDesc

  col_2.appendChild(display_task)
  col_2.appendChild(display_desc)

  //Edit icon
  const col_3 = document.createElement('div')
  col_3.className = 'col-3'

  const edit_icon = document.createElement('i')
  edit_icon.className = 'fa fa-edit'
  edit_icon.id = secId + ' ' + addedTaskId
  edit_icon.onclick = function (event) {
    enableEditTask(event)
  }
  col_3.appendChild(edit_icon)

  const del_icon = document.createElement('i')
  del_icon.className = 'fa fa-trash'
  del_icon.id = secId + ' ' + addedTaskId
  del_icon.onclick = function (event) {
    deleteTask(event)
  }
  col_3.appendChild(del_icon)

  const update_btn = document.createElement('button')
  update_btn.className = 'task-update-btn'
  update_btn.id = 'updateTaskButton' + addedTaskId
  update_btn.innerHTML = 'Update'
  update_btn.style.display = 'none'
  update_btn.onclick = function () {
    updateTask(addedTaskId)
  }
  col_3.appendChild(update_btn)

  task.appendChild(col_1)
  task.appendChild(col_2)
  task.appendChild(col_3)

  onBoard.appendChild(task)

  //add task to the side nav onboard
  const taskContent = document.createElement('div')
  taskContent.className = 'task-content'

  const taskIcon = document.createElement('i')
  taskIcon.className = 'fa fa-tasks'
  taskContent.appendChild(taskIcon)

  const taskTitle = document.createElement('div')
  taskTitle.className = 'text-wrapper task-title'
  taskTitle.innerHTML = taskName

  taskContent.appendChild(taskTitle)
  document.getElementById('toggel-sec5').appendChild(taskContent)
}

function displayAddSecition (state) {
  if (state == 1) {
    document.getElementById('addSectionHover').style.display = 'none'
    document.getElementById('display-add-section').style.display = 'block'
    document.getElementById('section-name').value = '';
  } else {
    document.getElementById('addSectionHover').style.display = 'block'
    document.getElementById('display-add-section').style.display = 'none'
  }
}

function addSection (state) {
  section_count += 1
  var sectionName
  if (state === 1) {
    sectionName = document.getElementById('section-name').value
    if(sectionName === ''){
      alert("Section name should not be empty")
      return 0;
    }
    document.getElementById('display-add-section').style.display = 'none'
    document.getElementById('addSectionHover').style.display = 'block'
  } else {
    sectionName = document.getElementById('global-section-name').value
    if(sectionName === ''){
      alert("Section name should not be empty")
      return 0;
    }
    document.getElementById('display-global-add-section').style.display = 'none'
  }
  const onBoardContent = document.getElementById('add-sections')

  //Adding Section to the List
  const sectionList = document.getElementById('section-list')
  const option = document.createElement('option')
  option.text = sectionName
  option.id = section_count
  sectionList.add(option)

  //creating root element for the section
  const section = document.createElement('div')
  section.className = 'sections'
  section.id = 'section' + section_count

  //creating content-header
  const sectionHeader = document.createElement('div')
  sectionHeader.className = 'content-header'

  //creating element to display the task name
  const sectionTitle = document.createElement('input')
  sectionTitle.type = 'text'
  sectionTitle.value = sectionName
  sectionTitle.id = 'section-title' + section_count
  sectionTitle.className = 'section-title'
  sectionTitle.onchange = function (event) {
    handleSectionChange(event)
  }

  //..........
  sectionHeader.appendChild(sectionTitle)
  section.appendChild(sectionHeader)

  //creating onBoard tasks
  const onBoardTask = document.createElement('div')
  onBoardTask.className = 'onboard-tasks'
  onBoardTask.id = 'onboard-add-task'

  //creating add task div
  const addTaskDiv = document.createElement('div')
  addTaskDiv.id = 'add-task-div' + section_count
  addTaskDiv.className = 'section-tasks'
  //..........
  onBoardTask.appendChild(addTaskDiv)

  //creating add task element
  const addTaskElement = document.createElement('i')
  addTaskElement.className = 'fa fa-plus'
  addTaskElement.id = 'add-task' + section_count
  addTaskElement.onclick = function () {
    displayAddTask(event, 1)
  }
  //creating span element
  const spanElement = document.createElement('span')
  spanElement.id = section_count
  spanElement.innerHTML = 'Add task'
  //.......
  addTaskElement.appendChild(spanElement)
  onBoardTask.appendChild(addTaskElement)

  //creating task-info div
  const taskInfo = document.createElement('div')
  taskInfo.className = 'task-info'
  taskInfo.id = 'display-add-task' + section_count

  //creating input elements
  const taskName = document.createElement('input')
  taskName.type = 'text'
  taskName.id = 'task-name' + section_count
  taskName.className = 'task-name'
  taskName.placeholder = 'Task Name'

  const descName = document.createElement('input')
  descName.type = 'text'
  descName.id = 'task-description' + section_count
  descName.className = 'task-description'
  descName.placeholder = 'Description'
  //....
  taskInfo.appendChild(taskName)
  taskInfo.appendChild(descName)

  //creating footer elements;
  const footer = document.createElement('div')
  footer.className = 'task-info-footer'

  const btnElements = document.createElement('div')
  btnElements.className = 'r-btn'

  const cancelBtn = document.createElement('button')
  cancelBtn.class = 'cancel-btn'
  cancelBtn.id = section_count
  cancelBtn.innerHTML = 'Cancel'
  cancelBtn.onclick = function (event) {
    displayAddTask(event, 0)
  }

  const addBtn = document.createElement('button')
  addBtn.type = 'submit'
  addBtn.className = 'add-btn'
  addBtn.id = section_count
  addBtn.innerHTML = 'Add task'
  addBtn.onclick = function (event) {
    addTask(event, 1)
  }
  //...............
  btnElements.appendChild(cancelBtn)
  btnElements.appendChild(addBtn)

  //.................
  footer.appendChild(btnElements)

  //...............
  taskInfo.appendChild(footer)

  //...............
  onBoardTask.appendChild(taskInfo)

  //...............
  section.appendChild(onBoardTask)

  //.................
  onBoardContent.appendChild(section)
}

function toggleGlobalAddTask (state) {
  if (state === 1) {
    document.getElementById('display-absolute-position-add').style.display =
      'flex'
      document.getElementById('absolute-task-name').value = '';
      document.getElementById('absolute-task-description').value = '';
  } else {
    document.getElementById('display-absolute-position-add').style.display =
      'none'
  }
}

function toggleUpdateTask (state) {
  if (state === 1) {
    document.getElementById('display-absolute-position-update').style.display =
      'block'
  } else {
    document.getElementById('display-absolute-position-update').style.display =
      'none'
  }
}

function markComplete (event) {
  var task = event.target.id
  document.getElementById(task).classList.toggle('toggle-complete-animation')
  setTimeout(() => {
    document.getElementById(task).style.display = 'none'
  }, 1000)

  var taskName = document.getElementById(task).children[1].children[0].value;

  //add completed task to the side nav completed tasks
  const taskContent = document.createElement('div')
  taskContent.className = 'task-content'

  const taskIcon = document.createElement('i')
  taskIcon.className = 'fa fa-check'
  taskContent.appendChild(taskIcon)

  const taskTitle = document.createElement('div')
  taskTitle.className = 'text-wrapper task-title'
  taskTitle.innerHTML = taskName

  taskContent.appendChild(taskTitle)
  document.getElementById('toggel-sec4').appendChild(taskContent)

}

function enableEditTask (event) {
  var taskId = event.target.id
  document.getElementById('display-absolute-position-update').style.display =
    'flex'
    var taskName = document.getElementById("section" + taskId[0] + " task" + taskId[2]).children[1].children[0].value;
    var descName = document.getElementById("section" + taskId[0] + " task" + taskId[2]).children[1].children[1].value;
    document.getElementById('update-task-name').value = taskName;
    document.getElementById('update-task-description').value = descName;
  document.getElementsByClassName('global')[0].id = taskId[0] + ' ' + taskId[2]
}

function updateTask () {
  let taskName = document.getElementById('update-task-name').value
  if(taskName === ""){
    alert("Task name should not be empty");
    return 0;
  }
  let descName = document.getElementById('update-task-description').value
  let taskId = document.getElementsByClassName('global')[0].id
  document.getElementById('section' + taskId[0] + ' Task' + taskId[2]).value =
    taskName
  document.getElementById('section' + taskId[0] + ' Desc' + taskId[2]).value =
    descName
  document.getElementById('display-absolute-position-update').style.display =
    'none'
}

function deleteTask (event) {
  var id = event.target.id
  document.getElementById('section' + id[0] + ' task' + id[2]).style.display =
    'none'
}

function toggleGlobalAddSection (state) {
  if (state === 1) {
    document.getElementById('display-global-add-section').style.display =
      'flex'
      document.getElementById('global-section-name').value = ''
  } else {
    document.getElementById('display-global-add-section').style.display = 'none'
  }
}
