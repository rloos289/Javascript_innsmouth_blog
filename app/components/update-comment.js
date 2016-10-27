import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateComment(params) {
     params = {
      name: this.get('name'),
      content: this.get('content'),
      post: this.get('post')
    };
      this.sendAction('updateComment', params);
      this.set('name','');
      this.set('content','');
    }
  }
});
