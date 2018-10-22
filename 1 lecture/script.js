"use strict";

prost:
for (let i = 1; i < 101; i++){
    if (i == 1) {
        i++;
    }
    for(let j = 2; j < i; j++) {
        if ( i % j == 0) continue prost;
    }
        document.write("Делители этого числа: " + 1 + " и " + i);
}