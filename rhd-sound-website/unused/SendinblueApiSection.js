// Sendinblue transactional emails API section
        
        // // Use Sendinblue library
        // //const SibApiV3Sdk = require('sib-api-v3-sdk');
        // let defaultClient = SibApiV3Sdk.ApiClient.instance;

        // // Instantiate Sendinblue client
        // let apiKey = defaultClient.authentications['api-key'];
        // apiKey.apiKey = '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';
        // let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
        // let smtpEmailToSend = new SibApiV3Sdk.SendSmtpEmail();

        // // Email details
        // smtpEmailToSend.subject = "Website Enquiry";
        // smtpEmailToSend.sender = 'ross.hugh.duncan@gmail.com';
        // smtpEmailToSend.to = 'ross@rhd-sound.com';
        // smtpEmailToSend.replyTo = 'ross.hugh.duncan@gmail.com';
        // smtpEmailToSend.htmlContent = "<html><body>This is a test message with <b>a bold section.</b></body></html>";

        // apiInstance.sendTransacEmail(smtpEmailToSend).then((data) => {
        //     console.log(`API successfully called. Data returned: ${JSON.stringify(data)}`);
        // }, (error) => {
        //     console.log(`Error occurred: ${error}`);
        // })