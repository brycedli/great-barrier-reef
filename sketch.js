let staticBuffer;
let circleBuffer;
let textBuffer;
let socialMono;
let sfCompactLight;
let bioBoundary;
let overallBoundary;
let csrioTable;
let australia;
let elements = new Map();
let rows;
let cols;

let iconMap;

let backgroundColor = "#9C9C9C";
let mapColor = "#6C6C6C";
let circleColor = "#B4B4B4";
let brandPink = "#FA56C0";
let brandOrange = "#FF9900";
let brandBlue = "#5981F5";
let brandBlueLight = "#849DF1"

let mezzotintImg = "https://cstudiocoral.s3.amazonaws.com/mezzotint+lighter.png";

let timeClicked;
const gridSize = 20;

let tableMap;
let paragraphMap;
let imageMap;

const popupHeight = 12;
const popupWidth = 21;
function preload(){
    p5.disableFriendlyErrors = true;
    imageMap = new Map();
    imageMap.set('Mollusca', "https://cstudiocoral.s3.amazonaws.com/Mollusca.png");
    imageMap.set('Chordata', "https://cstudiocoral.s3.amazonaws.com/Chordata.png");
    imageMap.set('Arthropoda', "https://cstudiocoral.s3.amazonaws.com/Arthopoda.png");
    imageMap.set('Bryozoa', "https://cstudiocoral.s3.amazonaws.com/Bryozoa.png");
    imageMap.set('Echinodermata', "https://cstudiocoral.s3.amazonaws.com/Echinodermata.png");
    imageMap.set('Chlorophyta', "https://cstudiocoral.s3.amazonaws.com/Algae.png");
    imageMap.set('Cnidaria', "https://cstudiocoral.s3.amazonaws.com/Cnidaria.png");
    imageMap.set('Porifera', "https://cstudiocoral.s3.amazonaws.com/Porifera.png");
    imageMap.set('Ochrophyta', "https://cstudiocoral.s3.amazonaws.com/Algae.png");
    imageMap.set('Rhodophyta', "https://cstudiocoral.s3.amazonaws.com/Algae.png");
    imageMap.set('Tracherophyta', "https://cstudiocoral.s3.amazonaws.com/Tracherophyta.png");
    imageMap.set('Brachiopoda', "https://cstudiocoral.s3.amazonaws.com/Brachiopoda.png");

    imageMap.forEach(function(value, key){ //preload
        createImg(value).remove();
    });

    paragraphMap = new Map();
    paragraphMap.set('Mollusca', "Mollusca is a large and diverse phylum of invertebrates that includes over 100,000 species, such as snails, clams, squids, and octopuses. The phylum is characterized by a soft body that is often protected by a hard shell, although some species lack shells. Mollusks are found in a wide range of environments, including oceans, freshwater habitats, and on land. They are important members of many ecosystems, serving as prey for larger animals and playing important roles as filter feeders, grazers, and scavengers. Mollusks have a complex nervous system and some, such as octopuses, are known for their intelligence and problem-solving abilities.")
    paragraphMap.set('Chordata', "Chordata is a diverse phylum of animals that includes over 70,000 known species, including mammals, birds, reptiles, fish, and amphibians. Chordates are characterized by the presence of a notochord, which provides support for the body, and a dorsal nerve cord that runs along the back. Chordates also possess pharyngeal slits or pouches that may develop into gills or other structures, and a post-anal tail. The phylum is found in a wide range of habitats, from the deep sea to freshwater and terrestrial environments. Many chordates, such as humans, are highly intelligent and have complex behaviors. Chordates play important ecological roles as predators, prey, and ecosystem engineers.")
    paragraphMap.set('Arthropoda', "Arthropoda is the largest phylum in the animal kingdom, containing more than one million known species, including insects, spiders, crabs, and shrimp. Arthropods are characterized by their jointed legs and exoskeletons, which provide support and protection for their bodies. They have segmented bodies and are found in a wide range of habitats, from the deep sea to freshwater and terrestrial environments. Arthropods play important ecological roles as pollinators, decomposers, and predators, and many are important sources of food for humans. They have complex nervous systems and exhibit a wide range of behaviors, from the intricate social structures of ants to the elaborate courtship displays of birds-of-paradise.");
    paragraphMap.set('Bryozoa', "Bryozoa, also known as moss animals, is a phylum of aquatic invertebrates that includes over 6,000 species. Bryozoans are colonial animals that form colonies by secreting calcareous skeletons. These colonies can take on a variety of shapes, from branching to encrusting. They are found in both marine and freshwater environments and play important roles as filter feeders, helping to maintain water quality. Bryozoans are often important members of marine ecosystems, providing habitat for other organisms and serving as food for many species. They have a simple nervous system and exhibit a range of behaviors, including the ability to retract their feeding structures into their skeletons for protection. Despite their ecological importance, bryozoans are relatively understudied compared to other invertebrate groups.");
    paragraphMap.set('Echinodermata', "Echinodermata is a phylum of marine invertebrates that includes around 7,000 species, including starfish, sea urchins, and sea cucumbers. Echinoderms are characterized by their spiny skin and a unique water vascular system that they use for locomotion, feeding, and respiration. They have a pentaradial symmetry as adults, with five parts radiating out from a central axis. Echinoderms play important ecological roles as predators, prey, and ecosystem engineers, and have significant cultural and economic value to humans. They have a simple nervous system and exhibit a range of behaviors, including the ability to regenerate lost limbs or organs.");
    paragraphMap.set('Chlorophyta', "Chlorophyta is a phylum of green algae that includes around 7,000 known species, ranging from unicellular to multicellular forms. They are found in a variety of aquatic habitats, from freshwater ponds to the open ocean, and some species are also found in terrestrial environments. Chlorophytes play important ecological roles as primary producers, providing food and oxygen for other organisms in their ecosystem. They have a simple structure, with a single chloroplast containing chlorophyll and other pigments for photosynthesis. Chlorophytes have been used extensively in research on topics such as photosynthesis and evolution, and they are also used commercially in the production of food additives and cosmetics. ");
    paragraphMap.set('Cnidaria', "Cnidaria is a phylum of aquatic invertebrates that includes around 11,000 species, such as jellyfish, coral, and sea anemones. Cnidarians have a simple body plan, with a sac-like body and tentacles armed with stinging cells called cnidocytes. They are found in a variety of aquatic habitats, from shallow waters to the deep sea, and play important ecological roles as predators and prey in their ecosystem. Some species, such as coral, provide habitat for other organisms and are important for maintaining the health of marine ecosystems. Cnidarians have a simple nervous system and exhibit a range of behaviors, from the coordinated swimming of jellyfish to the symbiotic relationships between coral and algae.");
    paragraphMap.set('Porifera', "Porifera is a phylum of aquatic invertebrates that includes around 9,000 known species, commonly known as sponges. Sponges have a unique body structure, consisting of a porous, asymmetrical body that allows water to flow through it, and they are found in a variety of aquatic habitats, from shallow waters to the deep sea. Sponges play important ecological roles as filter feeders, helping to maintain water quality, and some species provide habitat for other organisms. They have a simple structure and lack true tissues and organs, but they possess a variety of specialized cells that perform different functions.");
    paragraphMap.set('Ochrophyta', "Ochrophyta is a phylum of algae that includes around 25,000 known species, commonly known as brown algae. They are found in a variety of aquatic habitats, from intertidal zones to the deep sea, and some species are also found in terrestrial environments. Brown algae play important ecological roles as primary producers and provide habitat for other organisms in their ecosystem. They have a unique structure, with a thallus that can range in size from small tufts to giant kelps that can reach lengths of over 60 meters. Brown algae have a complex life cycle, alternating between haploid and diploid generations, and they possess a variety of specialized pigments for photosynthesis.");
    paragraphMap.set('Rhodophyta', "Rhodophyta is a phylum of algae that includes around 7,000 known species, commonly known as red algae. They are found in a variety of aquatic habitats, from intertidal zones to the deep sea, and some species are also found in terrestrial environments. Red algae play important ecological roles as primary producers and provide habitat for other organisms in their ecosystem. They have a unique structure, with a thallus that can range in size from microscopic to several meters in length. Red algae have a complex life cycle, alternating between haploid and diploid generations, and they possess a variety of specialized pigments for photosynthesis, including chlorophyll a and phycobilins.");
    paragraphMap.set('Tracherophyta', "Tracheophyta, also known as vascular plants, is a phylum that includes around 300,000 known species, making it one of the largest phyla in the plant kingdom. Vascular plants have a complex structure, including specialized tissues for water transport and support, allowing them to grow to great heights and live in a variety of environments, from deserts to rainforests. They play important ecological roles as primary producers, providing habitat and food for other organisms, and also help to maintain the health of the environment through processes such as carbon sequestration. Vascular plants have a unique life cycle, alternating between haploid and diploid generations, and they possess a variety of specialized pigments for photosynthesis, including chlorophyll a and b. ");
    paragraphMap.set('Brachiopoda', "Brachiopoda is a phylum of marine invertebrates that includes around 335 living species and numerous extinct species, commonly known as brachiopods or lampshells. Brachiopods are found in a variety of marine environments, from shallow waters to the deep sea, and they play important ecological roles as filter feeders, helping to maintain water quality. They have a unique structure, consisting of two shells that enclose a lophophore, a specialized feeding organ. Brachiopods have a complex life cycle, with larvae that go through a metamorphosis before settling on a substrate and developing into adult animals. They have been used extensively in research on topics such as paleontology, evolution, and biogeography, and some species are also of interest for their potential use in biomineralization research.");
    
    iconMap = new Map();
    iconMap.set('Chordata', "https://cstudiocoral.s3.amazonaws.com/chordata_icon.png");
    iconMap.set('Mollusca', "https://cstudiocoral.s3.amazonaws.com/mollusca_icon.png");
    iconMap.set('Arthropoda', "https://cstudiocoral.s3.amazonaws.com/arthopoda_icon.png");
    iconMap.set('Bryozoa', "https://cstudiocoral.s3.amazonaws.com/bryozoa_icon.png");
    iconMap.set('Echinodermata', "https://cstudiocoral.s3.amazonaws.com/echinodermata_icon.png");
    iconMap.forEach(function(value, key){ //preload
        createImg(value).remove();
    });
    mezzotintImg = loadImage(mezzotintImg);
    sfCompactLight = loadFont("https://cstudiocoral.s3.amazonaws.com/SF-Compact-Text-Light.ttf");
    socialMono = loadFont("https://cstudiocoral.s3.amazonaws.com/ABCSocialMono-Book-Trial.otf");
    australia = loadJSON("https://raw.githubusercontent.com/rowanhogan/australian-states/master/states.geojson");
    // overallBoundary = loadJSON("https://cstudiocoral.s3.amazonaws.com/gbrBound.geojson");
    // bioBoundary = loadJSON("https://cstudiocoral.s3.amazonaws.com/gbrBioregion.geojson");
    csrioTable = loadTable("https://cstudiocoral.s3.amazonaws.com/gbifGBR.csv", 'tsv', 'header');
}


