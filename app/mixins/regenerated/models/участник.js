import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  фамилия: DS.attr('string'),
  датаВступления: DS.attr('date'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УчастникE', 'участник', {
    фамилия: Projection.attr('Фамилия', { index: 0 }),
    датаВступления: Projection.attr('Дата вступления', { index: 1 })
  });
  modelClass.defineProjection('УчастникL', 'участник', {
    фамилия: Projection.attr('Фамилия', { index: 0 }),
    датаВступления: Projection.attr('Дата вступления', { index: 1 })
  });
};
