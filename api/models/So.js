/**
 * So.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  attributes: {
		soCode: {
			type:'string',
			unique:true,
			maxLength: 1,
			uppercase: true,
			required: true
		},
		description:{
			type: 'string'
		},
		sopi:{
			collection: 'sopi',
			via: 'so'
		}
  },
  beforeCreate:(values, next) => {
	  values.soCode = values.soCode.toUpperCase();
  }
};

