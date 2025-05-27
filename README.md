# Tugas 4 - Cypress BDD, Github Actions CI CD

 ### Reference UI Web
 [Sauce Demo](https://www.saucedemo.com/)

### Requirement Dependencies
 1. cypress
 1. cypress-xpath
 1. esbuild
 1. @bahmutov/cypress-esbuild-preprocessor
 1. @cypress/webpack-preprocessor

### Scope Test Feature 
1. Login
1. Shopping Cart
1. Checkout

### How to Run the Code

 1. Clone [this repo](https://github.com/hanifrazin/cao-cypress-bdd) to your local
 1. Open the project using Visual Studio Code
 1. Type bellow command in terminal at VS Code
	 ```
     npm install
     ```
     > You only need to run `npm install` once to install dependencies such as `cypress, cypress-xpath, esbuild, @bahmutov/cypress-esbuild-preprocessor, @cypress/webpack-preprocessor`
 4. After that you can run using one of bellow command
	 ```
     npx cypress open 
     ```
     
     ```
     npm run bdd       
     ```
     
     ```
     npm run bdd:login       
     ```

     ```
     npm run bdd:cart       
     ```

     ```
     npm run bdd:checkout       
     ```

 ### Note
 You can see my recording video to see how it looks like [running this automation](https://drive.google.com/drive/folders/1IM6Ox2UwxOk4pqBtEVS2Ur6QfH5e3r-e?usp=sharing) 