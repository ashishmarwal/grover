var vows = require('vows'),
    assert = require('assert'),
    fs = require('fs'),
    path = require('path'),
    util = require('../lib/index'),
    cover = require('../lib/coverage'),
    exists = fs.existsSync || path.existsSync,
    grover = require('../lib/grover'),
    runTest = function(file, timeout, cb) {
        if (!cb) {
            cb = timeout;
            timeout = '';
        }
        var options = [
            '--coverage',
            path.join(__dirname, file)
        ];
        if (timeout && Array.isArray(timeout)) {
            timeout.forEach(function(i) {
                options.push(i);
            });
        }
        grover.process(options, function(err, json) {
            cb(err, json[0]);
        });
    };

var tests = {
    'should execute a good test with yuitest': {
        topic: function() {
            var self = this;
                _exit = util.exit;
            util.exit = function() {};
            runTest('./html/yuitest.html', function(err, json) {
                util.exit = _exit;
                self.callback(err, json);
            });
        },
        'and have suite name': function(json) {
            assert.equal(json.name, 'YQL');
        },
        'and should have 8 passing tests': function(json) {
            assert.equal(json.passed, 8);
        },
        'and should have 0 failed tests': function(json) {
            assert.equal(json.failed, 0);
        },
        'and should execute a good test with yuitest with coverage warn': {
            topic: function() {
                var self = this;
                    _exit = util.exit;
                util.exit = function() {};
                runTest('./html/yuitest.html', [
                    '--coverage-warn',
                    '101'
                ], function(err, json) {
                    util.exit = _exit;
                    self.callback(err, json);
                });
            },
            'and have suite name': function(json) {
                assert.equal(json.name, 'YQL');
            },
            'and should have 8 passing tests': function(json) {
                assert.equal(json.passed, 8);
            },
            'and should have 0 failed tests': function(json) {
                assert.equal(json.failed, 0);
            }
        }
    }
};

vows.describe('yuitest').addBatch(tests).export(module);
