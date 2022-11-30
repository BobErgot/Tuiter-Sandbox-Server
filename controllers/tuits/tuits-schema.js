import mongoose from 'mongoose';

const schema = mongoose.Schema({
                                   avatar: String,
                                   userName: String,
                                   handle: String,
                                   time: String,
                                   verified: Boolean,
                                   topic: String,
                                   tuit: String,
                                   image: String,
                                   title: String,
                                   liked: Boolean,
                                   replies: Number,
                                   retuits: Number,
                                   likes: Number,
                                   dislikes: Number,
                                   dislike: Boolean
                               }
                               , {collection: 'tuits'});

export default schema;

