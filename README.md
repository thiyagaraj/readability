Text Readability Scorer - Experimental Firefox extension - v0.1
========================================================
*Author: Thiyagaraj Krishna* - [http://th.iy.ag](http://th.iy.ag "Personal site") / [Twitter](http://twitter.com/thiyagaraj "Thiyag on Twitter")

##Description:

This is an experimental firefox extension that I created during the Mozilla Developer Network Hackday on 24th March 2012 in New York City. It displays the reading scores for the following formulae:

* [Flesch-Kincaid Reading Ease](http://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_test)
* [Flesch-Kincaid Grade Level](http://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_test#Flesch_Reading_Ease)
* [Gunning Fog Index](http://en.wikipedia.org/wiki/Gunning_fog_index)
* [Coleman Liau Index](http://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index)
* [SMOG Index](http://en.wikipedia.org/wiki/SMOG)
* [Automated Readability Index](http://en.wikipedia.org/wiki/Automated_Readability_Index)

##Build Instructions
1. Download the [Mozilla Firefox Add-ons SDK](https://addons.mozilla.org/en-US/developers/builder)
2. Download the readability director into a place where you can activate the SDK and get to the command line(platform specific instructions will be in the SDK)
3. Enter "cfx run" in the command line while in the "readability" directory (SDK commandline)
4. It should launch an instance of the browser with the plugin loaded
5. Navigate to any webpage, wait until it loads, and then select some text,right-clicking should bring up the "Calculate Readability" menu item which would launch the scores in a "panel".

    NOTE: The tests in the test suite are the default tests and not updated for this code :) Please ignore. Also in its current iteration, it doesnt use any HTML5 and is a bare-bones basic HTML+JS app utilizing the Add-on API

License
=======

    Version: MPL 1.1/GPL 2.0/LGPL 2.1
    
    The contents of this file are subject to the Mozilla Public License Version 
    1.1 (the "License"); you may not use this file except in compliance with 
    the License. You may obtain a copy of the License at 
    http://www.mozilla.org/MPL/
    
    Software distributed under the License is distributed on an "AS IS" basis,
    WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
    for the specific language governing rights and limitations under the
    License.
    
    The Original Code is text-readability-score.
    
    The Initial Developer of the Original Code is Thiyagaraj Krishna.

    Portions created by the Initial Developer are Copyright (C) 2010
    the Initial Developer. All Rights Reserved.
	
	Portions of this software is adapted from Dave Child's PHP Text Statistics,  
	http://addedbytes.com / https://github.com/DaveChild/Text-Statistics
    
    Contributor(s):
    
    Alternatively, the contents of this file may be used under the terms of
    either the GNU General Public License Version 2 or later (the "GPL"), or
    the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
    in which case the provisions of the GPL or the LGPL are applicable instead
    of those above. If you wish to allow use of your version of this file only
    under the terms of either the GPL or the LGPL, and not to allow others to
    use your version of this file under the terms of the MPL, indicate your
    decision by deleting the provisions above and replace them with the notice
    and other provisions required by the GPL or the LGPL. If you do not delete
    the provisions above, a recipient may use your version of this file under
    the terms of any one of the MPL, the GPL or the LGPL.
