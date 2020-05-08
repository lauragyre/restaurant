export function menuPage (){

    let main = document.querySelector('#content');
    let heading = document.createTextNode('selections include:');
    let lineBreak = document.createElement('br');
    let lineBreak2 = document.createElement('br');
    main.appendChild(heading);
    main.appendChild(lineBreak);
    main.appendChild(lineBreak2);
    

    let list = document.createElement('ul');
    let list1 = document.createElement('li');
    let food1 = document.createTextNode('sushi');
    let list2 = document.createElement('li');
    let food2 = document.createTextNode('not sushi');

    main.append(list);
    list.append(list1);
    list1.append(food1);
    list.append(list2);
    list2.append(food2);


}