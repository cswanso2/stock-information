import Ember from 'ember';

var companies = [
  {
    id: 1,
    name: 'China',
    symbol: 'Asia',
    prices: [3,4,5,3,2,1]/*[{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},
    {dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},
    {dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1}]*/
  },
  {
    id: 2,
    name: 'India',
    symbol: 'Asia',
  },
  {
    id: 3,
    name: 'USA',
    symbol: 'America',
  },
  {
    id: 4,
    name: 'Indonesia',
    symbol: 'Asia',
  },
  {
    id: 5,
    name: 'Brazil',
    symbol: 'America',
  },
  {
    id: 6,
    name: 'Pakistan',
    symbol: 'Asia',
  },
  {
    id: 7,
    name: 'Nigeria',
    symbol: 'Africa',
  },
  {
    id: 8,
    name: 'Bangladesh',
    symbol: 'Asia',
  },
  {
    id: 9,
    name: 'Russia',
    symbol: 'Europe',
  },
  {
    id: 10,
    name: 'Japan',
    symbol: 'Asia',
  }
];

export default Ember.Route.extend({
	model: function(params) {
    
    return companies[0];
}
});
