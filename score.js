function score() {
    let math = parseFloat(document.getElementById('math').value);
    let literature = parseFloat(document.getElementById('literature').value);
    let english = parseFloat(document.getElementById('english').value);
    let areaSelect = document.getElementById('area').value;
    let bonus = 0;

    switch (areaSelect) {
        case 'KV1':bonus=0.75; break;
        case 'KV2':bonus=0.25; break;
        case 'KV2-NT':bonus=0.5; break;
        case 'KV3': bonus = 0;break;
       }
    let total = math + literature + english + bonus;
    document.getElementById('result').innerHTML = total;
}
