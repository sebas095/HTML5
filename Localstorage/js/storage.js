class List {
  constructor(key) {
    this.key = key;
  }

  browserValidate() {
    return typeof(Storage) !== undefined;
  }

  addActivity(activity) {
    if (this.browserValidate()) {
      let activities = [];
      if (localStorage.getItem(this.key)) {
        activities = JSON.parse(localStorage.getItem(this.key));
      }
      activities.push(activity);
      localStorage.setItem(this.key, JSON.stringify(activities));
      return true;
    }
    return false;
  }

  getActivities() {
    if (localStorage.getItem(this.key)) {
      return JSON.parse(localStorage.getItem(this.key));
    }
    return null;
  }

  deleteActivity(activity) {
    let activities = JSON.parse(localStorage.getItem(this.key));
    activities = activities.filter((item) => item !== activity);
    localStorage.setItem(this.key, JSON.stringify(activities));
  }

  deleteActivities() {
    localStorage.removeItem(this.key);
  }
}
