function main() {
    //take the number of passed levels
    var levels = parseInt(readLine(),10);
    var points = new Array();
    //console.log(points)
    
    var count = 0;
    while(count<levels){
        var elem = parseInt(readLine(),10);
        points[count] = elem;
        count++;
        //console.log(count)
        //console.log(elem)
        //console.log(points)
    }
  
    sum = eval(points.join("+"));
    console.log(sum);
    
}


    
