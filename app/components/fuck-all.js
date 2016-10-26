import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('post');
  },
  //if this is manually triggered, it displays the update form
  showUpdateForm: false,
  actions: {
    deletePost(post) {
      this.sendAction('deletePost', post);
    },
    savePost(params) {
      this.sendAction('savePost', params);
    },
    showUpdate() {
      this.set("showUpdateForm", true);
    }
  }
});
