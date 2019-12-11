import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Stuff = new Mongo.Collection('Stuff');

export const StuffSchema = new SimpleSchema({

	EventTitle: {
		label: 'EventTitle',
		type: String,
		optional: false,
		max: 100
	},

	EventType: {
		label: 'Category',
		type: String,
		optional: false,
		max: 100
	},

	EventDate: {
		label: 'Date',
		type: String,
		optional: false,
		max: 8
	},

	EventTimeS: {
		label: 'StartTime',
		type: String,
		optional: true,
		max: 8
	},

	EventTimeF: {
		label: 'FinishTime',
		type: String,
		optional: true,
		max: 8
	},

	EventDescription: {
		label: 'Description',
		type: String,
		optional: true,
		max: 10000
	},


});

Stuff.attachSchema(StuffSchema);

Meteor.methods({
	'stuff.insert'(newEvent) {
		check(newEvent, StuffSchema);
		if(!Meteor.userId()) {
			throw new Meteor.Error("Not an authorized insert");
		}
		stuff.insert({newEvent})
	},
	'stuff.remove'(removeEvent) {
		check(removeEvent, StuffSchema);
		Stuff.remove(removeEvent);
	},
})
