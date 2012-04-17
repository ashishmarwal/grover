YUITest Wrapper for PhantomJS
=============================

A little command line tool for running [YUITest](http://yuilibrary..com/yuitest) html
files inside of PhantomJS.

This release supports exiting with the proper exit code to fail a build.

Installation
------------

You must have the `phantomjs` command line tool installed prior to running this.

    npm -g install grover

Output
------

     grover app/tests/app.html yui/tests/index.html loader/tests/index.html editor/tests/editor.html
     Starting Grover on 4 files with PhantomJS@1.5.0
     :) [App Framework] Passed: 246 Failed: 0 Total: 246 (ignored 0)
     :) [YUI Core Test Suite] Passed: 41 Failed: 0 Total: 42 (ignored 1)
     :) [Loader Automated Tests] Passed: 52 Failed: 0 Total: 52 (ignored 0)
     :( [Editor] Passed: 30 Failed: 1 Total: 31 (ignored 0)
         Failed! test: EditorSelection
             Unexpected error: 'null' is not an object
             ---------------------------------------
             :( [Total] Passed: 369 Failed: 1 Total: 371 (ignored 1)


Saving Results
--------------

Grover supports the 4 ways that YUITest exports it's tests results so you can import them
into another system.

    grover ./tests/*.js -o ./results/results.json --json
    grover ./tests/*.js -o ./results/results.xml --xml
    grover ./tests/*.js -o ./results/results.tap --tap
    grover ./tests/*.js -o ./results/results.junit.xml --junit



What's with the name?
---------------------

This tool is dedicated to [Ryan Grove](https://github.com/rgrove) for all his work on YUI over the last year.
I told him that my next command line tool would be named "grover" after "rgrove".