import express from 'express';
import ctrl from './highscore.ctrl.js';

let router = express.Router();


router.route('/highscores')
    .get(ctrl.getAll)
    .post(ctrl.insert);



export default router;
