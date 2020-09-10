const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

const Tasks = require('../models/task');
const Users = require('../models/user');
const Admins = require('../models/admin');


const adminType = new GraphQLObjectType({
	name: 'Admin',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: new GraphQLNonNull(GraphQLString) },
		surname: { type: new GraphQLNonNull(GraphQLString) },
		login: { type: new GraphQLNonNull(GraphQLString) },
		phone: { type: new GraphQLNonNull(GraphQLString) },
	}),
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    surname: { type: new GraphQLNonNull(GraphQLString) },
	login: { type: new GraphQLNonNull(GraphQLString) },
	age: {type: new GraphQLNonNull(GraphQLInt)},
	phone: { type: new GraphQLNonNull(GraphQLString) },
	endDate: { type: new GraphQLNonNull(GraphQLString)},
	taskList: {
		type: TaskType,
		resolve({ taskId }, args) {
			return Tasks.findById(taskId);
		}
	}
  }),
});

const TaskType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: new GraphQLNonNull(GraphQLString) },
	text: { type: new GraphQLNonNull(GraphQLString) },
    photo: { type: new GraphQLNonNull(GraphQLString) },
	date: { type: new GraphQLNonNull(GraphQLString) }
  }),
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addAdmin: {
			type: adminType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				surname: { type: new GraphQLNonNull(GraphQLString) },
				login: { type: new GraphQLNonNull(GraphQLString) },
				phone: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, { name, surname, login,  phone}) {
				const admin = new Admins({
					name,
					surname,
					login,
					phone
				});
				return admin.save();
			},
		},
		addUser: {
			type: UserType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				surname: { type: new GraphQLNonNull(GraphQLString) },
				login: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt)},
				phone: { type: new GraphQLNonNull(GraphQLString) },
				endDate: { type: new GraphQLNonNull(GraphQLString)}
			},
			resolve(parent, { name, surname, login, age, endDate, phone}) {
				const user = new Users({
					name,
					surname,
					login,
					age,
					endDate,
					phone
				});
				return user.save();
			},
		},
		addTask: {
			type: TaskType,
			args: {
				title: { type: new GraphQLNonNull(GraphQLString) },
				text: { type: new GraphQLNonNull(GraphQLString) },
				photo: { type: new GraphQLNonNull(GraphQLString) },
				date: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parent, {title, text, photo, date}) {
				const task = new Tasks({
					title,
					text,
					photo,
					date,
				});
				return task.save();
			},
		},
		deleteUser: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve(parent, { id }) {
				return Users.findByIdAndRemove(id);
			}
		},
		deleteMovie: {
			type: TaskType,
			args: { id: { type: GraphQLID } },
			resolve(parent, { id }) {
				return Tasks.findByIdAndRemove(id);
			}
		},
		updateUser: {
			type: UserType,
			args: {
				id: { type: GraphQLID },
				name: { type: new GraphQLNonNull(GraphQLString) },
				surname: { type: new GraphQLNonNull(GraphQLString) },
				login: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt)},
				phone: { type: new GraphQLNonNull(GraphQLString) },
				endDate: { type: new GraphQLNonNull(GraphQLString)}
			},
			resolve(parent, { id,  name, surname, age, login, endDate, phone}) {
				return Directors.findByIdAndUpdate(
					id,
					{ $set: { name, surname, age, login, endDate, phone} },
					{ new: true },
				);
			},
		},
		updateTask: {
			type: TaskType,
			args: {
				id: { type: GraphQLID },
				title: { type: new GraphQLNonNull(GraphQLString) },
				text: { type: new GraphQLNonNull(GraphQLString) },
				photo: { type: new GraphQLNonNull(GraphQLString) },
				date: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parent, {id, title, text, photo, date }) {
				return Movies.findByIdAndUpdate(
					id,
					{ $set: { title, text, photo, date } },
					{ new: true },
				);
			},
		},
	}
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
		return Users.findById(id);
      },
    },
	task: {
      type: TaskType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
		return Tasks.findById(id);
      },
    },
	users: {
		type: new GraphQLList(UserType),
		resolve(parent, args) {
			return Users.find({});
		}
	},
	tasks: {
		type: new GraphQLList(TaskType),
		resolve(parent, args) {
			// return directors;
			return Tasks.find({});
		}
	}
  }
});

module.exports = new GraphQLSchema({
  query: Query,
	mutation: Mutation,
});
