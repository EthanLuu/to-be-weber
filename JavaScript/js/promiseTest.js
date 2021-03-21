var xhr = new XMLHttpRequest();
console.log(xhr.readyState);
xhr.open('get', 'https://jsonplaceholder.typicode.com/todos/1');
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText);
//     }
// };
console.log(xhr.readyState);
xhr.send();
xhr.onreadystatechange = function () {
    // 2 请求已经发送了
    // 3 已经接收到服务器端的部分数据了
    // 4 服务器端的响应数据已经接收完成
    console.log(xhr.readyState);
    // 对ajax状态码进行判断 如果状态码的值为4就代表数据已经接收完成了
    if (xhr.readyState == 4) {
        console.log(xhr.responseText);
    }
} 