let padding = 0;

function setup(){
    
    backgroundColor = color(backgroundColor);
    mapColor = color(mapColor);
    circleColor = color(circleColor);
    brandPink = color(brandPink);
    brandOrange = color(brandOrange);
    brandBlue = color(brandBlue);
    createCanvas(windowWidth, windowHeight);
    background(backgroundColor);
    staticBuffer = createGraphics(windowWidth, windowHeight);
    circleBuffer = createGraphics(windowWidth, windowHeight);
    textBuffer = createGraphics(windowWidth, windowHeight);
    textBuffer.strokeWeight(0);
    circleBuffer.strokeWeight(0);
    circleBuffer.background(156);
    cols = ceil(height/gridSize);
    rows = ceil(width/gridSize);
    for (let row = 0; row < rows; row++ ){
        for (let col = 0; col < cols; col++) {
            let cX = row;
            let cY = col;
            // let index = rows * col + row;
            let index = col + cols * row;
            elements.set(index, new Circle (cX, cY, 0));
            // elements [index] = new Text (cX, cY, 0);
            // elements [index] = new Star (cX, cY, 0, gridSize/2, gridSize/4);
        }
    }
    tableMap = new Map();
    for (let i = 0; i < csrioTable.getRowCount(); i++) {
        stroke(0);
        let p = coordToPoint(csrioTable.getRow(i).get(22), csrioTable.getRow(i).get(21));
        let grid = pointToGrid(p[0], p[1]);
        let index = grid[1] + cols * grid[0];
        let val = tableMap.get(index);
        if (!val){
            tableMap.set(index, []);
        }
        tableMap.get(index).push(csrioTable.getRow(i));        
        let e = elements.get(index);
        if (e && e instanceof Element){
            e.n += 1;
        }
    }
    staticBuffer.noFill();
    staticBuffer.stroke(circleColor);
    staticBuffer.strokeWeight(1);
    elements.forEach(function(value, key){
        staticBuffer.ellipse(value.x*gridSize + gridSize/2,value.y*gridSize + gridSize/2, gridSize, gridSize)
    });
    // for (let i = 0; i < elements.length; i++) {
    //     let e = elements[i];
    //     staticBuffer.noFill();
    //     staticBuffer.stroke(circleColor);
    //     staticBuffer.strokeWeight(1);
    //     staticBuffer.ellipse(e.x*gridSize + gridSize/2,e.y*gridSize + gridSize/2, gridSize, gridSize);
    // }
    drawDebugData();
    bioBoundary = "";
    overallBoundary = "";
    //3,3
    textBlock(1, 33, "great");
    textBlock(4, 34, "barrier");
    textBlock(2, 35, "reef");
    textBlock(2, 36, "survey of 2017");
    let s = "The Great Barrier Reef is one of\nthe most biodiverse regions on earth.\nFrom 2003 to 2006, the AIMS Lady\nBasten and the QDPIF Gwendoline May\nsurveyed 200,000 square miles of reef\nand collected 40,000 invertebrate,\nplant, and fish records, which are\ndisplayed here."
    textBlock(2, 40, s);
    // textBlock(48, 4, s);

}
let animals = [];

