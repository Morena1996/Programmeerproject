var gauge = loadGauge("fillgauge", 55);

    function NewValue(){
        if(Math.random() > .5){
            return Math.round(Math.random()*100);
            } else {
                return (Math.random()*100).toFixed(1);
            }
        }
