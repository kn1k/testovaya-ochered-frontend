import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-testovaya-ochered-участник-l');
  this.route('i-i-s-testovaya-ochered-участник-e',
  { path: 'i-i-s-testovaya-ochered-участник-e/:id' });
  this.route('i-i-s-testovaya-ochered-участник-e.new',
  { path: 'i-i-s-testovaya-ochered-участник-e/new' });
});

export default Router;
