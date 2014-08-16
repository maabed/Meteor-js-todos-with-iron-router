/*****************************************************************************/
/* TodosIndex Publish Functions
/*****************************************************************************/

Meteor.publish('todos_index', function () {
  // you can remove this if you return a cursor
    return Todos.find({user_id:this.userId});
});
