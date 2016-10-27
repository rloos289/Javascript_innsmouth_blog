import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
    comments: this.store.findAll('comment'),
    post: this.store.findRecord('post', params.post_id)
    });
  },
  actions: {
    saveComment(params) {
      var postid = post;
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', postid);
    },
    deleteComment(comment) {
      comment.destroyRecord();
      this.transitionTo('post');
    },
    updateComment(params, comment) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
      this.transitionTo('post');
    }
  }
});
