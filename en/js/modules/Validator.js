import Toast from './Components/Toast/Toast';

export default function Validator(user_data) {
        const errors = [];
        if(Object.keys(user_data).length > 3){
                if (!user_data["FirstName"] || user_data["FirstName"].length < 2 || user_data["FirstName"].length > 30) {
                        errors.push("Name must be between 2 and 30 characters.");
                }
                if (!user_data["LastName"] || user_data["LastName"].trim().length < 2 || user_data["LastName"].trim().length > 30) {
                        errors.push("Lastname must be between 2 and 30 characters.");
                }
                const phonePattern = /^\+[1-9]\d{1,14}$/; // Международный формат E.164
            
                if (!user_data["Phone"] || !phonePattern.test(user_data["Phone"])) {
                        errors.push("Invalid phone number");
                }
                if (!user_data["Email"].trim()) {
                        errors.push("Invalid email");
                }
        }else if(Object.keys(user_data).length === 3) {
                if (!user_data["FirstName"] || user_data["FirstName"].length < 2 || user_data["FirstName"].length > 30) {
                        errors.push("Name must be between 2 and 30 characters.");
                }
                const phonePattern = /^\+[1-9]\d{1,14}$/; // Международный формат E.164
            
                if (!user_data["Phone"] || !phonePattern.test(user_data["Phone"])) {
                        errors.push("Invalid phone number");
                }
                if (!user_data["Email"].trim()) {
                        errors.push("Invalid email");
                }
        }else {
                if (!user_data["Email"].trim()) {
                        errors.push("Invalid email");
                }
        }

        errors.forEach(error => {
                Toast(error, "red");
        })

        return errors;
}