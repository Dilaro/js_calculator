let history = [];

function insert(value){
    document.form.textView.value += value;
}

function clearSymbol(){
    var text = document.form.textView.value;
    document.form.textView.value = text.substring(0, text.length-1);
}

function clearText(){
    document.form.textView.value = "";
}

function equal(){
    let text = document.form.textView.value;
    if (text){
        let result = eval(document.form.textView.value);
        document.form.textView.value = document.form.textView.value + "=" + result; 
        history.push(document.form.textView.value);
        document.form2.textHistory.value = "";

        if(history.length > 10){
             history.splice(0,1);
        }

         for(let i = 0; i < history.length; ++i){
           document.form2.textHistory.value = document.form2.textHistory.value + history[i] + ";" +"\n\n";
        }
    }

    document.form.textView.value = "";
}
