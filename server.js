const express = require('express');
const mailgun = require('mailgun-js'); // Import mailgun-js

const app = express();
const port = 5001; // Use a fixed port number, if 5000 is already in use

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mailgun configuration
const DOMAIN = 'sandbox5e7927eca796414fb807a00421b34202.mailgun.org'; // Your Mailgun domain
const API_KEY = 'df327cceab10f443e40870b4d5362319-f6fe91d3-0264d2bb'; // Your Mailgun API key

// Initialize Mailgun
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN }); 

// POST endpoint to send email
app.post('/send-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ message: 'Email is required' });
  }

    const data = {
        from: 'DeakinApp <no-reply@yourdomain.com>',
        to: email,
        subject: 'Welcome',
        text: 'Lucky to have u here !',
    };
  

  try {
    // Send email using Mailgun
    const response = await mg.messages().send(messageData); // Correct method in mailgun-js
    res.status(200).send({ message: 'Subscription email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error sending email' }); // Correct status code 500
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
