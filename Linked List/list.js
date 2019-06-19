class Node{
    constructor(el){
        this.el=el;
        this.next=null;
    }
}

class LL{
    constructor(){
        this.head=null;
        this.size=0;
    }


    add(el){
        var node=new Node(el);
        var current;

        if(this.size===0){
            this.head=node;
        }
           
        else{
            current=this.head;
            while(current.next!==null)
            {
                current=current.next;
            }
            current.next=node;
        }
        this.size +=1;        
    }
    getData(){
        return this.el;
    }
    print(){
        var it=new Node();
        it=this.head;
        var text="";
        if(this.head==null){
            text="Nothing to print";
        }
        else{
            while(it.next!== null){
                text +=it.el+" ";
                it=it.next;
            }
            text +=it.el+" ";
        }
        
        
        document.getElementById('space').innerHTML=text;
    }

    remove(){
        var current=new Node();
        current=this.head;
        var prev = new Node();
        if(this.size===1){
            this.head=null;
        }
        else{
            while(current.next!==null){
                prev=current;
                current=current.next;
    
            }
            prev.next=null;
        }
        this.size--;
        
    }

}

var l=new LL();



function add()
{

	var el=document.getElementById('EntryId').value;
    l.add(el);
	l.print();
}

function remove()
{
	l.remove();
	l.print();
}

function sort()
{
	stk.sort();
	print();
}