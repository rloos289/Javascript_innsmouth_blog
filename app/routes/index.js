import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('post');
  },
  //format line breaks, come back
  formattedContent: Ember.computed('post', function() {
    return Ember.String.htmlSafe(this.get('post.content'));
  }),
});
