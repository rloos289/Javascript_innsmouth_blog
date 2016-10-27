import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePost(params) {
      var params = {
        title: this.get('title'),
        picture: this.get('picture'),
        date: this.get('date'),
        content: this.get('content')
      };
      this.sendAction('updatePost', params)
      this.set('title', '');
      this.set('picture', '');
      this.set('date', '');
      this.set('content', '');
    }
    }
});
