angular.module('tableApp', [])
  .controller('TableController', function() {
    var vm = this;

    // Data from your screenshot
    vm.students = [
      { name: 'Asha', age: 22, dept: 'CSE' },
      { name: 'Bikram', age: 24, dept: 'ECE' },
      { name: 'Charu', age: 21, dept: 'ME' },
      { name: 'Deep', age: 23, dept: 'CSE' },
      { name: 'Esha', age: 20, dept: 'EE' }
    ];

    // Default sort settings
    vm.sortKey = 'name';
    vm.reverse = false;
  });
