 

app.controller('atm', ['$scope', function ($scope){

	var bal = 50000;
	$scope.dep = function(num2){
		$scope.ttld = parseInt(bal)+ parseInt(num2);
		$scope.noe1 = 'Successful Transaction';
		$scope.noe2 = 'Total Balance: ';
		bal = $scope.ttld;


	}

	$scope.wid = function(num1){
		$scope.total = parseInt(bal) - parseInt(num1);
		$scope.not1 = 'Successful Transaction';
		$scope.not2 = 'Remaining Balance: ';
		bal = $scope.total;

	}
	
	

}])