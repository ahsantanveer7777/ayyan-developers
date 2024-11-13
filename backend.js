require('dotenv').config(); // For .env File
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 5500;

app.use('/public', express.static('public')); // serving static files
app.use(express.urlencoded({ extended: true })); //Used for contact form post request

app.get('/', (req, res)=>{
    res.status(200).sendFile('templates/index.html', {root: __dirname});
});
app.get('/about', (req, res)=>{
    res.status(200).sendFile('templates/about.html', {root: __dirname});
});
app.get('/services', (req, res)=>{
    res.status(200).sendFile('templates/services.html', {root: __dirname});
});
app.get('/project', (req, res)=>{
    res.status(200).sendFile('templates/project.html', {root: __dirname});
});
app.get('/contact', (req, res)=>{
    res.status(200).sendFile('templates/contact.html', {root: __dirname});
});


// Route to handle contact form submission
app.post('/contact', (req, res) => {
    const { name, email, number, address, message, myGender } = req.body;
 
    // Check for missing fields
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
          user: process.env.EMAIL_USER, // Your email from .env
          pass: process.env.EMAIL_PASS  // Your email password from .env
       }
    });

   // Mail options
   let mailOptions = {
    from: email, // Sender's email from the contact form
    to: 'ahsantanveer1@gmail.com', // Recipient/Client email
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nContact Number: ${number}\nAddress: ${address}\nMessage: ${message}\nGender: ${myGender}`
 }; 

 // Send email
 transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
       return res.status(500).json({ success: false, message: 'Error sending email', error });
    } else {
       return res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
 });
}); 


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
}); 