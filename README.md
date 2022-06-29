# Topics Project

Topics Project is a User Interface where you can easily manage and preview the conspect of the final exam.

## Installation

After you git clone the project You will need to install the dependancies and run it locally.

```
npm install
```

To run:

```
npm start
```

1. Create Root/`.env`
2. Assign a value to `REACT_APP_CONFIGURATION` which is going to be the request url to the main configuration file.
3. Assign a value to `REACT_APP_UI` which locally will be `http://localhost:3000/`.

## Documentation

The project is bassed on the React framework and uses different libraries like: redux, material ui, markdown, axios...

There are 4 Main Pages (Components):

1. Sign In - You will need a valid uuid key in order to access the page content.
![3](https://user-images.githubusercontent.com/47338843/176426984-65072fa8-7ec3-4812-a165-7c958b098483.png)

2. Sign Up.
![4](https://user-images.githubusercontent.com/47338843/176427011-7501d81b-2533-4ed2-af2a-558ceea42b8e.png)

3. All Sections - You can see the different topics of the conspect with their subheaders.
4. Individual Topic Information - All The Info for the corresponding topic.

The dessign is based on material ui.

When you are signed you will see a Navigation Menu.
Also on the right side, there is an user operation button, when you can see and edit your user information, 
you can also change the theme and logout.

![2](https://user-images.githubusercontent.com/47338843/176426961-9ec8bcd6-8db9-4ad7-ad8c-cc1fe40170a9.png)


You will need a backend in order to see an information!


