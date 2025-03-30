function processForm() {
  //获取用户输入的性别和年龄
  let gender = document.getElementById('gender').value;
  let age = parseInt(document.getElementById('age').value);

  //判断性别和年龄并显示对应的问候信息
  let greeting = '';
  if(gender === 'male') {
    greeting = (age >= 20) ? '小伙子，谢谢你的提交！' : '小兄弟，谢谢你的提交！';
  }
  else if(gender==='female') {
    greeting = (age>=20) ? '女士，谢谢你的提交！' : '小姑娘，谢谢你的提交！';
  }
  else {
    greeting = '谢谢你的提交';
  }

  //显示问候信息到页面上
  document.getElementById('greetingMessage').innerText = greeting;

  //在控制台中显示问候信息
  console.log(greeting);
}

function alert() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let sum=num1+num2;

  document.getElementById('sum_number').innerText = sum;

  if (isNaN(num1) || isNaN(num2)) {
    console.error("请输入有效的数字");
  }
}