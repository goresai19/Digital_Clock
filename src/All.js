/*This is the old javascript methods to call the react and the reactdom  but when we install the react then with the react the  the babbler which is the javascript compiler which converts the modern es6 javascript to the copilable javascript is also installed so rather then using the following two calls we can use the modern es6 
 
  var REACT =require('react');
  var REACTDOM =require('react-dom');

"
*/

// The modern es6 to call the react and the react dom 
// The react is basically imported for the html part of the js file the react is used for the jsx of the react files 
import React from 'react';
//import REACT from 'react';

// This is the react dom stands for '  ' and it has various methods
import REACTDOM from 'react-dom';

import './index.css';
  
/* This is the render method in the javascript which is used to show a particular message the the render method basicallly takes three parameter which are       
1) KAY DAKHVAYACH AHE ( what meassage we have to show )
2) KUTH DAKHVAYACH AHE ( where we have to show the message)
3) and at last ther is the callback function 
*/
                                        //LECTURE 7 LEARNING
/* How to add the multiple jsx files inside the render fucntion so we can add the multiple jsx files to the render function by giving it inside an arrya or just by providing all the messages in a single div tag
*/   
//1) By using the div tag                            
REACTDOM.render(
  <div>
<h1> Sainath Gore</h1>
<p>This is my react app by using the div tag</p>
</div>
, document.getElementById('root'));
//2) By using the array                            
REACTDOM.render(
[
<h1> Sainath Gore(lecture 7)</h1>,
<p>This is my react app by using the array</p>
]
, document.getElementById('root1'));

                                          //LECTURE 8 LEARNING
//while using the div tag for the multiple render of the jsx fil when we  use the div tag at the backend one more div tag is created and it consumes more memory so to avid this we use the react fragment 

REACTDOM.render(
  <>
  <h1> Sainath Gore(lecture 8)</h1>
  <p>This is my react app by using the react.fragment</p>
  <ol> 
    <li>Money Heist</li>
    <li>Stranger Things</li>
    <li>Flames</li>
    <li>Hostel Dazs</li>
  </ol>
  </>
  , document.getElementById('root2'));



                              //lecture number 9  (Using the js expressions)
  //the js expression is used in the jsx part of the code by simply using the { 'expression '}
const flname="sai gore"
REACTDOM.render(
  <>
  <h1>Sainath Gore(lecture 9)17-12-2022</h1>
  <p>hi my name is {flname}</p>
  <p>my favorite player jersey number is {18+45}</p>
    </>,
  document.getElementById("expression")
);

                                      //Using the template literal in the javascript 
// the template literal in the javascipt is used inside the asterik symbol as  follows
const fname="sai";
const lname="gore";
REACTDOM.render(
<>
<h1>Sainath Gore(lecture 11)</h1>
<p>{`The use of the template literal is ${fname} ${lname}`}</p>
</>,
document.getElementById("root3")
);

                                //The reacat jsx tutorial challenge 2
const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();
REACTDOM.render(
  <>
  <h1>Sainath Gore(lecture 12)</h1>
  <p>{`Today's date is ${currdate} and current time is ${currtime}`}</p>
  </>,
  document.getElementById("root4")
);

                              //lecture 13: Using the jsx attributes

//The use of the react jsx attributes the react jsx attributes are notheig but the attributes  which we used with the tags in the html and also in react js we have to close all the tags that we give as a example we give the img tag in the html but never close it but in react js we have to close it by itself like " <img/> " this type of the tags are called as teh self closing tags
// note 1: Also in react js the attributes are named using the camelCase

const n="sai";
const img1="https://picsum.photos/200";
const link1="https://picsum.photos/";
REACTDOM.render(
  <>
  <h1 contentEditable="true">{n}</h1>
  <a href={link1}>
  <img src={img1} alt="sai"/>
  </a>
  </>
  ,document.getElementById("attributes")
);

                                 //Understanding the css filing and the use of importing css files
/* To import the css files in the react we have to first give header file which is " ./index.css " it includes the css file to the index.js and
 Note 1: The class is a functional component in the react js so we cant give it as a jsx attribute so we will simply use the className for naming the class */

 REACTDOM.render(
  <>
  <div className='heading'>This is the css importinga and styling video</div>
  <div className='images'>
  <img src={img1} alt='image1'/>
  </div>
  </>
  ,document.getElementById("lecture14")
 );
                                          //Lecture 15
                                  // How to add the google fonts to the react
/* To add the google fonts to the javascript we have to first add the link of the google font to the the html in the head of the index.html file and after which the css code  of the font  int the index.css */


                                          //Lecture 16
                                  // The inline and the internal css
/* the inline and the internal css is are used as object in the javascript and it is written in the camel case the camelCase rather the index.css is written in kebab case which is the two word are separated by the - and the intial letter of every letter is small letter */




                                          //Lecture 18
                        /* The import and the exoport in the react js
the import and the exoport methods in the react are used when we are building the app with the components we have to import and export the componets in the react and there can be only one default variable or fucntion that we are we are exporting in the react js and for remainin export and import we have to give the { } to the variable or the function name . */





