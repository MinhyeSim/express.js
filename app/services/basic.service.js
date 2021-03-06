exports.bmi = (payload) => {
    const {name, height, weight} = payload
    //Obtain user inputs
    let _height=Number(height);
    let _weight=Number(weight);

    //Perform calculation
    let bmi = _weight/Math.pow(_height,2);

    let output = Math.round(bmi*100)/100;
    const result = {name, height, weight}
    console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
    if (output<18.5)
        result.bmi = "저체중";
    if (output>=18.5 && output<=25)
        result.bmi = "정상";
    if (output>=25 && output<=30)
        result.bmi = "과체중";
    if (output>30)
        result.bmi = "경도비만";
        console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
    return result
  }
exports.calc = (payload) => {
    const {num1, opcode, num2} = payload
    const result = {num1, opcode, num2}
    console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
    if (opcode == '+')
      result.calc = (num1)+(num2);
    if (opcode == '-')
      result.calc = (num1)-(num2);
    if (opcode == '*')
      result.calc = (num1)*(num2);
    if (opcode == '/')
      result.calc = (num1)/(num2);
    if (opcode == '%')
      result.calc = (num1)%(num2);    
      console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
    return result
}

 /**
  app.post("/api/basic/bmi", (req, res)=>{
  const {name, height, weight} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`이름 : ${name}`)
  console.log(`키 : ${height}`)
  console.log(`몸무게 : ${weight}`)
  const json = computeBMI(name, height, weight)
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)
})

app.post("/api/basic/calc", (req, res)=>{
  const {num1, opcode, num2} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`숫자1 : ${num1}`)
  console.log(`연산자 : ${opcode}`)
  console.log(`숫자2 : ${num2}`)
  const json = computeCALC(num1, opcode, num2)
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)
})
  */