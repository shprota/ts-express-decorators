import {Use} from "./use";
/**
 *
 * @param path
 * @param args
 * @returns {function(any, any, any): *}
 * @constructor
 */
export function Get(path:string){
    return Use('get', path);
}