const dis = document.getElementById("display")
         
        function lcase(){
            let input = document.getElementById("input").value
            let ans = input.toLowerCase()
            dis.innerHTML = ans;
        }

        function ucase(){
            let input = document.getElementById("input").value
            let ans = input.toUpperCase()
            dis.innerHTML = ans;
        }

        function strikethrough(){
            let input = document.getElementById("input").value
            let ans = input.strike()
            dis.innerHTML = ans;
        }

        function italic(){
            let input = document.getElementById("input").value
            let ans = input.italics()
            dis.innerHTML = ans;
        }

        function bold(){
            let input = document.getElementById("input").value
            let ans = input.bold()
            dis.innerHTML = ans;
        }

        function cap(){
            function capitalise(input) {

            
                // Split the input into an array of sentences
                let sentences = input.split(' ');
            
                // Capitalize the first letter of each sentence
                let capitalizedSentences = sentences.map(sentence => {
                    // Trim any leading white spaces
                    sentence = sentence.trim();
            
                    // Capitalize the first letter of the sentence
                    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
                });
            
                // Join the sentences back into a single string
                let result = capitalizedSentences.join(' ');
            
                return result;
            }
            
            
            let input = document.getElementById("input").value;
            
            let capitalizedText = capitalise(input);
            
            console.log(capitalizedText);
            dis.innerHTML = capitalizedText;

        }

        
        