 var quiztitle = "Test de Verificare Progresii <br>Profesor Minea Carmen Mihaela <br> Colegiul Tehnic \"Costin D. Nenițescu\", Brăila";

 var quiz = [
        {
            "question" : "Să se determine $a \\in R$ astfel încât numerele a+2, 2a+5, 4a+8 să fie în progresie aritmetică.",
            "image" : "",
            "choices" : [
                                    "a=1",
                                    "a=0",
                                    "a=-2",
                                    "a=-1"
                                ],
            "correct" : "a=0",
            "explanation" : "$$2a+5=\\frac{(a+2)+(4a+8)}{2} \\Rightarrow a=0 $$",
        },
        {
            "question" : "Al patrulea termen al unei progresii geometrice $b_n$ pentru care $b_3=20$ si $b_9=1280$ este:",
            "image" : "",
            "choices" : [
                                    "$b_4$=20",
                                    "$b_4$=30",
                                    "$b_4$=40",
                                    "$b_4$=50"
                                ],
            "correct" : "$b_4$=40",
            "explanation" : "$$\\frac{b_3}{b_9}=\\frac{20}{1280}\\Rightarrow q^6=64 \\Rightarrow q=2 \\Rightarrow b_4=b_3*q=40$$",
        },
        {
            "question" : "Să se găsească suma primilor 49 de termeni ai unei progresii aritmetice daca $a_1=-1$ și $a_{28}=53$",
            "image" : "",
            "choices" : [
                                    "$S_{49}=2501$",
                                    "$S_{49}=2303$",
                                    "$S_{49}=3148$",
                                    "$S_{49}=1676$"
                                ],
            "correct" : "$S_{49}=2303$",
            "explanation" : "$$a_{28}=a_1+27*r \\Rightarrow 53=-1+27*r \\Rightarrow r=2 \\Rightarrow $$ \n $$S_{49}=\\frac{(2*a_1+48*r)*49}{2}=2303$$",
        },
        {
            "question" : "Soluția ecuației 1+8+15+22+...+x=28125 este:",
            "image" : "",
            "choices" : [
                                    "x=84",
                                    "x=90",
                                    "x=92",
                                    "x=88"
                                ],
            "correct" : "x=90",
            "explanation" : "Numărul de termeni ai sumei este $$n=\\frac{x+6}{7}$$ iar valoarea sumei este$$\\frac{(1+x)*n}{2} \\Rightarrow \\frac{(1+x)*(x+6)}{2*7}=28125 \\Rightarrow x=90 $$",
        },
        {
            "question" : "Într-o progresie geometrică $b_5=61$ și $b_{11}=1647$. Să se afle $b_7$",
            "image" : "",
            "choices" : [
                                    "$b_7=180$",
                                    "$b_7=183$",
                                    "$b_7=190$",
                                    "$b_7=200$"
                                ],
            "correct" : "$b_7=183$",
            "explanation" : "$$\\frac{b_{11}}{b_5}=q^6 \\Rightarrow q^6=27 \\Rightarrow q=\\sqrt{3} \\Rightarrow a_1=\\frac{61}{9} \\Rightarrow a_7=183$$",
        },
        {
            "question" : "Fie progresia aritmetică $a_n$ în care $a_1=1$ și $a_5=13$. Să se calculeze $a_{2014}$",
            "image" : "",
            "choices" : [
                                    "$a_{2014}=4028$",
                                    "$a_{2014}=6039$",
                                    "$a_{2014}=6040$",
                                    "$a_{2014}=6014$"
                                ],
            "correct" : "$a_{2014}=6040$",
            "explanation" : "$$a_5=1+4*r \\Rightarrow r=3 \\Rightarrow a_{2014}=1+3*2013 \\Rightarrow a_{2014}=6040$$",
        },
        {
            "question" : "Fie progresia aritmetică $a_n$ în care $a_3=5$ și $a_6=11$. Să se calculeze $a_9$",
            "image" : "",
            "choices" : [
                                    "$a_9=17$",
                                    "$a_9=16$",
                                    "$a_9=18$",
                                    "$a_9=20$"
                                ],
            "correct" : "$a_9=17$",
            "explanation" : "$$a_3=a_1+2*r, a_6=a_1+5*r \\Rightarrow a_1+2*r=5, a_1+5*r=11 \\Rightarrow $$ \n $$r=2, a_1=1 \\Rightarrow a_9=1+8*2=17$$",
        },
        {
            "question" : "Să se determine numerele reale x știind că x-3, 4, x+3 sunt trei termeni consecutivi ai unei progresii aritmetice.",
            "image" : "",
            "choices" : [
                                    "x=5",
                                    "x=2",
                                    "x=3",
                                    "x=4"
                                ],
            "correct" : "x=4",
            "explanation" : "$$\\frac{(x-3)+(x+3)}{2}=4 \\Rightarrow x=4 $$",
        },
        {
            "question" : "Să se determine produsul primilor trei termeni ai unei progresii geometrice $b_n$ știind că primul termen este egal cu 1 și rația este q=-2",
            "image" : "",
            "choices" : [
                                    "$b_1*b_2*b_3=-8$",
                                    "$b_1*b_2*b_3=4$",
                                    "$b_1*b_2*b_3=8$",
                                    "$b_1*b_2*b_3=-4$",
                                ],
            "correct" : "$b_1*b_2*b_3=-8$",
            "explanation" : "$$b_2=-2, b_3=4 \\Rightarrow b_1*b_2*b_3=-8$$",
        },



    ];