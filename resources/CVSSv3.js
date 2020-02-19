function countCVSSv3() {
    let exp = 0;
    let imp = 0;
    let impBase = 0;
    let score = 0;

    let select = document.getElementById('select7');
    let value = select.value;
    let AV;
    switch (value) {
        case 'P':
            AV = 0.2;
            break;
        case 'L':
            AV = 0.55;
            break;
        case 'A':
            AV = 0.62;
            break;
        case 'N':
            AV = 0.85;
            break;
    }
    select = document.getElementById('select8');
    value = select.value;
    let AC;
    switch (value) {
        case 'H':
            AC = 0.44;
            break;
        case 'L':
            AC = 0.77;
            break;
    }
    select = document.getElementById('select11');
    value = select.value;
    let S;
    switch (value) {
        case 'U':
            S = 0.0;
            break;
        case 'C':
            S = 1;
            break;
    }
    select = document.getElementById('select9');
    value = select.value;
    let PR;
    switch (value) {
        case 'N':
            PR = 0.85;
            break;
        case 'L':
            if (S === 1)
                PR = 0.68;
            else
                PR = 0.62;
            break;
        case 'H':
            if (S === 1)
                PR = 0.5;
            else
                PR = 0.27;
            break;
    }
    select = document.getElementById('select10');
    value = select.value;
    let UI;
    switch (value) {
        case 'N':
            UI = 0.85;
            break;
        case 'R':
            UI = 0.62;
            break;
    }
    select = document.getElementById('select12');
    value = select.value;
    let C;
    switch (value) {
        case 'N':
            C = 0.0;
            break;
        case 'L':
            C = 0.22;
            break;
        case 'H':
            C = 0.56;
            break;
    }
    select = document.getElementById('select13');
    value = select.value;
    let I;
    switch (value) {
        case 'N':
            I = 0.0;
            break;
        case 'L':
            I = 0.22;
            break;
        case 'H':
            I = 0.56;
            break;
    }
    select = document.getElementById('select14');
    value = select.value;
    let A;
    switch (value) {
        case 'N':
            A = 0.0;
            break;
        case 'L':
            A = 0.22;
            break;
        case 'H':
            A = 0.56;
            break;
    }

    exp = 8.22 * AV * AC * PR * UI;
    impBase = 1 - ((1 - C) * (1 - I) * (1 - A));

    if (S === 0) {
        imp = 6.42 * impBase;
    } else {
        imp = 7.52 * (impBase - 0.029) - 3.25 * Math.pow((impBase - 0.02), 15);
    }

    if (imp <= 0) {
        score = 0;
    } else if (S === 0) {
        if (exp + imp < 10) {
            score = (exp + imp).toFixed(1);
        } else {
            score = 10;
        }
    } else {
        if (1.08 * (exp + imp) < 10) {
            score = (exp + imp).toFixed(1);
        } else {
            score = 10;
        }
    }

    document.getElementById('CVSSv3Score').innerHTML = score;

}