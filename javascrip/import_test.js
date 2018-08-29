import {name,name1,name2,add} from '/export_test.js'

import name from '/export_test.js'

export default{
    data(){
        return {}
    },
    created() {
        alert(name);
        alert(name1);
        alert(name2);
        add(3,4);
    },
}