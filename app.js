(function () {
    'use strict';
    
    angular.module('myFirstAssignment', [])
    
    .controller('lunchController', lunchController);

    lunchController.$inject = ['$scope'];
    function lunchController($scope)
    {
        $scope.input;
        $scope.message="";
        $scope.border;
        $scope.color;
        $scope.getMessage = function()
        {
            var messageTemp = generateMessage($scope.input);
            $scope.message = messageTemp;
            if($scope.message==="Please input some value!" || $scope.message==="Too Much!")
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
            return "Please input some value!";
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
        if(count<=3)
        {
            return "Enjoy!";
        }
        return "Too Much!";
    }
    
})();
    