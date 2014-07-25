# Generator-grep

    A web application tool powered by yeoman and gulp.

## Getting Started

```bash
$ npm install -g yo
$ npm install -g bower
$ npm install -g gulp
```

To install this tool from npm, run:

```bash
$ npm install -g generator-grep
```

Before, proceeding to create new application:

```bash
$ mkdir <folder-name> && cd $_
```

Finally, use below command to create new app:

```bash
$ yo grep <app-name>
```

Everything is set, check npm and bower dependencies are installed, if not:

```bash
$ npm install
$ bower install
```
Finally, type:

```bash
$ gulp
```

Folder Structure:
=====================

    1. Copy all your existing files to app/ (or) create your own files in folder structure like below

        app/           (development directory)
          -js/         (js files)
          -js/lib/     (library files)
          -css/        (both sass and css files & import sass files to app.scss)
          -images/     (images)
          -fonts/      (fonts goes here)

          (if your app is angular, then it will also have below struture)

          -js/controllers (all controllers files goes here)
          -js/services
          -js/factory
          -js/directives
          -js/filters

    2. Import your SASS files to app.scss and thats it.

    3. Enter gulp in terminal to see the magic.

Run following command:
========================

    1. gulp (dev mode)
    2. gulp prod (production mode) - To uglify and minify all JS, CSS & HTML files

To install new library through bower:
======================================

    Again make sure Node && Bower is installed

    bower install <lib-name> --save-dev

Manually add library:
=====================

    1. Add library for eg: modernizr.js

        app/
          -js/ (add .js file here)

Seperate gulp commands:
=========================

    1. gulp<space>zip           -- To create a zip file of your build folder with date
    2. gulp<space>html          -- To copy html files to build/
    3. gulp<space>css           -- To convert sass to css and concat other css into one single file
    4. gulp<space>scripts       -- To lint the errors in terminal and concat into one single file
    5. gulp<space>img-min       -- To minify image files
    6. gulp<space>concat-bower  -- To concat all bower dependencies in one single file
    7. gulp<space>watch         -- To watch all file changes and do all above tasks
    8. gulp<space>browserSync   -- To check responsiveness in all browser
    9. gulp<space>server        -- To start local server with live reload

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
