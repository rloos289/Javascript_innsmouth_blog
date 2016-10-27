import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(post) {
      if(confirm('Are you sure you want to delete this post? (Have you checked with the Elder Gods yet?)')) {
        this.sendAction('deletePost', post);
      }
    },
    showUpdate(post) {
      this.sendAction('showUpdate', post);
    }
  }
});
