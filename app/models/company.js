import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default  DS.Model.extend({
  name: attr('string'),
  symbol: attr('string')
  //prices: DS.hasMany('comment');
});
