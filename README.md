# Generator-grep

    A web application tool powered by yeoman and gulp.

## Getting Started

```bash
$ npm install -g yo
```

### Yeoman Generators

To install generator-grep from npm, run:

```bash
$ npm install -g generator-grep
```

Before, proceeding to create new application:

```bash
$ mkdir <folder-name> && cd $_
```

Finally, use below command to create new app:

```bash
$ yo grep <appname>
```

Everything is set, check npm and bower dependencies are installed, if not:

```bash
$ npm install (sudo to run as admin)
$ bower install (sudo to run as admin)
```

```bash
$ gulp (In the command to see the magic)
```

Folder Structure:
=====================
    
    1. Copy all your existing files to app/ (or) create your own files in folder structure like below
    
        app/           (development directory)
          -js/         (js files)
          -lib/        (library files)
          -css/        (both sass and css files & import sass files to app.scss)
          -images/     (images)
          -fonts/      (fonts goes here)
          
          (if your app is angular, then it also will have below struture)

          -js/controllers (all controllers files goes here)
          -js/services
          -js/factory 
          -js/filters 
    
    2. Import your SASS files to app.scss and thats it.

    3. Enter gulp in terminal to see the magic.
    
Run following command:
========================
    
    1. gulp (dev mode) - default is dev mode
    2. gulp prod (production mode) to uglify JS files and minify both CSS & HTML files

To install new library through bower:
======================================

    Again make sure Node && Bower installed
    
    bower install <library-name> --save-dev (To install as admin use sudo)

Manually add library:
=====================

    1. Add library for eg: modernizr

        app/
          -js/ (add .js file here)

Seperate gulp commands:
=========================

    1. gulp<space>zip           -- To create a zip folder of your build with date
    2. gulp<space>html          -- To copy html files to build/
    3. gulp<space>css           -- To convert sass to css and concat into one single file
    4. gulp<space>scripts       -- To lint and concat into one single file
    5. gulp<space>img-min       -- To minify image files
    6. gulp<space>concat-bower  -- To concat all bower dependencies in one single file
    7. gulp<space>watch         -- To watch all file changes and do all above tasks
    8. gulp<space>browserSync   -- To check responsiveness in all browser

## License

MIT
