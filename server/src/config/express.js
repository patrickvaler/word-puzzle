import bodyParser from 'body-parser';

export default (app) => {
    app.use(bodyParser.urlencoded({ extend: true}));
    app.use(bodyParser.json());
}