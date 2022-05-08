 var quiztitle = "Test de Verificare Inelul polinoamelor cu coeficienți complecși <br>Profesor Minea Carmen Mihaela <br> Colegiul Tehnic \"Costin D. Nenițescu\", Brăila";


 var quiz = [
    	{
            "question" : "Fie un polinom $P(x)$ de grad mai mare decât trei. Resturile împărțirilor lui P(x) la $x-1$ , $x-2$ și $X+2$ sunt respectiv 1, 8, -8 . Atunci restul împărțirii lui P(x) la $Q(x)=(x-1)(x^2-4)$ este :",
            "choices" : [
                                    "$R(x)=x^2+4x-2$",
                                    "$R(x)=x^2-x-4$",
                                    "$R(x)=x^2+4x-4$",
                                    "$R(x)=x^3+3x^2-5$"
                                ],
            "correct" : "$R(x)=x^2+4x-4$",
            "explanation" : " $$P(x)=(x-1)(x^2-4)C(x)+R(x)\,\R(x)=ax^2+bx+c$$ $$\\left\\{\\begin{array}{l}\\begin{array}{c}P(1)=a+b+c=1\\\\P(2)=4a+2b+c=8\\end{array}\\\\P(-2)=4a-2b+c=-8\\end{array}\\right.\\Rightarrow a=1, \\ b=4, \\ c=-4\\ \\Rightarrow$$ $$R(x)=x^2+4x-4$$",
        },
   		{
            "question" : "Fie polinomul $P(x)=x^4+x^3+ax+b\,\a,b\\in R$. Să se determine a și b dacă restul împărțirii lui $P(x+2)$ la $x+1$ este -18, iar restul împărțirii lui $P(x-2)$ la $x-1$ este -12 . ",
            "choices" : [
                                    "$a=-4, b=-16$",
                                    "$a=3, b=-12$",
                                    "$a=-3, b=12$",
                                    "$a=4, b=9$"
                                ],
            "correct" : "$a=-4, b=-16$",
            "explanation" : " $$\\left\\{\\begin{array}{l}f(x)=P(x+2)=(x+2)^4+(x+2)^3+a(x+2)+b\\\\g(x)=P(x-2)=(x-2)^4+(x-2)^3+a(x-2)+b\\end{array}\\right.\\Rightarrow$$ $$\\left\\{\\begin{array}{l}f(-1)=-18\\Rightarrow a+b=-20\\\\g(1)=-12\\Rightarrow-a+b=-12\\end{array}\\right.\\Rightarrow a=-4,\\ b=-16$$ ",
        },
  		{
            "question" : "Să se determine restul împărțirii polinomului $f=(x-2)^{2n}+(x-1)^n-1$ la polinomul $g=x^2-3x+2$. ",
            "choices" : [
                                    "$-x+1$",
                                    "$x+1$",
                                    "$1$",
                                    "$0$"
                                ],
            "correct" : "$0$",
            "explanation" : " $$\\left\\{\\begin{array}{l}f(1)=a+b\\Rightarrow a+b=0\\\\f(2)=2+b\\Rightarrow2a+b=0\\end{array}\\right.\\Rightarrow a=0,b=0\\Rightarrow$$ Restul împărțirii lui $$f(x) \\ la \\ x^2-3x+2 \\ este \\ $$ $$R=0$$ ",
        },
 		{
            "question" : "Se consideră polinomul $f=x^4+2x^3+mx^2+nx+p,\m,n,p\\in R$. Știind că restul împărțirii lui $f$ la $x-1$ este -15 și că polinomul admite rădăcina $-1+i$ , să se calculeze $f(2)$. ",
            "choices" : [
                                    "$8$",
                                    "$-6$",
                                    "$0$",
                                    "$4$"
                                ],
            "correct" : "$0$",
            "explanation" : " $$f(1)=-15\;\\Rightarrow m+n+p=-18$$ $$x_1=-1+i\\Rightarrow x_2=-1-i\\Rightarrow x^2+2x+2=0$$ Restul împărțirii lui $$f=x^4+2x^3+mx^2+nx+p \\ la \\ x^2+2x+2 \\ este \\  $$ $$R(x)=(n-2m+4)X+(p-2m+4)=0\\Rightarrow $$ $$\\left\\{\\begin{array}{l}\\begin{array}{c}m+n+p=-18\\\\-2m+n+4=0\\end{array}\\\\-2m+p+4=0\\end{array}\\right.\\Rightarrow m=-2,n=-8,p=-8\\Rightarrow f(2)=0$$ ",
        },
 		{
            "question" : "Se consideră ecuația $x^3+2x+1=0$cu rădăcinile $x_1,x_2,x_3$ . Ecuația de gradul al treilea cu rădăcinile $x_1^2,x_2^2,x_3^2$ este :",
            "choices" : [
                                    "$x^3+4x^2+4x-1=0$",
                                    "$x^3-4x^2+4x-1=0$",
                                    "$x^3+4x^2-4x-1=0$",
                                    "$x^3+x+1=0$"
                                ],
            "correct" : "$x^3+4x^2+4x-1=0$",
            "explanation" : " $$\\left\\{\\begin{array}{l}\\begin{array}{c}x_1+x_2+x_3=0\\\\x_1x_2+x_2x_3+x_1x_3=2\\end{array}\\\\x_1x_2x_3=-1\\end{array}\\right.$$ $$\\left\\{\\begin{array}{l}\\begin{array}{c}S_1=x_1^2+x_2^2+x_3^2=-4\\\\S_2=x_1^2x_2^2+x_2^2x_3^2+x_1^2x_3^2=12\\end{array}\\\\S_3=x_1^2x_2^2x_3^2=1\\end{array}\\right.$$ $$x^3-S_1x^2+S_2x-S_3=0\\Rightarrow x^3+4x^2+4x-1=0$$",
        },
		{
            "question" : "Polinomul $f=(a^2-3a+2)x^3+(a^2-4a+3)x^2+(a^2-1)x+1$are gradul doi pentru : ",
            "choices" : [
                                    "$a\\in\\left\\{1,2\\right\\}$",
                                    "$a\\in\\left\\{2\\right\\}$",
                                    "$a\\in R$",
                                    "$a\\in\\left\\{1\\right\\}$"
                                ],
            "correct" : "$a\\in\\left\\{2\\right\\}$",
            "explanation" : " $$a^2-3a+2=0\\Rightarrow a=1,a=2$$ $$a^2-4a+3\\neq0\\Rightarrow a\\neq1,a\\neq3$$ $$\\Rightarrow a=2$$",
        },
		{
            "question" : "Suma rădăcinilor ecuației $x^3-2mx^2+3m^2x+5=0$ este $x_1+x_2+x_3=4 .$ Să se calculeze $x_1x_2+x_2x_3+x_3x_1$. ",
            "choices" : [
                                    "$8$",
                                    "$12$",
                                    "$16$",
                                    "$10$"
                                ],
            "correct" : "$12$",
            "explanation" : " $S_1=x_1+x_2+x_3=\\frac{-b}a=2m=4\\\Rightarrow $$ $$S_2=x_1x_2+x_2x_3+x_3x_1=\\frac ca=3m^2=12$",
        },
		{
            "question" : "Dacă polinomul $P=6x^4+x^3+ax^2+bx-1\\\in C[x]$ se divide prin $ x^2+1 $ , atunci suma $a+b$ este egală cu : ",
            "choices" : [
                                    "$0$",
                                    "$2$",
                                    "$4$",
                                    "$6$"
                                ],
            "correct" : "$6$",
            "explanation" : " Restul împărțirii polinomului P(x) la $x^2+1$ este $$R(x)=(b-1)x-a+5=0\\Rightarrow a=5 \;\\\ b=1\\Rightarrow\\ a+b=6$$",
        },
 
   		{
            "question" : "Dacă polinomul $ \P=x^3-2x^2-x+a $ are două rădăcini opuse, atunci a treia rădăcină este : ",
            "choices" : [
                                    "$x_3=0$",
                                    "$x_3=1$",
                                    "$x_3=2$",
                                    "$x_3=-1$"
                                ],
            "correct" : "$x_3=2$",
            "explanation" : "$$\\ x_1+x_2+x_3=\\frac{-b}a=2 \$$ $$ x_1+x_2=0\\Rightarrow x_3=2$$",
        },		
    ];