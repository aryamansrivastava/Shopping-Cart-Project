# Shopping-Cart-Project

"Shopping Cart," where users can browse a variety of items, add them to their cart, and check out all at once. What makes this project special to me is that I dove into a new concept in React: Redux! Previously, I relied on prop drilling to manage data flow, but now I have harnessed the powerful functionalities of Redux, including stores, slices, reducers, as well as dispatch and selector hooks.

💥reducer -> These are the functions that takes action(of type data payload) and state of your app as argument and updates state of your app and returns new state.

💥Slices -> Slices are part of your app that contains states, actions, reducer functions and these slices are combined into store.

💥Store -> These contains slices and whole state , data of your app which is accessible from everywhere in your app.

💥UseSelector -> By this hook we fetch current state of the app and update it further as we need.
💥UseDispatch -> we use useDispath hook to send a action to store and update state of app.

💥By using redux I saved the complexity of prop drilling and made state of app available to every component. Hence improving my overall code structure and flexibility.🚀



## How to run on your local
### 1. Clone the repo 
```
git clone https://github.com/aryamansrivastava/Shopping-Cart-Project.git
```
### 2. Install dependencies
``` 
npm install
 ```
### 3. Start the dev server
``` 
npm run start
 ```