function textBlock (row, col, content) {
    let rowIndex = row;
    let colIndex = col;
    for (var i = 0; i < content.length; i++) {
        let c = content.charAt(i);
        rowIndex += 1;
        if (c == "\n"){
            rowIndex = row;
            colIndex += 1;
        }
        if (rowIndex < rows && colIndex < cols){
            placeText(rowIndex, colIndex, c);
        }
    }
}

function placeText (row, col, letter) {
    let index = col + cols * row;
    e = elements.get(index);
    // e = elements[index];
    // elements [index] = new Text (e.x, e.y, 1, letter);
    elements.set(index, new Text (e.x, e.y, 1, letter));
    elements.get(index).draw();
    // elements [index].draw();
}

let ms;
function draw() {  
    
    ms = millis();
    if (menuDiv){
        menuDiv.position(windowWidth - (min((ms-timeClickedButton)*1.5, 450)), 0);
    }
    if (ms < timeClicked + 1000){
        circleBuffer.background(156, 156, 156, 40);
        originCircle((15* sqrt(millis()-timeClicked)));
    }
    else if (ms < timeClicked + 1100) {
        circleBuffer.background(156);
    }
    image(circleBuffer, 0, 0);
    image(staticBuffer, 0, 0);
    
    strokeWeight(0);
    elements.forEach(function(value, key){

        if (value instanceof Element && value.n != 0 && !(value instanceof Text)){
            value.draw();
        }
        // staticBuffer.ellipse(value.x*gridSize + gridSize/2,value.y*gridSize + gridSize/2, gridSize, gridSize)
    });
    // for (let i = 0; i < elements.length; i++) {
    //     let e = elements[i];
    //     if (!e) {
    //         continue;
    //     }
    //     if (e instanceof Element && e.n != 0 && !(e instanceof Text)){
    //         e.draw();
    //     }
    // }
    animals.forEach(function (element) {
        element.draw();
    })
    image(textBuffer, 0, 0);

    
    if (ms%500 > 0){ //mouse hover
        let mouseGrid = pointToGrid(mouseX, mouseY);
        let index = mouseGrid[1] + cols * mouseGrid[0];
        let mouseElement = elements.get(index);    
        push();
        fill(brandPink);
        if (mouseElement && mouseElement instanceof Text) {
            fill(brandOrange);
        }
        if (mouseElement && mouseElement.n > 0 && (mouseElement instanceof Circle || mouseElement instanceof Star)){
            fill(brandBlue);
        }
        translate(mouseGrid[0]*gridSize, mouseGrid[1]*gridSize);
        rect(0,0,gridSize, gridSize);
        pop();
    }

    if (isPopup) {
        let index = currentLocation[1] + currentLocation[0] * cols;
        // let e = elements[index];
        let e = elements.get(index);
        fill(brandBlue);
        rect(-gridSize + gridSize * currentLocation[0], -gridSize + gridSize * currentLocation[1], 3 * gridSize, 3 * gridSize, gridSize/2);
        if (ms < timeClicked + 300){
            let val = map(ms - timeClicked, 0, 300, 0, 255);
            let c = color(brandBlue.toString());
            c.setAlpha(val);
            fill(c);
        }
        rect(gridSize + gridSize * currentLocation[0], gridSize + gridSize * currentLocation[1], gridSize * popupWidth, gridSize * popupHeight, gridSize/2);
        
        if (ms > timeClicked + 300){
            fill("FFFFFF");
            textAlign(LEFT, TOP);
            textSize(24);
            textFont(socialMono);
            let shortText = `There were ${e.n} recorded species in this circle.`;
            text(shortText, gridSize * 2 + gridSize * currentLocation[0], gridSize * 2 + gridSize * currentLocation[1], gridSize * 18);
        }
        fill(backgroundColor);
        ellipse(gridSize * currentLocation[0] + gridSize/2, gridSize * currentLocation[1]+ gridSize/2, gridSize, gridSize);
        
        e.draw("FFFFFF");
    }

}

