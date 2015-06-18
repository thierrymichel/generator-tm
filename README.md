# generator-tm

Personal yeoman generator

Include Sass, Modernizr, jQuery, Sass grid systems (Neat ou Susy) and Gulpfile for building stuff…

## Usage

```bash
$ yo tm [appname]
```

## Architecture

```bash
projectname/
   \_ vhost/
        |- dev/
        |    |- images/
        |    |- scripts/
        |    |    |- lib/
        |    |    |- vendor/
        |    |    |      |- jquery.min.js
        |    |    |      \_ custom.modernizr.min.com
        |    |    \_ main.js
        |    \- styles
        |         |- base/
        |         |- vendor/
        |         |- …/
        |         \_ main.scss
        \_ htdocs/
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
