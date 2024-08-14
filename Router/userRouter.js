// const express = require('express')
// const {Signup,Login,scoreStudent,makeAdmin,update,getAll, verifyEmail} = require('../Controller/userController')
// const {signUpValidator} = require('../Middleware/validator')
// const {Authenticate} = require('../Middleware/auth')

// const router = express.Router();

// router.post('/sign-up',Signup)
// router.post('/sign-in',Login)  
// router.put('/update-score/:id',Authenticate,scoreStudent)  
// router.put('/make-admin/:id',makeAdmin)
// router.put('/updatename/:id',update)
// router.get('/allstudent',Authenticate,getAll)
// router.get('/verify/:Token',verifyEmail)
// module.exports = router

const express = require('express');
const { signUp, logIn, scoreStudent, makeAdmin, verifyEmail, resendVerificationEmail, update, getAll, ForgetPassword, ResetPassword, changePassword} = require('../Controller/userController');
const { signUpValidator, logInValidator } = require('../Middleware/validator');
const { Authenticate } = require('../Middleware/auth');

const router = express.Router();

router.post('/sign-up', signUpValidator, signUp);
router.post('/sign-in', logInValidator, logIn);
router.put('/update-score/:id', Authenticate, scoreStudent);
router.put('/make-admin/:id', makeAdmin);
router.get('/verify/:token', verifyEmail);
router.post('/resend-verification', resendVerificationEmail);
router.put('/update/:id',update)
router.get('/all',Authenticate,getAll)
router.post('/forgot-password',ForgetPassword)
router.post('/reset-password/:token',ResetPassword)
router.put('/change-password/:token',changePassword)

module.exports = router 