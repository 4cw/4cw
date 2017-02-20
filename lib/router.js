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
