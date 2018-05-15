"use strict";
const mongoose = require('mongoose');
//describes the data type
const HackerSchema = new mongoose.Schema({
    //account id
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required:true
    },
    status: {
        type: String,
        enum: ['None', 'Applied', 'Accepted', 'Waitlisted', 'Confirmed', 'Denied', 'Checked in'],
        required: true,
        default: 'None'
    },
    school: {
        name: String,
        required: true
    },
    //no enum for this
    gender: {
        type: String
    },
    needsBus: Boolean,
    application: {
        portfolioURL: {
            //gcloud bucket link
            resume: {
                type: String,
                required: true
            },
            github: {
                type: String,
            },
            dropler: {
                type: String,
            },
            personal: {
                type: String,
            },
            linkedIn: {
                type: String,
            },
            other: {
                type: String,
            }
        },
        jobInterest: {
            type: String,
            enum: ['Internship','Full-time','None'],
            required: true,
            default: 'None'
        },
        skills: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        }],
        //any miscelaneous comments that the user has
        comments: {
            type: String,
            default: ''
        },
        //"Why do you want to come to our hackathon?"
        essay: {
            type: String,
            default: ''
        },
        team: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team'
        }
    }

});

HackerSchema.methods.toJSON = function () {
    const hs = this.toObject();
    delete hs.__v;
    hs.id = hs._id;
    delete hs._id;
    return hs;
};
//export the model
module.exports = mongoose.model('Hacker', HackerSchema);