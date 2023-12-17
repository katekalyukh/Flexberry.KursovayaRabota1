import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КоррекцияMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-коррекция';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КоррекцияMixin, Validations, {
});

defineProjections(Model);

export default Model;