let menuWidth = gridSize * 25;
let isDragged = false;
let currentPhylum;

function showMenu (phylum) {
    currentPhylum = phylum;
    timeClickedButton = millis();
//     let menuWidth = gridSize * 25;
// let menuHeight = windowHeight;
    menuIsShown = true;
    if (menuDiv){
        menuDiv.remove();
    }
    menuDiv = createElement("div");
    menuDiv.class("menuDiv");
    menuDiv.position(windowWidth - 450, 0);
    let iconContainer = createElement('div');
    iconContainer.style('display', 'flex');
    iconContainer.style('align-items', 'center');
    iconContainer.size(gridSize*3, gridSize*3);
    iconContainer.parent(menuDiv);
    if (iconMap.has(phylum)){ //if key is in iconMap
        let icon = createImg(iconMap.get(phylum));
        icon.size(gridSize*3, AUTO);
        icon.parent(iconContainer);
        icon.dragLeave(function(){
            isDragged = true;
        });
    }
    let menuTitle = createElement('h1', phylum);
    menuTitle.parent(menuDiv);
    let bodyText = createElement('p', paragraphMap.get(phylum));
    bodyText.parent(menuDiv);
    menuDiv.size(AUTO, windowHeight);
    if (imageMap.has(phylum)){
        let icon = createImg(imageMap.get(phylum));
        icon.parent(menuDiv);
        icon.class("screenImg");
        
    }
}

