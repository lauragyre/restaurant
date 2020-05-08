export function mainPage () {

    const content = document.querySelector('#content');

    const image = document.createElement('img');
    image.src = 'sushi.jpg';
    image.id = 'sushi'; 

    const paraDiv = document.createElement('div');
    paraDiv.id = 'text';
    const para = document.createElement('p');
    const paraText = document.createTextNode("Foods include: Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify a nuts nori azuki bean chickweed potato bell pepper artichoke.");


    content.append(image);

    content.append(paraDiv);
    paraDiv.append(para);
    para.append(paraText);

}