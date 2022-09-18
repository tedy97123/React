/* import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import { DateField } from 'uniforms-semantic';
 

const schema = {
    title: 'User',
    type: 'object',
    properties: {
        userName:{type:'string'},
        text:{type:'string'},
        do_you_want_to_share_your_work_experience:{type:'string'},
        workExperience:{
            description:'Work experience in years',
            type:'integer',
            minimum:0,
            maximum:100,
        },
    },
    required:['userName', 'text']
};

const ajv = new Ajv ({ allErrors:true , useDefaults:true });

function createValidator(schema: object) {
    const validator = ajv.compile(schema);

    return(model: object) => {
        validator(model);
        return validator.errors?.length ? {details: validator.errors} : null;
    };
}

const schemaValidator = createValidator(schema);


export const bridge = new JSONSchemaBridge(schema, schemaValidator);

 /* This is the reply schema */

/* const replySchema ={ 
    title:'UserReply',
    type: 'object',
    properties: {
        userName:{type:'string'},
        password:{type:'string'},
        created_on:{type:'string'},
        date :{
        created_At : {type:Date },
        updatedAt: {type:Date },
      },
    },
};
const ajv1 = new Ajv ({ allErrors:true , useDefaults:true });

function createValidator1(replySchema: object) {
    const validator = ajv.compile(replySchema);

    return(model: object) => {
        validator(model);
        return validator.errors?.length ? {details: validator.errors} : null;
    };
}

const schemaValidator1 = createValidator(replySchema);


export const bridge1 = new JSONSchemaBridge(replySchema, schemaValidator);
 */ 