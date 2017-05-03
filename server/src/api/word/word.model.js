import mongoose from 'mongoose';
import random from 'mongoose-random';

let Schema = mongoose.Schema;

let WordSchema = new Schema({
    name: String,
    mangled: String
});

WordSchema.plugin(random, {path: 'random'});

export default mongoose.model('Word', WordSchema);