function mouseReleased() {
    if (isDragged){
        let currentGrid = pointToGrid(mouseX, mouseY);
        animals.push(new Animal(currentGrid[0], currentGrid[1], [round(random(-1, 1)), round(random(-1, 1))], loadImage(iconMap.get(currentPhylum))));
        print("dropped");
        
    }
    isDragged = false;

}

function hideMenu () {
    menuIsShown = false;
}

let isPopup = false;
let currentLocation = [0,0];
let longDisplayText = "";
let buttonsList;
let menuDiv;
let menuIsShown = false;
let timeClickedButton;
function mouseClicked(mouseEvent) {
    
    gridLocation = pointToGrid(mouseX, mouseY);
    let index = gridLocation[1] + gridLocation[0] * cols;
    // let c = elements[index];
    let c = elements.get(index);
    if (menuDiv && mouseX > (windowWidth-450)){
        return;
    }
    
    if (ms-timeClickedButton > 100 && menuDiv && !menuDiv.elt.contains(mouseEvent.target)){
        menuDiv.remove();
    }
    // else{
    //     if (menuDiv){
    //         menuDiv.remove();
    //     }
    // }
    // if (menuIsShown){
    //     // if ( mouseX > (windowWidth-580)){
    //     //     return;
    //     // }
    //     if( mouseX < (windowWidth-580)){
    //         hideMenu();
    //     }
    // }
    // else{
    //     if (menuDiv){
    //         menuDiv.remove();
    //     }
    // }
    // timeClickedButton = millis();
    if ((isPopup && ((gridLocation[0]>(currentLocation[0]+ 1)) && (gridLocation[0]<(currentLocation[0] + popupWidth + 1)) && (gridLocation[1]>(currentLocation[1] + 1)) && (gridLocation[1]<(currentLocation[1] + popupHeight + 1))))){
        return;
    }
    timeClicked = millis();
    if (buttonsList){
        buttonsList.forEach(element => {
            element.remove();
        });
    }
    if (c.n != 0 && (c instanceof Circle || c instanceof Star)){
        
        elements.set(index, new Star (c.x, c.y, c.n, gridSize/2, gridSize*2));
        isPopup = true;
        currentLocation = gridLocation;
        let phylums = new Map ();

        longDisplayText = "";
        let tableRows = tableMap.get(index);
        for (let i = 0; i < tableRows.length; i++) {
            let k = tableRows[i].get(4);
            if (phylums.has(k)){
                phylums.set(k, phylums.get(k)+1);
            }
            else{
                phylums.set(k, 1);
            }
        }
        let displayList = [];
        
        buttonsList = [];
        let sortedMap = new Map([...phylums.entries()].sort((a, b) => b[1] - a[1]));
        sortedMap.forEach(function(value, key){
            longDisplayText += `${value} instances of ${key}, `;
            displayList.push([key, value]);
        });

        let maxLen = 6;
        if (displayList.length < maxLen){
            maxLen = displayList.length;
        }
        for (let i = 0; i < maxLen; i++){
            let r = currentLocation[0] + 2;
            let c = currentLocation[1] + 1 * i + 5;
            if (i % 2 == 1) {
                r = currentLocation[0] + 12;
            }
            else{
                c = currentLocation[1] + 1 * (i+1) + 5;
            }
            let textToDisplay = `${displayList[i][0]} · ${displayList[i][1]}`;
            let button = createButton("");
            button.position(gridSize * r, gridSize * c);
            buttonsList.push(button);
            button.mouseClicked(function() {showMenu(displayList[i][0])});
            button.size(gridSize * 9, gridSize * 1.6);

            let iconContainer = createElement('div');
            iconContainer.style('display', 'flex');
            iconContainer.style('align-items', 'center');
            iconContainer.size(gridSize, gridSize);
            iconContainer.parent(button);
            if (iconMap.has(displayList[i][0])){ //if key is in iconMap
                let icon = createImg(iconMap.get(displayList[i][0]));
                icon.size(gridSize, AUTO);
                icon.parent(iconContainer);
            }
            let text = createElement('p',textToDisplay);
            text.parent(button);
        }
    }
    else {
        // no points
        isPopup = false;
        currentLocation = [0,0];
    }
}

