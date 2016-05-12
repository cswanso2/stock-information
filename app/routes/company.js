import Ember from 'ember';

var companies = [
  {
    id: 1,
    name: 'Google',
    symbol: 'Goog',
    prices: 
    {
      labels: ["4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","4/11/2016","5/02/2016",
      "5/03/2016","5/04/2016","5/05/2016","5/06/2016","5/07/2016","5/09/2016","5/10/2016","5/11/2016"],
      datasets:[{ 
        data:[4.41,4.40,5.31,3.31,2.25,1.43,4.41,4.40,5.31,3.31,2.25,1.43,4.41,4.40,5.31,3.31,2.25,1.43,4.41,4.40,5.31,3.31,2.25,1.43,4.41,4.40,5.31,3.31,2.25,1.43],
        label: "date"
      }]
      /*[{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},
    {dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},
    {dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1},{dollars: 5, cents: 1}]*/
    }
  },
];

export default Ember.Route.extend({
	model: function(params) {
    
    return companies[0];
}
});
