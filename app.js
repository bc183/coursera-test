(function () {
    'use strict';
    
    angular.module('myFirstAssignment', [])
    
    .controller('lunchController', lunchController);

    lunchController.$inject = ['$scope'];
    function lunchController($scope)
    {
        $scope.input="";
        $scope.message="";
        $scope.border;
        $scope.color;
        $scope.getMessage = function()
        {
            var messageTemp = generateMessage($scope.input);
            $scope.message = messageTemp;
            if($scope.message==="Please enter data first!")
            {
                $scope.color= {"color" : "red"}
                $scope.border={"border-color" : "red"}
            }
            else
            {
                $scope.color={"color" : "green"}
                $scope.border={"border-color" : "green"}
            }
        }

    }
    function generateMessage(string)
    {
        if(string.trim().length===0)
        {
            return "Please enter data first!";
        }
        var array = string.split(",");
        var count=0;
        for(var i=0;i<array.length;i++)
        {
            if(array[i].trim().length!=0)
            {
                count++;
            }
        }
        if(count<=3 && count>0)
        {
            return "Enjoy!";
        }
        if(count==0)
        {
            return "Please enter data first!";
        }
        return "Too Much!";
    }
    
})();
    