function countCVSSv2() {
    let exp = 0;
    let imp = 0;
    let score = 0;

    let select = document.getElementById('select1');
    let value = select.value;
    let AV;
    switch (value) {
        case 'L':
            AV = 0.395;
            break;
        case 'A':
            AV = 0.646;
            break;
        case 'N':
            AV = 1.0;
            break;
    }
    select = document.getElementById('select2');
    value = select.value;
    let AC;
    switch (value) {
        case 'H':
            AC = 0.35;
            break;
        case 'M':
            AC = 0.61;
            break;
        case 'L':
            AC = 0.71;
            break;
    }
    select = document.getElementById('select3');
    value = select.value;
    let AU;
    switch (value) {
        case 'M':
            AU = 0.45;
            break;
        case 'S':
            AU = 0.56;
            break;
        case 'N':
            AU = 0.704;
            break;
    }
    select = document.getElementById('select4');
    value = select.value;
    let C;
    switch (value) {
        case 'N':
            C = 0.0;
            break;
        case 'P':
            C = 0.275;
            break;
        case 'C':
            C = 0.66;
            break;
    }
    select = document.getElementById('select5');
    value = select.value;
    let I;
    switch (value) {
        case 'N':
            I = 0.0;
            break;
        case 'P':
            I = 0.275;
            break;
        case 'C':
            I = 0.66;
            break;
    }
    select = document.getElementById('select6');
    value = select.value;
    let A;
    switch (value) {
        case 'N':
            A = 0.0;
            break;
        case 'P':
            A = 0.275;
            break;
        case 'C':
            A = 0.66;
            break;
    }
    exp = 20 * AV * AC * AU;
    imp = 10.41 * (1 - (1 - C) * (1 - I) * (1 - A));
    let fimp = 0;
    if (imp != 0) {
        fimp = 1.176;
    }

    score = (((0.6 * imp) + (0.4 * exp) - 1.5) * fimp).toFixed(1);

    document.getElementById('CVSSv2Score').innerHTML = score;

}