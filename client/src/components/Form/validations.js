export default (form) => {
    let errors = {};

    const regexName = /^([a-zA-Z ]+)$/i;
    const regexImg = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/i;
    const regexNum = /^([0-9])*$/


    if(!form.name){
        errors.name = "The field cant be empty";
    } else if(!form.heightmin || !form.heightmax){
        errors.height = "The field HEIGHT cant be empty";
    } else if(!form.weightmin || !form.weightmax){
        errors.weight = "The field WEIGHT cant be empty";
    } else if(!form.temperaments || form.temperaments.length < 2){
        errors.temperaments = "Select at least two";
    }

    if(form.name && !regexName.test(form.name)){
        errors.name = "The name cant have special characters or numbers"
    }

    if(form.heightmin && !regexNum.test(form.heightmin)){
        errors.heightmin = "ONLY NUMBERS BETWEEN 10 AND 200!"
    }
    if(form.heightmax && !regexNum.test(form.heightmax)){
        errors.heightmax = "ONLY NUMBERS BETWEEN 10 AND 200"
    }
    if(form.weightmin && !regexNum.test(form.weightmin)){
        errors.weightmin = "ONLY NUMBERS BETWEEN 1 AND 200"
    }
    if(form.weightmax && !regexNum.test(form.weightmax)){
        errors.weightmax = "ONLY NUMBERS BETWEEN 1 AND 200"
    }
    if(form.agesmin && !regexNum.test(form.agesmin)){
        errors.agesmin = "ONLY NUMBERS BETWEEN 1 AND 25"
    }
    if(form.agesmax && !regexNum.test(form.agesmax)){
        errors.agesmax = "ONLY NUMBERS BETWEEN 1 AND 25"
    }

    if(form.image && !regexImg.test(form.image)){
        errors.image = "Verify the file, something is wrong"
    }

    if(form.heightmin >= form.heightmax){
        errors.height = "Verify the fields, a number is wrong"
    }

    if(form.weightmin >= form.weightmax){
        errors.weight = "Verify the fields, a number is wrong"
    }

    if(form.agesmin >= form.agesmax){
        errors.ages = "Verify the fields, a number is wrong"
    }

    return errors;

}