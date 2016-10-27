import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('post');
  },
  //if this is manually triggered, it displays the update form
  currentPost: null,
  showUpdateForm: false,
  actions: {
    deletePost(post) {
      this.sendAction('deletePost', post);
    },
    savePost(params) {
      this.sendAction('savePost', params);
    },
    showUpdate(post) {
      this.set("showUpdateForm", true);
      this.set('currentPost', post);
    },
    updatePost(params) {
      this.sendAction('updatePost', this.currentPost, params);
      this.set('showUpdateForm', false);
    }
  }
});
