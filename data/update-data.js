
self.on('message', function(data)
	{ 
		console.log("DATA::::::::::::::::: "+data);
		document.getElementById('inText').innerHTML=data;

    var analyzeText = function(selText)
    {
        var textContent = normalizeText(selText.toString());
        var splitSentences = textContent.split(".");
        var cleanedSentences = new Array();
        
        for(var i=0; i<splitSentences.length; i++)
        {
            if(splitSentences[i].length >0)
            {
                cleanedSentences.push(splitSentences[i]);
            }
        }
        
        var sentenceCount = cleanedSentences.length;
        var wordCount = 0;
        var letterCount = 0;
        var syllableCount = 0;
        var complexWordCount = 0;
        
        for(var i=0; i<cleanedSentences.length; i++)
        {
            var wordArray = new Array();
            var wordSplitArray = cleanedSentences[i].split(" ");
            for( var j=0; j<wordSplitArray.length; j++)
                {
                    var currWord = wordSplitArray[j];
                    if(currWord.length > 0)
                       {
                         wordArray.push(currWord);
                         var wordSyllableCount = getSyllableCount(currWord);
                         syllableCount += wordSyllableCount;
                         if(wordSyllableCount > 2)
                         {
                            // Complex word
                            complexWordCount++;
                         }
                       }
                }
                // Removing anything that is not alphanumeric
                letterCount+= cleanedSentences[i].replace(/[^A-Za-z0-9]/g, '').length;
                wordCount+= wordArray.length;
        }

        // Averages
        var averageWordsPerSentence = wordCount / sentenceCount;
        var averageSyllablesPerWord = syllableCount / wordCount;
        
        // Flesch-Kincaid Reading Ease
        var fleschKincaidReadingEase = Math.round((206.835 - (1.015 * averageWordsPerSentence) - (84.6 * averageSyllablesPerWord)), 1);

        /**** GRADE LEVEL SCORES FOLLOW ******/
        // Flesch-Kincaid Grade Level
        var fleschKincaidGradeLevel = Math.round(((0.39 * averageWordsPerSentence) + (11.8 * averageSyllablesPerWord) - 15.59), 1);

        // Gunning Fog Score
        var gunningFogScore = Math.round(((averageWordsPerSentence + 100*(complexWordCount / wordCount)) * 0.4), 1);

        //Coleman-Liau Index
        var colemanLiauIndex = Math.round(((5.89 * (letterCount / wordCount)) - (0.3 * (sentenceCount / wordCount)) - 15.8 ), 1);

        //SMOG Index
        var smogIndex = Math.round(1.043 * Math.sqrt((complexWordCount * (30 / sentenceCount)) + 3.1291), 1);

        //Automated Readability Index
        var automatedReadabilityIndex = Math.round(((4.71 * (letterCount / wordCount)) + (0.5 * (wordCount / sentenceCount)) - 21.43), 1);
        
       return {
          "fleschKincaidReadingEase" : fleschKincaidReadingEase,
               "fleschKincaidGradeLevel" :fleschKincaidGradeLevel,
               "gunningFogScore":gunningFogScore,
               "colemanLiauIndex":colemanLiauIndex,
               "smogIndex":smogIndex,
               "automatedReadabilityIndex":automatedReadabilityIndex,
       }
    };

    var getSyllableCount = function(inWord)
    {
        var strWord = inWord.replace(/[^a-z]/ig, '');
        var arrWordParts = strWord.split(/[^aeiouy]+/);
        var intWordPartCount = 0;
        for(var i=0; i<arrWordParts.length;i++)
        {
            if(arrWordParts[i] != '')
            {
                intWordPartCount++;
            }
        }
        return intWordPartCount;
    };

    var normalizeText = function(inText)
    {
       // Replace the special characters given below
       inText = inText.replace(/[,:;()-]/g, ' ');

       // Convert all terminators to a fullstop
       inText = inText.replace(/[\.!?]/g, '.');
         
       // Replace new lines with spaces
       inText = inText.replace(/[ ]*(\n|\r\n|\r)[ ]*/g, ' ');
       
       // Check for duplicated terminators
       inText = inText.replace(/([\.])[\. ]+/g, '$1');
       
       // Normalize spaces - make it a single space
       inText = inText.replace(/[ ]+/g, ' ');

       return inText;
    };
	
	console.log("result :"+analyzeText(data).fleschKincaidReadingEase);
	var results = analyzeText(data);
	document.getElementById("fleschKincaidReadingEase").innerHTML = results.fleschKincaidReadingEase;
	document.getElementById("fleschKincaidGradeLevel").innerHTML = results.fleschKincaidGradeLevel;
	document.getElementById("gunningFogScore").innerHTML = results.gunningFogScore;
	document.getElementById("colemanLiauIndex").innerHTML = results.colemanLiauIndex;
	document.getElementById("smogIndex").innerHTML = results.smogIndex;
	document.getElementById("automatedReadabilityIndex").innerHTML = results.automatedReadabilityIndex;
	});