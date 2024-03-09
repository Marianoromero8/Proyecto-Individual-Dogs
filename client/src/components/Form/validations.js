export default (form) => {
    let errors = {};

    if(!form.breed || !form.heightmin || !form.heightmax || !form.weightmin || !form.weightmax || !form.ages || !form.temperament.length){
        errors = "Complete all data"
    }

    if(form.breed.length > 20){
        errors.breed = "Breed Name is to long"
    }

    if(form.breed.match(/^[A-Z]/)){
        errors.breed = "Breed name must start with a capital letter"
    }

    if(form.weightmin > form.weightmax){
        errors.weightmin = "Weight min must be less than max"
    }

    if(form.weightmax < form.weightmin){
        errors.weightmax = "Weight max must be bigger than min"
    }

    if(form.agesmin < 1){
        errors.agesmin = "Age min must be bigger than 0"
    }

    if(form.agesmax > 22){
        errors.agesmax = "Age max must be less than 22"
    }

    if(form.temperament.length > 5){
        errors.temperament = "Temperaments only 5"
    }

    return Object.keys(errors).length > 0 ? errors : {};

}