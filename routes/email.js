const router = require('express').Router();
let Email = require('../models/Email.model');


router.route('/').get((req, res) => {
  Email.find()
    .then(emails => res.json(emails))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const email = req.body.email;
  const body = req.body.body;


  const newEmail = new Email({
    email,
    body
  });


  newEmail.save()
  .then(() => res.json('Email added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {  
    Email.findById(req.params.id)  
      .then(email => res.json(email))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  


  router.route('/:id').delete((req, res) => {  
    Email.findByIdAndDelete(req.params.id)  
      .then(() => res.json('Email deleted.'))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  


  router.route('/update/:id').post((req, res) => {  
    Email.findById(req.params.id)  
      .then(email => {  
        email.email = req.body.email;  
        email.body = req.body.body;  
         email.save()  
          .then(() => res.json('Email updated!'))  
          .catch(err => res.status(400).json('Error: ' + err));  
      })  
      .catch(err => res.status(400).json('Error: ' + err));  
  });


module.exports = router;