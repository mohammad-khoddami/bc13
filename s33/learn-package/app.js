// import _ from "lodash";

// const a = _.chunk(["a", "b", "c", "d"], 3);
// console.log(a);

// const b = _.difference([2, 1], [2, 3]);
// console.log(b);

import axios from "axios";

try {
    const response = await axios.get("https://dummyjson.com/products");
    const result = response.data;
    console.log(result);
} catch (error) {
    console.error(error);
}
