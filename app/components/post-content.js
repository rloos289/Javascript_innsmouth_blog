import Ember from 'ember';

export default Ember.Component.extend({
  currentComment: null,
  showUpdateComment: false,
  actions: {
    saveComment(params) {
      this.sendAction('saveComment', params);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    showUpdateComment(comment) {
      this.set('showUpdateComment', true);
      this.set('currentComment', comment);
    },
    updateComment(params) {
      this.sendAction('updateComment', params, this.currentComment);
      this.set('showUpdateComment', false);
    }
  }
});
