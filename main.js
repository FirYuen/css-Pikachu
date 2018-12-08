var code=`
#preview{
    height: 100%;
    border: 1px solid green;
    display: flex;

    justify-content: center;
    align-items: center;
    background: yellow;
}

#wrapper {
    width: 100%;
    height: 165px;
    /* border: 1px solid red; */
    position: relative;
}

#noise {
    width: 0%;
    height: 0%;
    border: 11px solid;
    border-color: black transparent transparent transparent;
    border-radius: 12px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
}

.eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid black;
}

.eye::after {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
}

#left-eye {
    right: 50%;
    margin-right: 90px
}

#right-eye {
    left: 50%;
    margin-left: 90px
}

.face {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: #fc0d1c;
    border: 2px solid black;
    position: absolute;
    top: 85px;
}

#left-face {
    right: 50%;
    margin-right: 116px;
}

#right-face {
    left: 50%;
    margin-left: 116px;
}

.upLip {
    height: 25px;
    width: 80px;
    border: 3px solid black;
    border-top: none;
    position: absolute;
    top: 67px;
    background: yellow;
}

#leftUpLip {
    border-bottom-left-radius: 40px 20px;
    border-right: none;
    right: 50%;
    transform: rotate(-20deg);
}

#rightUpLip {
    border-bottom-right-radius: 40px 20px;
    border-left: none;
    left: 50%;
    transform: rotate(20deg);
}

#downLipWrapper {
    width: 300px;
    height: 90px;
    /* border: 2px solid black; */
    
    position: absolute;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
    bottom: 0;
}

#downLip {
    width: 300px;
    height: 3500px;
    background: firebrick;
    border: 1px solid black;
    position: absolute;
    border-radius: 200px/2000px;
    bottom: 0;
    overflow: hidden;
}
#downLip::after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    left:50%;
    margin-left: -50px;
    bottom: -30px;
    border-radius: 50px;
}
`

!function () {
    function writeCode(prefix,code,fn) {
        let container =document.querySelector("#code")
        let styleTag = document.querySelector("#styleTag")
        let n = 0
        let timer = setInterval(()=>{
            n +=1
            // console.log(container)
            Wcode = code.substring(0,n)
            //console.log(Wcode)
            container.innerHTML=Wcode
            styleTag.innerHTML=Wcode
            container.scrollTop=container.scrollHeight
            if (n>code.length) {
                clearInterval(timer)
                fn&&fn.call()
            }
        },10)
      }
      writeCode("",code)
  }.call()