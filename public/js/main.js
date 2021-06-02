// assigning variables
const heading = document.querySelector(".heading");
const userString = document.querySelector("#userString");
const encryptBtn = document.querySelector("#encryptBtn");
const result = document.querySelector(".result");
const footer = document.querySelector("footer");


// text content
heading.textContent = "Ceaser Cipher";
encryptBtn.innerHTML = 'Encrypt <i class="fas fa-hand-pointer"></i>';
footer.innerHTML = ' <a href="https://github.com/Sagar-Sharma-7" target="_blank" title="github" >Follow me on github </a><p>Made with <i class="fas fa-heart" title="love"></i> by Sagar Sharma</p>'


// encrypting
const encrypt = () => {
    const str = userString.value.toLowerCase();
    const charcters = {
        a: 'n',
        b: 'o',
        c: 'p',
        d: 'q',
        e: 'r',
        f: 's',
        g: 't',
        h: 'u',
        i: 'v',
        j: 'w',
        k: 'x',
        l: 'y',
        m: 'z',
        n: 'a',
        o: 'b',
        p: 'c',
        q: 'd',
        r: 'e',
        s: 'f',
        t: 'g',
        u: 'h',
        v: 'i',
        w: 'j',
        x: 'k',
        y: 'l',
        z: 'm',
        0: 5,
        1: 6,    
        2: 7,    
        3: 8,    
        4: 9,    
        5: 0,    
        6: 1,    
        7: 2,    
        8: 3,    
        9: 4,   
        " ":" ",
        "!": "*",
        "@": "(",
        "#": ")",
        "$": "_",
        "%": "-",
        "^": "+",
        "&": "=",
        "*": "[",
        "(": "{",
        ")": "]",
        "_": "}",
        "-": ":",
        "+": ";",
        "=": "'",
        "[": '"',
        "{": "<",
        "]": ",",
        "}": ">",
        ":": ".",
        ";": "?",
        "'": "/",
        '"': "|",
        "<": "!",
        ",": "@",
        ">": "#",
        ".": "$",
        "?": "%",
        "/": "^",
        "|": "&"
    }

    let resultStr = "";
    for(let i = 0; i < str.length; i++){
        resultStr += charcters[str[i]]
    }

    result.innerHTML = resultStr;
    $(".result").slideDown("slow").css("display", "flex")

}

// enter button
$("input").keypress(function(event) {
    if (event.keyCode === 13){
        encrypt();
    }
})


// calling function
encryptBtn.addEventListener("click", encrypt)