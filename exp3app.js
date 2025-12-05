// exp3/app.js

angular.module('tableApp', [])
    .controller('TableController', function () {
        const vm = this;

        vm.students = [
            { name: 'Asha',  age: 22, dept: 'CSE' },
            { name: 'Bikram', age: 24, dept: 'ECE' },
            { name: 'Charu', age: 21, dept: 'ME' },
            { name: 'Deep',  age: 23, dept: 'CSE' },
            { name: 'Esha',  age: 20, dept: 'EE' }
        ];

        vm.sortKey = 'name';   // default sort
        vm.reverse = false;    // ascending
        vm.searchText = '';    // used for filter in assessment
    });
