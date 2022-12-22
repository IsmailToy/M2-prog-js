class App{
    runApplication(){
        console.log("Kaas, yo")
    }



        dobbelsteen()
        {
            const drolls = [Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1)];
            drolls.sort();
            console.log(drolls);
            let totaal = drolls[1] + drolls[2] + drolls[3] + drolls[4] + drolls[5];
            console.log(totaal);
            totaal = 30

            if(totaal == 30){
                console.log("Lucky rolls")
                document.getElementById("foto").style.visibility = "visible";
            }

            if(totaal == 5){
                console.log("Bad rolls bozo")
            }


        }

}  

let app = new App;

app.dobbelsteen();
app.runApplication();