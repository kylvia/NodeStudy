/**
 * Created by alo on 2016/8/6.
 */
var students = require('./student');
var teacher = require('./teacher');
teacher.add('kylvia');
var cls=function(teacherName,studentsName){
	teacher.add(teacherName);
	studentsName.forEach(function(element,i){
		students.add(element);
	});
}
exports.add = cls;
//module.exports = add;
{protocol: 'http:',slashes: true,auth: 'user:pass',host: 'host.com:8080',port: '8080',hostname: 'host.com',hash: '#hash',search: '?query=string',query: 'query=string',pathname: '/p/a/t/h',path: '/p/a/t/h?query=string'}