function drawDebugData () {
    let australiaShape = createGraphics(windowWidth, windowHeight);
    drawMapSingular(australia, australiaShape);
    mezzotintImg.mask(australiaShape);
    staticBuffer.tint(240);
    staticBuffer.image(mezzotintImg, 0, 0, windowWidth, windowHeight);
}


let centerX = 150;
let centerY = -18;
let mapWidth = 8;
let mapHeight = 8;

function invertMap(mappedValue, start1, stop1, start2, stop2) {
    //chatGPT
    let originalValue = (mappedValue - start2) / (stop2 - start2) * (stop1 - start1) + start1;
    return originalValue;
}

function coordToPoint (lon, lat) {
    let x = map(lon, centerX-mapWidth, centerX+mapWidth, 0, width);
    let y = map(lat, centerY-mapHeight, centerY+mapHeight, height, 0);
    return [x,y];
}

  
function rotatePoint(cx, cy, x, y, angle) {
    //https://stackoverflow.com/questions/17410809/how-to-calculate-rotation-in-2d-in-javascript
    var radians = (PI / 180) * angle,
        c = cos(radians),
        s = sin(radians),
        nx = (c * (x - cx)) + (s * (y - cy)) + cx,
        ny = (c * (y - cy)) - (s * (x - cx)) + cy;
    return [nx, ny];
}

function pointToGrid (pX, pY) {
    return [floor(pX/gridSize), floor(pY/gridSize)];
}

function drawMapSingular(boundary, buffer) {
    let features = boundary.features;
    for (let i = 0; i < features.length; i++){
        buffer.fill(mapColor);
        buffer.strokeWeight(0);
        let coords = features[i].geometry.coordinates[0][0];
        buffer.beginShape();
        for (let j = 0; j < coords.length; j++) {         
            let lon = coords[j][0];
            let lat = coords[j][1];
            let point = coordToPoint(lon, lat);
            buffer.vertex(point[0], point[1]);            
        }
        buffer.endShape(CLOSE);
    }
}

class Element {
    constructor (x, y, n){
        this.x = x;
        this.y = y;
        this.n = n;
    }
}
class Block extends Element {
    constructor (x, y, n) {
        super(x, y, n);
    }
    draw () {
        fill(this.n);
        rect(this.x * gridSize, this.y * gridSize, gridSize, gridSize);
    }
}

