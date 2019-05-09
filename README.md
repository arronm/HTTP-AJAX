# HTTP/AJAX

---

## Information

**NOTE:** This is a **TWO-DAY** project.

**Day 1 Goals:**
* demonstrate the use of the `.then` and `.catch` methods
* make `GET` requests to an external API using `axios`

**Day 2 Goals:**
* make `POST` requests to an external API using `axios`
* make `PUT` requests to an external API using `axios`
* make `DELETE` requests to an external API using `axios`

**Resources**
Check in the notepad channel on slack for cohort specific resources like codesandbox links (e.g. #web19_notepad)

**Helpful Links**
- [MDN .then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
- [MDN .catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
- [Axios docs](https://github.com/axios/axios)
- [React controlled inputs](https://reactjs.org/docs/forms.html)

---

## Setup

1. Run `yarn install` or `npm install` inside of the root directory
1. Run `yarn start` or `npm start` to start the API server
1. The provided server returns a list of friends when a `GET` request is made to `http://localhost:5000/friends`.
1. In a separate terminal window, run `yarn create react-app friends` or `npx create-react-app friends` to create your starter React application
1. CD into the new `friends` directory and run `yarn add axios react-router-dom` or `npm install --save axios react-router-dom` to include these dependencies in your project. _You'll need `react-router` for the stretch problems._



---

## Instructions

**Day 1:**
- [ ] Inside of your React application, implement a `GET` request to retrieve a list of friends
- [ ] Create a component to display the list of friends coming from the server
- [ ] Add a form component to gather information about a new `friend`

**Day 2:**
- [ ] Add a button to save a new `friend` by making a `POST` request to the same endpoint listed above
- [ ] Each `friend` should have the properties listed below
- [ ] Implement remove/delete functionality using a `DELETE` request
- add a delete button or an x icon to each friend that will delete the friend when clicked. In the request url, pass the friend id as a URL parameter.
- [ ] Implement update/edit functionality using a `PUT` request
- pass the `friend` `id` as a URL parameter, and the information you want to update about the friend inside of the body. You can build a new form in the UI for this, or, if you set it correctly, reuse the form you made for the `POST` request

`friend` properties for reference:
```js
{
  name: should be a string,
  age: should be a number,
  email: should be a string,
}
```

API endpoints for reference:
```
GET /friends
POST /friends
PUT /friends/:id
DELETE /friends/:id
```

---

## Stretch Problems

- [ ] Separate the list of friends and the new friend form into different components, and use the appropriate React Router to build routes for the proper aspects of your components to be revealed separately.
- [ ] Style the friends list, the input field, and make everything look nice.
- [ ] Expand the number of properties that you put on each friend object.
- [ ] Feel free to remove the dummy data on the server or modify it in any way.
