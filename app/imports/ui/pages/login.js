import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Login_Page.events({
  'submit form': function(event){
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function(error){
      if(!error) {
      	console.log("User logged in");
      	console.log(Meteor.userId())
      	FlowRouter.go("Calendar_Page")
      } else {
      	console.log(error);
      }
    });
  }
});
