import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { chooseResumeReducer } from "./reducers/chooseResumeReducer";
import { resumeDetailsReducer } from './reducers/resumeDetailsReducer';
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";

const initialState = {
    resumeDetails: localStorage.getItem('resumeDetails') ?
            JSON.parse(localStorage.getItem('resumeDetails'))
            :{
        profileSummary: 'No summary at all',
        personalInfo: localStorage.getItem('personalInfo') ?
            JSON.parse(localStorage.getItem('personalInfo'))
        
            :{
                firstName: 'uzair', lastName: 'shah', profession: 'job', city: 'Lahore', province: 'punjab', phone: '03357484575', email: 'uzair@gmail.com'
            },
        goalsInfo: localStorage.getItem('jobInfo') ?
            JSON.parse(localStorage.getItem('jobInfo'))
            :{
            pastJob:'completed',presentJob:'engineer',futureJob:'not an engineer'
        },
        workExperience: localStorage.getItem('workInfo') ?
            JSON.parse(localStorage.getItem('workInfo'))
            :[{ title: '',employer:'',city:'',state:'',description:'', startDate: '', endDate: '' }],
        facts: ["dont have", "anyfact"],
        skills: localStorage.getItem('skillsInfo') ?
            JSON.parse(localStorage.getItem('skillsInfo'))
            :[{}],
        educationInfo: localStorage.getItem('educationInfo') ?
            JSON.parse(localStorage.getItem('educationInfo'))
            :[{
            instituteName: 'comasts',
            instituteLocation: 'lahore',
            studyField: 'softwareengineering',
            studyStatus: false,
            graduationStartDate: 'jan',
            graduationEndDate: 'jan',
            description:""
            }
        ],
        socialLinks: localStorage.getItem('socialLinksInfo') ?
            JSON.parse(localStorage.getItem('socialLinksInfo'))
            
             //:['uzairfacebook',''],
              :[{ socialSite: '', socialLink: '' }],
        languages: ['urdu', 'english'],
        hobbies: ['play', ''],
        recentJobs:{job:'', employer:'development', jobCity:'lahore', jobStartDate:'23-4-45', jobEndDate:'12-2-23', stillWorking:false}

    },
    // choosenResume: { choosenResume: '', },
    choosenResume: {
        choosenResume: localStorage.getItem('choosenResume') ?
            JSON.parse(localStorage.getItem('choosenResume'))
            :'',
    },
    // userSignin: {
    //     userInfo: localStorage.getItem('userInfo') ?
    //         JSON.parse(localStorage.getItem('userInfo'))
    //         :null,
    // },
};
const reducer = combineReducers({
    resumeDetails: resumeDetailsReducer,
    choosenResume: chooseResumeReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;