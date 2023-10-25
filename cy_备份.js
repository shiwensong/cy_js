function cy(str) {

    let trimmedStr = str.replace(/^\s+|\s+$/g, "");
    var arr = trimmedStr.split(/\s+/); // 使用正则表达式分割字符串，处理不同数量的空格
    var num1Sum = 0; // 用于存储所有第一个数的和  
    var num1Count = 0; // 用于记录第一个数的数量  
    var num2Sum = 0; // 用于存储所有第二个数的和（没有'/'的数字）  
    var num2Count = 0; // 用于记录第二个数的数量（没有'/'的数字）  
    var number1s = [];
    var number2s = [];

    console.log("原数据: " + arr.join("   "));
    for (var i = 0; i < arr.length; i++) {
        var fraction = arr[i].split("/"); // 将分数分割为数组  
        if (fraction.length === 2) { // 如果数组长度为2，说明有'/'，是分数  
            var num1 = parseFloat(fraction[0]); // 获取第一个数  
            if (num1 > 0) { // 如果数字大于0  
                num1Sum += num1; // 将第一个数加入总和  
                num1Count++; // 第一个数数量加1  
                number1s.push(num1);
            }

            var num2 = parseFloat(fraction[1]); // 获取第二个数  
            if (num2 > 0) { // 如果数字大于0  
                num2Sum += num2; // 将第一个数加入总和  
                num2Count++; // 第一个数数量加1  
                number2s.push(num2);
            }
        } else { // 否则，数组长度为1，说明没有'/'，是单独的数字  
            var num2 = parseFloat(arr[i]);
            if (num2 > 0) { // 如果数字大于0  
                num2Sum += num2; // 将数字加入总和  
                num2Count++; // 第二个数数量加1  
                number2s.push(num2);
            }
        }
    }
    // 计算平均数  
    var avgNum1 = (num1Sum / num1Count).toFixed(2).replace(/\.?0+$/, ""); // 第一个数的平均数  
    var avgNum2 = (num2Sum / num2Count).toFixed(2).replace(/\.?0+$/, ""); // 第二个数的平均数（没有'/'的数字）  
    avgNum1 = (avgNum1 == NaN || avgNum1 === 'NaN') ? 0 : avgNum1;
    avgNum2 = (avgNum2 == NaN || avgNum2 === 'NaN') ? 0 : avgNum2;
    console.log("第一组数字: " + number1s.join(", ") + "\t\t, 个数: " + num1Count + ", 总和: " + num1Sum);
    console.log("第二组数字: " + number2s.join(", ") + "\t\t, 个数: " + num2Count + ", 总和: " + num2Sum);
    console.log("第一个数的平均数：" + avgNum1);
    console.log("第二个数的平均数：" + avgNum2);
    console.log("已拷贝到粘贴板：" + avgNum1 + "/" + avgNum2);
    var result = avgNum1 + "/" + avgNum2;
    if (typeof document !== 'undefined') {
        let textArea = document.createElement("textarea");
        // 将 textArea 设为页面的一部分  
        document.body.appendChild(textArea);
        // 将字符串复制到 textArea  
        textArea.value = result;
        // 选中 textArea 中的文本  
        textArea.select();
        // 复制选中的文本到粘贴板  
        document.execCommand("copy");
        // 移除 textArea  
        document.body.removeChild(textArea);
    }
}

// cy("135.89/185.52	139/178	0/207.92	148.59/227.2	207.92	0/207.92")