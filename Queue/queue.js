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
    arr.reverse();
    arr.pop();
    arr.reverse();
	print();
}

function sort()
{
	arr.sort();
	print();
}