describe('to-dot-case', function () {

var assert = require('assert');
var dot = require('to-dot-case');

it('shouldnt touch dot case', function () {
  assert('a.dot.case.string' == dot('a.dot.case.string'));
});

it('should convert slug case', function () {
  assert('a.slug.case.string' == dot('a-slug-case-string'));
});

it('should convert camel case', function () {
  assert('a.camel.case.string' == dot('aCamelCaseString'));
});

it('should convert snake case', function () {
  assert('a.snake.case.string' == dot('a_snake_case_string'));
});

it('should convert space case', function () {
  assert('a.space.case.string' == dot('a space case string'));
});

it('should convert title case', function () {
  assert('a.title.case.of.string' == dot('A Title: Case of String'));
});

it('should convert sentence case', function () {
  assert('a.sentence.case.string' == dot('A sentence case string.'));
});

it('should convert constant case', function () {
  assert('a.constant.case.string' == dot('A_CONSTANT_CASE_STRING'));
});

});