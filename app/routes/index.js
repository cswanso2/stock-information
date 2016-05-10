import Ember from 'ember';

var companies = [
  {
    id: 1,
    name: 'China',
    symbol: 'Asia',
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
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model: function(params) {
    var name = params['search'];
  	var result = [];
  	for(var i = 0; i < 10; i ++)
  	{
  		var obj = companies[i];
  		if(obj.name.indexOf(name) === 0)
  		{
  			result.push(obj);
  		}
  	}
    return result;
  }
});

