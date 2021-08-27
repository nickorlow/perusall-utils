export type perusallScore = {
    "_id": string,
    "courseId": string,
    "documentId": string,
    "position": {
      "startY": number,
      "endY": number
    },
    "range": {
      "type": string,
      "start": number,
      "end": number,
      "page": number
    },
    "fragment": string,
    "text": string,
    "type": string,
    "anonymous": boolean,
    "userId": string,
    "edited": boolean,
    "upvoters": string[],
    "replies": number,
    "taggedById": string,
    "textHash": string,
    "editedAt": {
      "$date": number
    },
    "lastReplyAt": {
      "$date": number
    },
    "createdAt": {
      "$date": number
    },
    "tagIds": string[],
    "score": number,
    "starredBy": string[],
    "updatedAt": {
      "$date": number
    },
    "onTime": boolean
};

