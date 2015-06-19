# generator-tm

Personal yeoman generator

Include Sass, Modernizr, jQuery, Sass grid systems (Neat ou Susy) and Gulpfile for building stuff…

## Getting started

```bash
$ git clone https://github.com/thierrymichel/generator-tm.git
$ npm link
```

## Usage

### Install project + init

```bash
$ yo tm [appname]
$ gulp init
```

### Dev

```bash
$ gulp (default)
```

### Build

```bash
$ gulp build
```

## Architecture

```bash
projectname/
   |- vhost/
   |    |- dev/
   |    |- images/
   |    |    |- scripts/
   |    |    |    |- lib/
   |    |    |    |- vendor/
   |    |    |    |    |- jquery.min.js
   |    |    |    |    \_ custom.modernizr.min.com
   |    |    |    \_ main.js
   |    |    \_ styles
   |    |         |- base/
   |    |         |- vendor/
   |    |         |- …/
   |    |         \_ main.scss
   |    |- htdocs/
   |    \_ (devtools: git, gulp, npm, bower,…)
   |- sources/
   |- work/
   \_ …/
```

-----

# To do

+ √ Test submodule with gulp-tm
+ √ Add index.html
+ √ Add bower support (modernizr, jquery)
+ √ Add prompt/choices (grid system, …)
+ Add Sass partials
+ Test with underscore and browserify…
+ Add testing
