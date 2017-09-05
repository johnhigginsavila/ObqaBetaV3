/**
 * Class.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
  attributes: {
		programCourse:{
			model: 'programCourse',
			required: true
		},
		user:{
			model: 'user',
			required: true
		},
		program:{
			model:'program',
			required:true
		},
		term:{
			type: 'integer',
			required: true
		},
		academicYear: {
			type: 'string',
			required: true,
			minLength: 9,
			maxLength: 9
		},
		cycle:{
			type: 'integer',
			required:true,
			enum:[1,2,3]
		},
		room:{
			type: 'string',
			
		},
		description:{
			type:'string'
		},
		classStudent:{
			collection: 'classStudent',
			via: 'class'
		},
		assessmentClass:{
			collection: 'assessmentClass',
			via: 'class'
		},
		evidence:{
			collection:'evidence',
			via:'class'
		}
  },
  afterCreate(record, cb){
	  //console.log(record);
	  createAssessmentClass(record);
  },
  afterUpdate(record, cb){
	  //console.log(record);
	  createAssessmentClass(record);
  },
  afterDelete(record, cb){
  }
};

function createAssessmentClass(record){
	Assessment.find({program:record.program, assessmentCycle:record.cycle, programCourse:record.programCourse})
	.then(function(result){
		if(result.length == 0){
			console.log('Cannot find assessment');
			throw [{name:'assessmentFindOneError', message:'Cannot find the assessment'}];
		}else{
			return result;
		}
	}).then(function(result){
		result.forEach((item, index, array) => {
			AssessmentClass.findOne({assessment:item.id, class:record.id})
			.then(function(assessmentClass){
				console.log(assessmentClass);
				if(!assessmentClass){
					AssessmentClass.create({assessment:item.id, class:record.id})
					.then(function(result){
						//console.log(result);
						//console.log('AssessmentClass: successfull created a record.');
					}).catch(function(err){
						throw err;
					})
				}else{
					AssessmentClass.update({id:assessmentClass.id}, {assessment:item.id, class:record.id})
					.then(function(result){

					}).catch(function(err){
						throw err;
					})
				}
			})
		})
	}).catch(function(err){
		console.log(err);
	})
}

