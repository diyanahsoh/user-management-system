# User Management System

## Project Setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## JSON Server Setup
```
json-server --watch db.json
```
### How to fix error-nodemon.ps1 cannot be loaded because running script is disabled on this system
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```