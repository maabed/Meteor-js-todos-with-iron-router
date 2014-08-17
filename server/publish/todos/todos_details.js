/*****************************************************************************/
/* TodosDetails Publish Functions
/*****************************************************************************/

Meteor.publish('todos_details', function (id) {
    return Todos.find({_id: id});
});
