
var tab;
var t=document.querySelector('input[name="tab"]:checked').id;
if(t=="tab-1")
    tab=document.getElementById("tab-cnt-1");
else if(t=="tab-2")
    tab=document.getElementById("tab-cnt-2");
tab.addEventListener("click",function(e){
        var element=e.target;
        var range=document.createRange();
        range.selectNode(element);
        window.getSelection().addRange(range);
        try{
            var success=document.execCommand("copy");

        }catch(err){
            console.log(err);
        }

        window.getSelection().removeAllRanges();
});
