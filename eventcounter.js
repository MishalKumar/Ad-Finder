function countEventHandlers(){
 
var elements = document.getElementsByTagName("*"), len = elements.length,
     counter = 0,
     countermap = [],
     /* fill up with more events if needed or just use those you want to look for */
     events = ['onmousedown', 'onmouseup', 'onmouseover', 'onmouseout', 
                   'onclick', 'onmousemove', 'ondblclick', 'onerror', 'onresize', 'onscroll',
                   'onkeydown', 'onkeyup', 'onkeypress', 'onchange', 'onsubmit'], 
     eventlen = events.length;
 
for ( var i = eventlen-1; i >= 0; --i ) {
    countermap[events[i]] = 0;   //reset the map
}
 
 
while ( len-- ) {  //go through all DOM-nodes
    var element = elements[len],
        tmp = eventlen;
    while ( tmp-- ) {  //go through all events defined above for each node and see if it exists.
        if ( element[events[tmp]] ) {
            counter++;
            countermap[events[tmp]]++;
        }
    }    
}
 
var someStats = counter + " events found in total\n\n";
for ( var o in countermap ) {
   someStats += o + " was found " + countermap[o] + " times\n";
}
alert(someStats);
 
}
