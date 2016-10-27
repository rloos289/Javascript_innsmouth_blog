import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(params) {
      this.sendAction('saveComment', params);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    }
  }
});
