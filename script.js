// Library programming me pehle se likha hua code ka collection hota hai, jise hum apne project me use karke kaam ko aasaan aur fast bana dete hain.
// Framework pehle se bana hua structure (blueprint) hota hai jo batata hai ki project kaise organize aur develop karna hai. Isme rules aur tools dono hote hain, jinhe follow karke application banayi jaati hai.

// Example: React, Angular aur Vue frontend frameworks (React ko officially library kaha jata hai, lekin practical development me framework ki tarah bhi use kiya jata hai), jabki Laravel aur Django backend frameworks hain.

// Simple difference:
// Library: Tum library ko jab chaho tab use karte ho. (Library works for you.)
// Framework: Framework tumhare code ko control karta hai aur batata hai ki code kahan aur kaise likhna hai. (Framework calls your code.)

// reactJS is a library

// IMPORT AND EXPORT -- too file (js) ko joodna 
// * iske liya apko script js in html me tyle module karna padega
// too tarah ka export hota hai 
// 1. named -- hamne kisi ko name da diya or export kar diya
// 2. default -- har file kuch na kuch send kar rahi hai
import {a} from './app.js'
import userName from './app.js'
// aap yaha a jo impot me likha hai is ki jagah kuch bi likh sakta ho example chacha , number etc.
console.log(a);
console.log(userName);

import user2 from './test.js'
console.log(user2);

// REAL DOM VS VIRTUAL DOM
                //      real DOM 
                //      HTML 
                //   -------------
                //   |            |
                // HEAD        BODY 
                // |             ------------------------------
                // TITLE         |            |         |        |
                //              HEADER   SECTION1    SECTION2   FOOTER    
                //                            |
                //                            ---------------
                //                             |     |       |
                //                            H1  IMAGES   BUTTON
        // real dom me jab aap koi change karte hai to sara dom reload ho jata hai  
        // vitual dom real dom ka copy bana leta hai or us me change karta hai

        
// JSX ----- is combination of HTML and Javascript














