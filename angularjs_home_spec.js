'use strict';
 
var AngularPage = require('./angular.pageobj.js');
 
describe('angularjs homepage', function () {
  var page;
 
  beforeEach(function () {
    page = new AngularPage();
  });
 
  it('should greet the named user', function () {
    page.typeName(page.nameToType);
    expect(page.greeting).toEqual(page.expectedGreeting);
  });
 
  describe('todo list', function () {
    it('should list todos', function () {
      expect(page.todoList.count()).toEqual(2);
      expect(page.todoAt(1)).toEqual('build an angular app');
    });
 
    it('should add a todo', function () {
      page.addTodo(page.todoName);
      expect(page.todoList.count()).toEqual(3);
      expect(page.todoAt(2)).toEqual(page.todoName);
    });
  });
 
});