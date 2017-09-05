// code = invitationCode
const REGISTRATION_CODE = {
    COORDINATOR_CHE: 'sWqft0984a',
    COORDINATOR_CIV: 'kqLSaaOaso',
    COORDINATOR_CPE: 'TdvOfclfae',
    COORDINATOR_ECE: 'sdSOdw89sG',
    COORDINATOR_IE: 'set29dsdlf',
    COORDINATOR_MEM: 'qklcco234d',
    COORDINATOR_ME:'WTdgOsfxj8',
    FACULTY_CHE: 'swOtfpdaU3',
    FACULTY_CIV: 'Tdlos8soWd',
    FACULTY_CPE: 'hlkNbvpKu',
    FACULTY_ECE: 'jhuyHm4Gvc',
    FACULTY_IE: 'AnbHy2j4Yt',
    FACULTY_MEM: 'rTgb8VcsEw',
    FACULTY_ME: 'zXclOuh7hU'
}
module.exports = {
    getCode:(restriction, program) => {
        switch(restriction){
            case 4:
            switch(program){
                case 1: return REGISTRATION_CODE[COORDINATOR_CHE];
                case 2: return REGISTRATION_CODE[COORDINATOR_CIV];
                case 3: return REGISTRATION_CODE[COORDINATOR_CPE];
                case 4: return REGISTRATION_CODE[COORDINATOR_ECE];
                case 4: return REGISTRATION_CODE[COORDINATOR_IE];
                case 6: return REGISTRATION_CODE[COORDINATOR_MEM];
                case 7: return REGISTRATION_CODE[COORDINATOR_ME];
                default: return null;
            }
            default:
            switch(program){
                case 1: return REGISTRATION_CODE[FACULTY_CHE];
                case 2: return REGISTRATION_CODE[FACULTY_CIV];
                case 3: return REGISTRATION_CODE[FACULTY_CPE];
                case 4: return REGISTRATION_CODE[FACULTY_ECE];
                case 4: return REGISTRATION_CODE[FACULTY_IE];
                case 6: return REGISTRATION_CODE[FACULTY_MEM];
                case 7: return REGISTRATION_CODE[FACULTY_ME];
                default: return null;
            }
        }
    },
    convertCode:(code) => {
        switch(code){
            case REGISTRATION_CODE[COORDINATOR_CHE]: return {restriction: 4, program:1 };
            case REGISTRATION_CODE[COORDINATOR_CIV]: return {restriction: 4, program:2 };
            case REGISTRATION_CODE[COORDINATOR_CPE]: return {restriction: 4, program:3 };
            case REGISTRATION_CODE[COORDINATOR_ECE]: return {restriction: 4, program:4 };
            case REGISTRATION_CODE[COORDINATOR_IE]: return {restriction: 4, program:5 };
            case REGISTRATION_CODE[COORDINATOR_MEM]: return {restriction: 4, program:6 };
            case REGISTRATION_CODE[COORDINATOR_ME]: return {restriction: 4, program:7 };
            case REGISTRATION_CODE[FACULTY_CHE]: return {restriction: 5, program:1 };
            case REGISTRATION_CODE[FACULTY_CIV]: return {restriction: 5, program:2 };
            case REGISTRATION_CODE[FACULTY_CPE]: return {restriction: 5, program:3 };
            case REGISTRATION_CODE[FACULTY_ECE]: return {restriction: 5, program:4 };
            case REGISTRATION_CODE[FACULTY_IE]: return {restriction: 5, program:5 };
            case REGISTRATION_CODE[FACULTY_MEM]: return {restriction: 5, program:6 };
            case REGISTRATION_CODE[FACULTY_ME]: return {restriction: 5, program:7 };
            default: return null;
        }
    }
};