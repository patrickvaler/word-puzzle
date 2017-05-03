import express from 'express';
import ctrl from './word.ctrl.js';

let router = express.Router();


router.route('/words')
    .get(ctrl.getMangledWordList);


router.route('/words/:_id/validate')
    .post(ctrl.validateWord);

export default router;