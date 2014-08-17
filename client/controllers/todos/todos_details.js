TodosDetailsController = RouteController.extend({
  waitOn: function () {
      var id = this.params._id;
      Meteor.subscribe('todos_details', id)
  },

  data: function () {
      var id = this.params._id;
      return Todos.findOne({_id: id});
  },

  action: function () {
    this.render();
     this.layout('NoBreadcrumbs');
  }
});
