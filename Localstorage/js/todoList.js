let storage;
const key = 'tutorial_storage';

window.addEventListener('load', init, false);
window.addEventListener('storage', aggregateActivity, false);

function init() {
  const form = document.getElementById('todo-form');
  storage = new List(key);
  form.addEventListener('submit', addActivity, false);
  updateList(storage.getActivities());
}

function addActivity(ev) {
  ev.preventDefault();
  const activity = document.getElementById('todo').value.trim();
  if (activity && storage.addActivity(activity)) {
    console.log('Se agrego la actividad');
    updateList(storage.getActivities());
  }
}

function updateList(activities) {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  if (activities) {
    for (let i in activities) {
      const activity = activities[i];
      const element = document.createElement('li');
      element.innerHTML = activity;
      list.appendChild(element);
    }
  }
}

function aggregateActivity(ev) {
  console.log(ev.key);
  updateList(storage.getActivities());
}
