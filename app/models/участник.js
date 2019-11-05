import { Model as УчастникMixin, defineProjections } from
  '../mixins/regenerated/models/участник';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, УчастникMixin, {

});

defineProjections(Model);
export default Model;
