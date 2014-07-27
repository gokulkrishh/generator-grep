# Generator-grep

    A web application tool powered by yeoman and gulp.

## Install Grep:

```bash
$ npm install -g generator-grep
```

## Get Started, Install below dependency packages:

```bash
$ npm install -g yo
$ npm install -g bower
$ npm install -g gulp
```

First create a folder:

```bash
$ mkdir <folder-name> && cd $_
```

Create new application:

```bash
$ yo grep <app-name>
```

Everything is set, npm and bower will automatically install, if not use:

```bash
$ npm install
$ bower install
```

## Finally, type:

```bash
$ gulp
```

Folder Structure:
=====================

    1. Copy all your existing files to app folder (or) create your own files in folder structure like below

        app/           (development dir)
          -js/         (js files)
          -js/lib/     (library files)
          -css/        (both sass and css files & import sass files to app.scss)
          -images/     (images)
          -fonts/      (fonts goes here)

          (if your app is using angular, then it will also have below struture)

          -js/controllers (all controllers files goes here)
          -js/services
          -js/factory
          -js/directives
          -js/filters

    2. Enter gulp in terminal to see the magic.

Run following command:
========================

    1. gulp (dev mode)
    2. gulp prod (production mode) - To uglify and minify all JS, CSS & HTML files

Add library through bower:
======================================

    bower install <lib-name> --save-dev

    After installing new library, files will be automatically concat to a single file, no extra work needed.

Manually add library:
=====================

    eg: modernizr.js

        app/
          -js/ (add .js files here)

Seperate gulp commands:
=========================

    1. gulp<space>zip           -- To create a zip file of your build folder with date
    2. gulp<space>html          -- To copy html files to build/
    3. gulp<space>css           -- To convert sass to css and concat css files
    4. gulp<space>scripts       -- To lint the errors in terminal and concat all js
    5. gulp<space>img-min       -- To minify all image files
    6. gulp<space>concat-bower  -- To concat all bower dependencies in one single file
    7. gulp<space>watch         -- To watch all file changes and do all above tasks
    8. gulp<space>browserSync   -- To check responsiveness in all browser
    9. gulp<space>server        -- To start a local server with live reload

## License

The MIT License
Copyright (c) 2014 gokulakrishnan (www.gokulkrishh.in).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


  [1]: www.gokulkrishh.in
