(function(){
	angular.module("turtleFacts").controller("listCtrl", ListController);
	
	ListController.$inject = ['quizMetrics','DataService'];
	
	function ListController(quizMetrics,DataService){
	this.quizMetrics = quizMetrics;
	this.data=DataService.turtlesData;
	this.activeTurtle={};
	this.changeActiveTurtle=changeActiveTurtle;
	this.activateQuiz = activateQuiz;
	this.search="";
	
	 
	 function changeActiveTurtle(index){
		 this.activeTurtle = index;
	}
	
	function activateQuiz(){
		quizMetrics.changeState("quiz",true);
	}
	
	}
	
	
	
})();