const { Schema, model } = require('mongoose');

const groupSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        totalMessages: {
            type: Number,
            required: true,
        },
        lastModified: {
            type: Date,          
        },
        going: {
            type: Boolean,
        },
        messages: [messageSchema],
        user: [userSchema],
    },
)

const Group = model('Group', groupSchema);

module.exports = Group;