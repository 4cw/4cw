Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('Legal');
Router.route('generalLinks');
Router.route('alcoholLinks');
Router.route('transition');
Router.route('oralHealth');
Router.route('breastHealth');
Router.route('acne');
Router.route('insuranceIssuesInCollege');
Router.route('eatingHealthy');
Router.route('nutrients');
Router.route('vegetarianism');
Router.route('foodAllergies');
Router.route('bmi');
Router.route('exerciseInCollege');
Router.route('excessiveExercise');
Router.route('fitnessGuide');