class Circle extends Element {
    constructor (x, y, n) {
        super(x, y, n);    
    }
    draw (optionalColor = "#FFFFFF") {
        fill(optionalColor);
        ellipse(this.x * gridSize+ gridSize / 2,this.y * gridSize+ gridSize / 2, this.n /gridSize, this.n/gridSize);
    }
}

class Star extends Element  {
    constructor(x, y, n, r0, r1) {
        super(x, y , n);
        this.r0 = r0;
        this.r1 = r1;
        this.spinSpeed = random(-50, 50);

    }

    draw(optionalColor = brandBlue) {
        fill(optionalColor);
        push();
        translate(this.x * gridSize + gridSize / 2, this.y * gridSize + gridSize / 2);
        rotate(frameCount/2000 * this.spinSpeed)
        star(0, 0, this.r0, this.r1, floor(this.n/10));
        pop();
    }
}

class Text extends Element  {
    constructor(x, y, n, content){
        super(x, y, n);
        this.content = content;
        // this.letter = letter;
    }

    draw () {
        textBuffer.textSize(gridSize);
        textBuffer.textAlign(CENTER, BOTTOM);
        textBuffer.textFont(socialMono);
        if (this.content != " " && this.content != "\n" ){
            textBuffer.fill(mapColor);
            textBuffer.rect(this.x*gridSize, this.y*gridSize, gridSize, gridSize);
        }
        textBuffer.fill(255);
        textBuffer.text(this.content, this.x * gridSize+gridSize/2, this.y* gridSize + gridSize * 1.1);
    }
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
}

function originCircle(radius ) {
    let rs2 = radius*radius*4; /* this could be folded into ycs2 */
    let xs2 = 0;
    let ys2m1 = rs2 - 2*radius + 1;
    let x = 0;
    let y = radius;
    let ycs2;
    plot8( x, y );
    while( x <= y ) {
        /* advance to the right */
        xs2 = xs2 + 8*x + 4;
        ++x;
        /* calculate new Yc */
        ycs2 = rs2 - xs2;
        if( ycs2 < ys2m1 ) {
        ys2m1 = ys2m1 - 8*y + 4;
        --y;
        }
        plot8(x, y );
    }
}

function plot1 (x, y) {
    let val = random(190+(ms-timeClicked)/10, 255);
    if (val < 250){
        circleBuffer.fill(val);
        let gridX = gridSize * ceil((mouseX + x)/gridSize) - gridSize / 2;
        let gridY = gridSize * ceil((mouseY + y)/gridSize) - gridSize / 2;
        circleBuffer.ellipse(gridX, gridY, gridSize, gridSize)
    }
}

function plot8(x, y ) {
    plot1( x, y ); plot1( -x, y );
    plot1( x, -y ); plot1( -x, -y );
    plot1( y, x ); plot1( -y, x );
    plot1( y, -x ); plot1( -y, -x );
}

let randomDirections = [[0, 1], [0, -1], [1, 1], [1, 0], [1, -1], [-1, -1], [-1, 0], [-1, 1]];
class Animal {
    constructor(x, y, direction, img){
        this.birthday = millis();
        this.x = x;
        this.y = y;
        this.direction = direction;
        if (this.direction[0] == 0 && this.direction[0] == 0){
            this.direction[0] = -1;
            this.direction[1] = 1;
        }

        
        this.img = img;
    }

    draw() {
        // print(floor(millis())%400);
        if (floor(frameCount)%20 == 0){
            // this.x += min(1, this.direction[0] + round(random(0, 1)));
            // this.y += min(1, this.direction[1] + round(random(0, 1)));
            let d = random(randomDirections);
            // let offsetX = d[0] + this.direction[0];
            // let offsetY = d[1] + this.direction[1];
            this.x += d[0];
            this.y += d[1];
            // this.x += this.direction[0];
            // this.y += this.direction[1];
        }
        // if (random(0, 100) < 2){
            
        //     // this.x += min(1, this.direction[0] + round(random(0, 1)));
        //     // this.y += min(1,this.direction[1] + round(random(0, 1)));
        // }
        fill(brandPink);
        // print(this.x * gridSize, this.y * gridSize, mouseX, mouseY);
        rect(this.x * gridSize, this.y * gridSize, gridSize, gridSize);

        image(this.img, this.x * gridSize, this.y * gridSize, gridSize, gridSize);
    }


    
}