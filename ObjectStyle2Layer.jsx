/* ObjectStyle2 Layer — takes all frames of a particular object style, document-wide, and moves them to the specified layer.

Written by Kai Rübsamen <https://creativepro.com/topic/object-style-to-new-layer/#post-103555> 

*/


var curDoc = app.activeDocument;
var objectStyleName = "YourObjectStyle";
var layerName = "YourLayer";    

var pItems = curDoc.pageItems.everyItem().getElements();
var nItems = pItems.length;

for (var i = 0; i < nItems; i++) {
  var curItem = pItems[i];
  if (curItem.appliedObjectStyle.name == objectStyleName && curItem.itemLayer.name != layerName) {             
    // move objects to layer
    curItem.itemLayer = curDoc.layers.itemByName(layerName);                     
  }
}