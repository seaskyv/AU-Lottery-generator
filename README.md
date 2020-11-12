# AU-Lottory-generator
Australian Lottery number generator, Powerball, Lotto and OZLotto.
This is the portal component written in Node.js which call a API written in Python in an seperate repository.

## Prerequisites
Node.js v.8.12.0

## Setup

- Clone the repo and cd into the directory:

```
      $ git clone https://github.com/seaskyv/AU-Lottery-generator.git
      cd AU-Lottery-generator
```
- Install dependencies using npm:

```
      $ npm install
```
- Start the service:
  - Normal start :
  ```
      $ npm run start
  
  ```
  - Run in dev ENV with nodemon :

  ```  
      $ npm run devstart
  ```
- Open the app in your browser by default at `http://localhost:3300/`.
- Config file : `config.json`
- backend server hostname and port number can be specified by ENV variable backendhost and backendport

## Contribute
Under the MIT License. 

#### Basic Git Workflow

- Clone the repo and cd into the directory:

```
      $ git clone https://github.com/seaskyv/AU-Lottery-generator.git
```

- Crfeate a branch for your fixes or new features:

```
      $ git checkout -b branch_name_here
```

- Make your update.

- Push to your fork Open a Pull Request!

## Related repository
```https://github.com/seaskyv/AU-Lottery-generator_API.git```
