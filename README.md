# Freecodecamp Responsive Challenges

This repository contains the implementation of the Responsive Challenges for freecodecamp. 

## Methodology used

This repo contains the implementation of all the challenges.

In terms of development methodology i used the following folder structure:
- /content/
    
    This folder will contain the contents for the technical documention page, will use some markdown.

- /src/

  This folder contains all the views implementation.

- /src/Assets/

  This folder contains the stylesheets and other types of media.

- /src/components/Challenges/

  Inside this folder are the components i.e views used for the challenges.

- /src/client/templates/

  This folder contains the templates used in this project for programmatically generated pages.

- /src/pages/

  This folder contains the static pages to be rendered server side for the challenges.
    - / 
        - The landing page.
    - /survey 
        - Survey page.
    - /tribute
        - Tribute page.
    - /docs
        - The technical documentation page.


## Tech

This set of challenges uses a number of open source projects to work properly:

- [React]() - Great Javascript library for Building user interfaces
- [node.js]() - evented I/O for the backend
- [Gatsby](https://www.gatsbyjs.org) - A static site generator for React.
- [Styled Components]()
- [Tachyons]()

### Installation from source

The code hosted here requires Node.js v8+ to run.

Before anything else you should install [Gatsby](https://www.gatsbyjs.org) globally, it will make your life easier. To do that do the following:

```bash
npm install -g gatsby
```

Wait for it to finish and then install the dependencies and development dependencies like the shown in the commands below:

```bash
$ cd folder to contain the app
$ npm install 
$ gatsby develop
```

Open url http://localhost:8000

License
MIT

Free Software, Hell Yeah!