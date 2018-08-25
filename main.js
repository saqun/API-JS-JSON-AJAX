function fibonacci(n, arr) {
    if (arr[n] != undefined) {
        return arr[n];
    }
    if (n < 2) {
        arr[n] = n;
        return n;
    } 
    var res = fibonacci(n-1, arr) + fibonacci(n-2, arr);
    arr[n] = res;
    return res;
}

function fibonacci_top(n) {
    var arr = [];
    fibonacci(n, arr);
    /* Create fibonacci table */
    var tab = document.createElement("TABLE");
    tab.setAttribute("id", "tab_fibo_result");
    for(i = 0; i < n; i++) {
        var tr = document.createElement("tr");

        var td = document.createElement("td");
        var txt = document.createTextNode("f(" + i + ")");
        td.appendChild(txt);
        tr.appendChild(td);
        
        td = document.createElement("td");
        txt = document.createTextNode(arr[i]);
        td.appendChild(txt);
        tr.appendChild(td);

        tab.appendChild(tr);
    }

    /* set table in div fibo_result */
    var div_result = document.getElementById("fibo_result");
    // clear everything from div
    div_result.innerHTML = "";
    div_result.appendChild(tab);
}

function doCompute() {
    var val = document.getElementById("fld_n");
    if (val && val.value) {
        // field has a value
        var xInt = parseInt(val.value);
        if (xInt!=NaN && xInt > 0) {
            // value is correct, compute fibonacci numbers
            fibonacci_top(xInt);
        }
    }
}