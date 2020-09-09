import selected_set from "./appendSelected";
import {merged_strings} from './buildAll.js';
export default () => {
    selected_set.clear();
    merged_strings.HTMLAll= '';
    merged_strings.CSSAll= '';
    merged_strings.JSAll= '';
    //clear all checkbox functionality via state change left to be implemented
}