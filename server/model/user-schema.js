// import mongoose from "mongoose";



// const userSchema = mongoose.Schema({
//     name : String,
//     username : String,
//     email : String,
//     phone : String
// })


// const user = mongoose.model('user',userSchema);

// export default user;




import mongoose from "mongoose";

// Define a separate schema for the sequence
const sequenceSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 0 }
});

// Create a model for the sequence
const Sequence = mongoose.model('Sequence', sequenceSchema);

// Define your user schema
const userSchema = new mongoose.Schema({
    _id: { type: Number },
    name: String,
    username: String,
    email: String,
    phone: String
});

// Pre-save hook to auto-increment the _id field
userSchema.pre('save', async function(next) {
    if (!this._id) {
        this._id = await getNextSequenceValue('user_id');
    }
    next();
});
// Function to get the next sequence value
async function getNextSequenceValue(sequenceName) {
    const sequenceDoc = await Sequence.findByIdAndUpdate(
        { _id: sequenceName },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
    );

    return sequenceDoc.sequence_value;
}

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;