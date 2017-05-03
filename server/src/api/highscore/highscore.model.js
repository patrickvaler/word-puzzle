import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let HighscoreSchema = new Schema({
    nickname: String,
    score: Number
});


export default mongoose.model('Highscore', HighscoreSchema);