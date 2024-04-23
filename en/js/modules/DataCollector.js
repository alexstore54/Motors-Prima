import Validator from "./Validator";


export default async function DataCollector(form) { 
    
    let myModal = new bootstrap.Modal(document.getElementById('StepByStep'), {
        keyboard: false
    });

    const data = {};
    
        if(Array.from(form.querySelectorAll('input')).length > 3 ) {

            data["FirstName"] = form.querySelector('input[name="FirstName"]').value ;
            data["LastName"] = form.querySelector('input[name="LastName"]').value;
            data["Email"] = form.querySelector('input[name="email"]').value;
            data["Phone"] = form.querySelector('input[name="phone"]').value;

        }else if(Array.from(form.querySelectorAll('input')).length === 3 ) {
            data["FirstName"] = form.querySelector('input[name="FirstName"]').value ;
            data["Email"] = form.querySelector('input[name="email"]').value;
            data["Phone"] = form.querySelector('input[name="phone"]').value;
        }else {
            data["Email"] = form.querySelector('input[name="email"]').value;
        }
        
        const ValidErrors = Validator(data);

        if(ValidErrors.length > 0) {
            return

            }else {            
              myModal.show();

              localStorage.setItem('user_data', JSON.stringify(data));
            }


}


