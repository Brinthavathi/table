 1st number:<input type="text"id="first number"/>
 2nd number:<input type="text"id="second number"/>
<input type="button"onClick="multipleBy()" value="multiply"/>
<p> the result is:<br>
<span id="result"></span>
</p>
function multipleBy()
{
	num1=document.getElementById("first number").value;
	num2=document.getElementById("second number").value;
	document.getElementById("result").inner.HTML=num1 * num2;
}
console.log("result");
