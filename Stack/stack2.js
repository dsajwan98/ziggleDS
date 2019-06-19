
class Stack{
    constructor(){
        this.items=[];
    }
    
    push(el) {
        this.items.push(el);
    }

    pop(){
        if(this.items.length==0)
           alert("Underflow");
        else 
           return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

}

var stk=new Stack();
function print()
{
	document.getElementById("space").innerHTML=JSON.stringify(stk);
	
}


function add()
{

	var el=document.getElementById('EntryId').value;
	stk.push(el);
	print();
}

function remove()
{
	stk.pop();
	print();
}

function sort()
{
    stk.sort();
    print();
}


