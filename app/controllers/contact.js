import Ember from 'ember';

export default Ember.Controller.extend({

  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),


  isMsgValid:Ember.computed.gte('message.length', 5),
  isEnabled: Ember.computed.and('isEmailValid','isMsgValid'),
  emailAddress: '',
  message: '',


  actions: {

    sendMessage() {
      alert(`The message sending is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('message', '');

    }
  }
});
