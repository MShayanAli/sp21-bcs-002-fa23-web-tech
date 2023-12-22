export const cal = (req, res) => {
 
    const { op1, operation, op2 } = req.body;
    const num1 = parseInt(op1);
    const num2 = parseInt(op2);
  
    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        res.status(200).cookie("result",result,{
          httpOnly:true,
          maxAge:15*60*1000
        })
      return res.json({
          success:true,
          result:result,

        })
        break;
      case '-':
        result = num1 - num2;
        res.status(200).cookie("result",result,{
          httpOnly:true,
          maxAge:15*60*1000
        })
      return res.json({
          success:true,
          result:result,

        })
        break;
      case '*':
        result = num1 * num2;
        res.status(200).cookie("result",result,{
          httpOnly:true,
          maxAge:15*60*1000
        })
      return res.json({
          success:true,
          result:result,

        })
        break;
      case '/':
        result = num1 / num2;
        res.status(200).cookie("result",result,{
          httpOnly:true,
          maxAge:15*60*1000
        })
      return res.json({
          success:true,
          result:result,

        })
        break;
      default:
        res.status(400).json({ error: 'Operation Not Valid' });}  
  };
  