var i ;

function myprompt()
    {
        var person =prompt("Mary 的父親有 5 個女兒，第 1 個女兒 Nana ， 第 2 個女兒 Nene ， 第 3個女兒 Nini ，第 4 個女兒 Nono ，第 5 個女兒的名字是什麼？ ","名字");
        if(person != "Mary" ){ 
            alert("錯誤，下次再努力!"); 
            close('fraud.html');}
            else{alert("恭喜答對，請於下個網站中填寫個人資料以獲得夢寐以求的ps5!");
            open('contact.html');
            close('fraud.html');
            
        }
        
    }
function myprompt2()
    {
        var person =prompt("幾個學生排隊上校車。4個學生的前面有4個學生，4個學生的後面有4個學生，4個學生的中間也有4個學生。請問一共有幾個學生？","16");
        if(person != "8" ){
            alert("錯誤，下次再努力!"); 
            close('fraud.html');}
        else{alert("恭喜答對，請於下個網站中填寫個人資料以獲得夢寐以求的ps5!");
            open('contact.html');
            close('fraud.html');
            
    }
       
    }
function myprompt3()
    {
        var person =prompt("你參加賽跑，你追過最後一名，你是第幾名？","倒數第二名");
        if(person != "第一名" ){
            alert("錯誤，下次再努力!"); 
            close('fraud.html');}
            else{alert("恭喜答對，請於下個網站中填寫個人資料以獲得夢寐以求的ps5!");
            open('contact.html');
            close('fraud.html');
            
        }
        
    }
function myprompt4()
    {
        var person =prompt("有三個盒子，一只金的、一只銀的、一只是鉛的，其中一個有一個肖像。每只盒子上寫有一句： 金盒：肖像在這盒子； 銀盒：肖像不在這盒中； 鉛盒：肖像不在金盒中。已知以上三句中，只有一句是真。問肖像放在那個盒中？","金盒");
        if(person != "鉛盒" ){alert("錯誤，下次再努力!"); close('fraud.html');}
        else{alert("恭喜答對，請於下個網站中填寫個人資料以獲得夢寐以求的ps5!");
        open('contact.html');
        close('fraud.html');
        
    }
        
    }
 function myprompt5()
    {
        var person =prompt("弗里曼先生認識埃達、比、茜德、黛布、伊芙這五位女士。 ．(一) 五位女士分為兩個年齡類別：三位女士小於 30 歲，兩位女士大於 30 歲。 ．(二) 兩位女士是教師，其他三位女士是秘書。 (三) 埃達和茜德屬於相同的年齡類別。 (四) 黛布和伊芙屬於不同的年齡類別。 (五) 比和伊芙的職業相同。 (六) 茜德和黛布的職業不同。 (七) 弗里曼先生將同其中一位年齡大於 30 歲的教師結婚。 誰是弗里曼先生的未婚妻？","名字");
        if(person != "黛布" ){alert("錯誤，下次再努力!"); close('fraud.html');}
        else{alert("恭喜答對，請於下個網站中填寫個人資料以獲得夢寐以求的ps5!");
        open('contact.html');
        close('fraud.html');
        
    }
        
    }
function myprompt6()
    {
        var person =prompt("一個啞巴想買牙刷，他模仿刷牙的動作，成功的向店主表達，也完成了購買。現在如果一個瞎子想買一副太陽眼鏡，他要如何表達？","動作");
        if(person != "用嘴巴說" ){alert("錯誤，下次再努力!"); close('fraud.html');
    }
        else
        {
            
            alert("恭喜答對，請於下個網站中填寫個人資料以獲得全新ps5!");
            open('contact.html');
            close('fraud.html');
            
            
        }
    }
function newlink()
    {
        open('fraud.html');
        close('index.html');
    }
function myalert()
    {
        var text = "" ;
        text = "非常感謝您填寫之個人資料，我們會善加利用。但你得不到你夢寐以求的ps5因為這是詐騙網站^^抱歉打擾您寶貴的時間" ;
        alert(text) ;
        close();
    }



    function getRandom(min,max){

        var choice =  Math.floor(Math.random()*(max-min+1))+min;
        
        return choice ;
    };
    function randomq(){   
        
        var choice = getRandom(1,6) ; 

        switch(choice){
        case 1:
            new myprompt();
            return;
        case 2:
            new myprompt2();
            return;
            
        case 3:
            new myprompt3();
            return;
        case 4:
            new myprompt4();
            return;
        case 5:
            new myprompt5();
            return;
        case 6:
            new myprompt6();
            return;
    }}