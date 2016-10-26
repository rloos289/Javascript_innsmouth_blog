import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('post');
  },
  showUpdateForm: false,
  actions: {
    deletePost(post) {
      this.sendAction('deletePost', post);
    },
    savePost(params) {
      this.sendAction('savePost', params);
    }
  }
});
