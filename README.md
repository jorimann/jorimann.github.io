## Description

Project is based on https://www.geeksforgeeks.org/portfolio-webpage-using-react/

React repository with required documentation: https://github.com/facebook/create-react-app

## How to start website

### 1. Clone repo:

in CMD type: `git clone https://github.com/jorimann/jorimann.github.io.git`

### 2. Install npm dependencies:

go inside project folder and execute: `npm install`

### 3. Run project

perform: `npm start`

After that, the project should start on http://localhost:3000 in the development environment

## Deployment
You can use Github Pages to deploy this site. To find information about this, go to Settings -> Pages.

0. Make sure package.json contains valid homepage value ( simplest way: https://repo_name.github.io))
1. Make sure ./github/workflows/deploy.yml exists

2. On Settings->Pages make sure "Deploy from a branch" as Source selected
3. Make sure "gh-pages" selected as Branch
4. Push any changes to remote
5. Actions should be triggered and after that publish should be performed