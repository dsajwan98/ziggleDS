var arr=[];
function print()
{
	document.getElementById("space").innerHTML =arr.join(" ");
}


function add()
{

	var el=document.getElementById('EntryId').value;
	arr.push(el);
	print();
}

function remove()
{
	arr.pop();
	print();
}

function sort()
{
	arr.sort();
	print();
}