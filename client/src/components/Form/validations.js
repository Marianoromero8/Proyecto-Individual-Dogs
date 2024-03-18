export default (form) => {
    let errors = {};

    const regexName = /^([a-zA-Z ]+)$/i;
    const regexImg = /\.(jpg|jpeg|png|gif)$/i;
    const regexNum1Al200 = /^(1?\d{1,2}|200)$/;
    const regexNum10Al200 = /^(1\d\d|[1-9]\d|200)$/;
    const regexNum1Al25 = /^(0*[1-9]|1\d|2[0-5])$/;




    if(!form.name){
        errors.name = "The field cant be empty";
    } else if(!form.heightmin || !form.heightmax){
        errors.height = "The field HEIGHT cant be empty";
    } else if(!form.weightmin || !form.weightmax){
        errors.weight = "The field WEIGHT cant be empty";
    } else if(!form.temperament || form.temperament.length < 2){
        errors.temperament = "Select at least two";
    }

    if(form.name && !regexName.test(form.name)){
        errors.name = "The name cant have special characters or numbers"
    }

    if(form.heightmin && !regexNum10Al200.test(form.heightmin)){
        errors.heightmin = "ONLY NUMBERS BETWEEN 10 AND 200!"
    }
    if(form.heightmax && !regexNum10Al200.test(form.heightmax)){
        errors.heightmax = "ONLY NUMBERS BETWEEN 10 AND 200"
    }
    if(form.weightmin && !regexNum1Al200.test(form.weightmin)){
        errors.weightmin = "ONLY NUMBERS BETWEEN 1 AND 200"
    }
    if(form.weightmax && !regexNum1Al200.test(form.weightmax)){
        errors.weightmax = "ONLY NUMBERS BETWEEN 1 AND 200"
    }
    if(form.agemin && !regexNum1Al25.test(form.agemin)){
        errors.agemin = "ONLY NUMBERS BETWEEN 1 AND 25"
    }
    if(form.agemax && !regexNum1Al25.test(form.agemax)){
        errors.agemax = "ONLY NUMBERS BETWEEN 1 AND 25"
    }

    if(form.heightmin >= form.heightmax){
        errors.height = "Verify the fields, a number is wrong"
    }

    if(form.weightmin >= form.weightmax){
        errors.weight = "Verify the fields, a number is wrong"
    }

    if(form.agemin >= form.agemax){
        errors.age = "Verify the fields, a number is wrong"
    }

    return errors;

}