from flask import Flask, request
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app)

@app.route('/submit-form', methods=['POST'])
def handle_form():
    data = request.form
    send_email(data['Email'], data['FirstName'], data.get('LastName', ''), data.get('Phone', ''))
    return 'Form submitted successfully'

def send_email(email, first_name, last_name, phone):
    sender_email = "contact@motorsprima.com"
    receiver_email = sender_email
    password = "Gried12Goupon!@3"
    

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = "New Registration Details"

    body = f"""
        <body style="display:flex; justify-content: center; align-items: center;">
            <div>
                <div style="text-align: center;">
                    <p style="font-size: 24px;"><b>New form submission on Motors Prima</b></p>
                </div>
                <div style="font-size: 18px; style="text-align: center;">
                    <p><b>Name:</b> {first_name}</p>
                    <p><b>Email:</b> {email}</p>
                    <p><b>Phone:</b> {phone}</p>
                </div>
            </div>
        </body>
        """
    message.attach(MIMEText(body, "html"))

    server = smtplib.SMTP('mail.motorsprima.com', 587)
    server.starttls()
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, message.as_string())
    server.quit()

if __name__ == "__main__":
    app.run(debug=True, port=5000)
