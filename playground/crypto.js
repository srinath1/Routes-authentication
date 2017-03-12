var message = 'I am user number 3';
 var hash = SHA256(message).toString();
console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);



var data={
	id:4
};
var token={
	data,
	hash:SHA256(JSON.stringify(data)+'some secret').toString()
}
token.data.id=6;
token.hash=SHA256(JSON.stringify(token.data)).toString();
var resultHash=SHA256(JSON.stringify(token.data)+'some secret').toString();
if(resultHash===token.hash){
	console.log('ok');
}else{
	console.log('not ok');
}