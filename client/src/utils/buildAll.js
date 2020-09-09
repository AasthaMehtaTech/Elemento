// to merge html (just the code inside body), css , js codes of selected/checked elements
import selected_set from './appendSelected';
import extractBody from './extractBody';

import {element_value} from '../components/element/ElementValue';

const final_data = element_value();

function filterById(jsonObject, id) {
    return jsonObject.filter(function(jsonObject) {
        return jsonObject['_id'] == id;
    });
}

var merged_strings = {
    HTMLAll: '',
    CSSAll: '',
    JSAll: '',
}

function appendAll() {
    selected_set.forEach(this_id);
    function this_id(id_here) {
        final_data.then(res =>
            {
            var element_data = filterById(res.elements, id_here)[0];
            merged_strings.HTMLAll = merged_strings.HTMLAll +  extractBody(element_data['HTMLCode']);
            merged_strings.CSSAll = merged_strings.CSSAll + element_data['CSSCode'];
            merged_strings.JSAll = merged_strings.JSAll + element_data['JSCode'];
            console.log('See this: HTMLAll');
            console.log(merged_strings.HTMLAll);
            }
        );
    }
};

export {merged_strings, appendAll };
