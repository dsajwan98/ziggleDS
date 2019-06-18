var stk=[];
function print()
{
	document.getElementById("space").innerHTML=stk;
	
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