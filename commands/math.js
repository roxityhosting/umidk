const Discord = require('discord.js'),
      math = require('math-expression-evaluator');

exports.run = (Discord, client, message, args, tools) => {
    
    // Form Embed

    
    // Verify Input
    if (!args[0]) {
        

        // Return & Send Embed
        return message.channel.send('Please input an expression');
        
    }
    
    // Evaluate Expression
    let result;
    try {
        
        result = math.eval(args.join(' '));
        
    } catch (e) { // This will catch any errors in the expression
        
        result = 'Error: "Invalid Input"';
        
    }
        

         
    // Send Embed
    message.channel.send('**Input:** ' + args.join(' ') + '\n**Output:** ' + result);
    
}
