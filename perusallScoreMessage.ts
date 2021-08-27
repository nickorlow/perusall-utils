import {perusallScore} from './perusallScore';

export type perusallScoreMessage = {
    "msg": "result",
    "id": string,
    "result": perusallScore[]
};