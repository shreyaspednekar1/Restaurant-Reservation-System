(function() {

    angular.module('tabApp', []);

    angular.module('tabApp').controller('TabController', TabControllerfn)

    function TabControllerfn() {
        var mainVm = this;
        mainVm.setTab = function (newTab) {
            mainVm.tab = newTab;
        };


        mainVm.isSet = function (tabNum) {
            return mainVm.tab === tabNum;
        };


        mainVm.delete = function (num) {
            mainVm.people.splice(num, 1);
        };

        mainVm.addguest = function () {
            mainVm.newPerson.id = mainVm.people.length + 1;
            mainVm.people.push(mainVm.newPerson);
        };

        mainVm.people = [
            {
                "id": 1,
                "name": "Shreyas Pednekar",
                "Time": "8 / 7 / 2015, 12.00pm",
                "Contact": "317 - 603 - 7168",
                "Size": "2",
                "edit": "glyphicon glyphicon-edit",
                "delete": "glyphicon glyphicon-trash"
            },
            {
                "id": 2,
                "name": "Sukanya Sukhavasi",
                "Time": "8 / 7 / 2015, 1.00pm",
                "Contact": "317 - 603 - 7168",
                "Size": "3",
                "edit": "glyphicon glyphicon-edit",
                "delete": "glyphicon glyphicon-trash"

            },
            {
                "id": 3,
                "name": "Chaitanya Baraskar",
                "Time": "8 / 7 / 2015, 5.00pm",
                "Contact": "317 - 603 - 7168",
                "Size": "7",
                "edit": "glyphicon glyphicon-edit",
                "delete": "glyphicon glyphicon-trash"
            },
            {
                "id": 4,
                "name": "Prashant Patel",
                "Time": "8 / 7 / 2015, 2.00pm",
                "Contact": "317 - 603 - 7168",
                "Size": "4",
                "edit": "glyphicon glyphicon-edit",
                "delete": "glyphicon glyphicon-trash"
            },
            {
                "id": 5,
                "name": "Abhijit Badwe",
                "Time": "8 / 7 / 2015, 4.00pm",
                "Contact": "317 - 603 - 7168",
                "Size": "2",
                "edit": "glyphicon glyphicon-edit",
                "delete": "glyphicon glyphicon-trash"
            },
            {
                "id": 6,
                "name": "Akshay Sane",
                "Time": "8 / 7 / 2015, 8.00pm",
                "Contact": "317 - 603 - 7168",
                "Size": "5",
                "edit": "glyphicon glyphicon-edit",
                "delete": "glyphicon glyphicon-trash"
            },
            {
                "id": 7,
                "name": "Ashish Ambavane",
                "Time": "8 / 7 / 2015, 12.00pm",
                "Contact": "317 - 603 - 7168",
                "Size": "3",
                "edit": "glyphicon glyphicon-edit",
                "delete": "glyphicon glyphicon-trash"
            },
            {
                "id": 8,
                "name": "Shreyas Jathar",
                "Time": "8 / 7 / 2015, 8.00pm",
                "Contact": "317 - 603 - 7168",
                "Size": "5",
                "edit": "glyphicon glyphicon-edit",
                "delete": "glyphicon glyphicon-trash"
            },
            {
                "id": 9,
                "name": "Akshay Virkud",
                "Time": "8 / 7 / 2015, 2.00pm",
                "Contact": "317 - 603 - 7168",
                "Size": "6",
                "edit": "glyphicon glyphicon-edit",
                "delete": "glyphicon glyphicon-trash"
            },
            {
                "id": 10,
                "name": "Ameya Kulkarni",
                "Time": "8 / 7 / 2015, 7.00pm",
                "Contact": "317 - 603 - 7168",
                "Size": "2",
                "edit": "glyphicon glyphicon-edit",
                "delete": "glyphicon glyphicon-trash"
            },
        ];
    }


})();


