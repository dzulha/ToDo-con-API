#  ToDo List with React and Fetch

This project is part of my journey at the **4Geeks Academy Full Stack Bootcamp**. It's the second stage of the ToDo App challenge, where I learned how to **connect a React frontend with a RESTful API** using asynchronous JavaScript (`fetch`).

The app allows users to manage a to-do list that syncs in real time with a remote server.

---

##  Technologies Used

- React
- JavaScript (ES6+)
- Fetch API
- HTML5 + CSS3
- RESTful API (4Geeks Todo API)
---

##  Features

- Fetch tasks from a remote API on load (`GET`)
- Add new tasks (`PUT`)
- Delete individual tasks (`PUT`)
- Clear all tasks (`DELETE`)
- Sync the task list with a database in real time
- Error handling and status feedback from the API

---

##  Screenshot

![Preview of the ToDo App](./src/assets/Captura%20de%20pantalla%202025-07-29%20170212.png


> Make sure to replace the username in the API URL with your own when testing:
>
> `https://playground.4geeks.com/todo/users/your-username`

---

## 📚 What I Learned

- How to integrate a frontend React app with an external API
- How to use `useEffect` for data fetching on mount
- How to handle asynchronous flows with `async/await`
- Working with HTTP methods: `GET`, `PUT`, and `DELETE`

---

##  Requirements from Bootcamp Instructions

- [x] Load tasks from API on page load
- [x] Create user if not found (status 404)
- [x] Add new task (update via PUT)
- [x] Delete a task by index (update via PUT)
- [x] Clear all tasks (send empty list via PUT or use DELETE)
- [x] Sync changes with server instantly

---

