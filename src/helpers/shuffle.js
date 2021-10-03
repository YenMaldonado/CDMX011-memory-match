import data from '../data/webdev/webdev.js';

export const shuffle =()=>{
    let dataDuplicate = data.items;
    dataDuplicate = dataDuplicate.concat(data.items);
    for(let i = dataDuplicate.length -1; i>0; i--){
    let j = Math.floor(Math.random()* (i+1));
    [dataDuplicate[i], dataDuplicate[j]] = [dataDuplicate[j], dataDuplicate[i]];
    }
    return dataDuplicate;
};